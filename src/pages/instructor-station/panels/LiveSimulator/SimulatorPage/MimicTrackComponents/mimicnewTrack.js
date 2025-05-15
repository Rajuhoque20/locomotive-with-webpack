import './MimicTrack.css'
import { Stage, Layer, Line, Image as KonvaImage, Text, Group, Rect, Circle, FastLayer } from "react-konva";
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { calculateTrackPoints, createFactorCalculator, findClosestTrackPoint, generateRoute, getRoutePositionPoints, MemoizedSignages, MemoizedSignal, MemoizedSwitchIcon } from './mimicFunctions';
import { Icons } from "#framework";
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp';
// import { Signals } from './AssetsComponents/Signals/signals';
import { PopUpcomp, TESelectPopUpView } from './mimicPopup';
// import SwitchIcon from './AssetsComponents/SwitchPoints/switch_point';
// import { Signages } from './AssetsComponents/Signages/signages';
import { useSimulatorStore } from '../../simulator-store';
import { UpdatedSignals, useTrainLocation } from './trainDataMounter';
import websocket from '../../../../../../services/Websocket';
import { InvisibleComponent } from './AssetsComponents/Signals/signals';
const MimicTrack = ({ trackdata, setAddTePopUp, addTePopUp }) => {

    const tracktrainConfig = {
        LineOne: {
            strokeWidth: 12
        },
        LineTwo: {
            strokeWidth: 8
        },
        LineThree: {
            strokeWidth: 16,
            dash: [3, 3]
        },
        trainYOffset: 10
    }


    //   All intialaizations

    const divRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0,midwidth:0,midheight:0 });
  
    useEffect(() => {
      if (divRef.current) {
        const { offsetWidth, offsetHeight } = divRef.current;
        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
          midwidth: offsetWidth/2,
          midheight: offsetHeight/2
        });
      }
    }, []); 

    const handleClick = (e) => {
        const rect = divRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
    
        setDimensions({
          width: rect.width,
          height: rect.height,
          midwidth: clickX,
          midheight: clickY
        });
      };
    console.log('dimensions',dimensions)
    const { tabs } = useSimulatorStore(state => state);
    const activeId = useSimulatorStore((store) => store.activeId);
    const activedata = tabs?.find(x => x.id === activeId)
    const sessionId = activedata?.content?.sessionId;
    const [targetPosition, setTargetPosition] = useState(0);
    const updatedPosition = useTrainLocation(sessionId)
    const [trainConfig, setTrainConfig] = useState([])
    const [tracks, setTracks] = useState(trackdata)
    const animationRef = useRef(null);
    const [viewport, setViewport] = useState({ x: 10, y: 50 });
    const [enableViewport, setEnableViewport] = useState(true)
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [scaleMarkers, setScaleMarkers] = useState([]);
    const [scaleDimensions, setScaleDimensions] = useState({ width: 0, offset: 0, startPosition: 0 });
    const locoRef = useRef(new Image());
    const wagonRef = useRef(new Image());
    const trainStartPosition = tracks?.find((x) => x.id === 1)
    const [train, setTrain] = useState({ x: 0, y: 0, currentPosition: trainStartPosition.curvature[0].start, speed: 0, angle: 0, trackPoints: [] })
    const trainObject = { trainId: 1, wagons: 10, wagonSpacing: 50 }
    const [signalpopup, setSignalpopup] = useState(null);
    const { icon_zoom_in, icon_zoom_out, viewon, viewoff, signageoff, signageon, signalon, signaloff, pointon, pointoff, LWFAC, WAG9 } = Icons.ISIcons;
    const [stageScale, setStageScale] = useState({ x: 1, y: 1 });
    const stageRef = useRef(null);
    const [isChecked, setIsChecked] = useState({
        signal: false, point: false, signage: false
    });
    const [tePopup, setTepopup] = useState(null)
    const [EASE_FACTOR, setEASE_FACTOR] = useState(0.2)
    useEffect(() => {
        const callback = (event) => event && setTrainConfig(event);
        websocket.subscribe('trainConfig', callback);
        return () => websocket.unsubscribeTopic('trainConfig');
    }, []);
    const updatedSignals = UpdatedSignals();
    const [trackpointdata, settrackpointdata] = useState([])
    // functions to update postions normal 
    useEffect(() => {
        if (typeof updatedPosition === 'number' && !isNaN(updatedPosition)) {
            setTargetPosition(prev => {
                const calculateFactors = createFactorCalculator()
                const getfactors = calculateFactors(prev - updatedPosition)
                setEASE_FACTOR(getfactors.easeFactor)
                // Only update if position changed significantly
                return Math.abs(prev - updatedPosition) > getfactors.easeFactor - getfactors.superFactor ? updatedPosition : prev;
            });
        }

    }, [updatedPosition]);


    useEffect(() => {
        setTracks(prevTracks =>
            prevTracks.map(track => {
                if (track.id === 1) {
                    // Check if the signals are actually different before updating
                    if (JSON.stringify(track.signals) === JSON.stringify(updatedSignals)) {
                        return track; // No update needed
                    }
                    return { ...track, signals: updatedSignals };
                }
                return track;
            })
        );

    }, [JSON.stringify(updatedSignals)]);


    // all functions
    const handleSignalCheck = useCallback((key) => {
        setSignalpopup(null);
        setIsChecked(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    }, []);

    const handleZoomIn = useCallback(() => {
        setStageScale(prev => ({
            x: Math.min(prev.x * 1.2, 1.2),
            y: Math.min(prev.y * 1.2, 1.2)
        }));
        setSignalpopup(null);
        setTepopup(null)
        setAddTePopUp(null)
    }, []);

    const handleZoomOut = useCallback(() => {
        setStageScale(prev => ({
            x: Math.max(prev.x / 1.2, 0.66),
            y: Math.max(prev.y / 1.2, 0.66)
        }));
        setSignalpopup(null);
        setTepopup(null)
        setAddTePopUp(null)

    }, []);

    const handleViewPort = useCallback(() => {
        // console.log('viewport', enableViewport);
        setEnableViewport(!enableViewport);
    }, [enableViewport]);

    const handleDragMove = useCallback(() => {
        setSignalpopup(null);
        setTepopup(null)
        setAddTePopUp(null)

    }, []);

    const handleSwitchPoint = (trackId, switchPointId) => {
        let updatedSwitchPoint = null;

        // Update the tracks state
        const updatedTracks = tracks.map(track => {
            if (track.id == trackId)  // Keep other tracks unchanged
            {
                return {
                    ...track,
                    switchPoints: track.switchPoints.map(switchPoint => {
                        if (switchPoint.id === switchPointId) {
                            updatedSwitchPoint = {
                                ...switchPoint,
                                state: switchPoint.state === "on" ? "off" : "on"
                            };
                            return updatedSwitchPoint;
                        }
                        return switchPoint;
                    })
                };
            }
            return track

        });

        setTracks(updatedTracks);

        // Publish the updated switch point object
        if (updatedSwitchPoint) {
            // console.log("Publishing updated switch point:", updatedSwitchPoint);
            websocket.publish('switchpoint', {
                switchPoint: updatedSwitchPoint,
                switchPointTrackId: trackId
            });
        }
    };

    const handleOnclick = useCallback((signal) => {
        if (stageRef.current) {
            const stage = stageRef.current.getStage();
            const pointerPosition = stage.getPointerPosition();
            if (!pointerPosition) return;
            signal['x'] = pointerPosition.x;
            signal['y'] = pointerPosition.y;
            setSignalpopup(signal);
        }
    }, []);

    //loading images
    // useEffect(() => {
    //     const loadImages = () => {
    //         return new Promise((resolve) => {
    //             const loco = locoRef.current;
    //             const wagon = wagonRef.current;

    //             loco.src = WAG9;
    //             wagon.src = LWFAC;

    //             let loadedCount = 0;
    //             const checkLoaded = () => {
    //                 loadedCount++;
    //                 if (loadedCount === 2) {
    //                     setImagesLoaded(true);
    //                     resolve();
    //                 }
    //             };

    //             loco.onload = checkLoaded;
    //             wagon.onload = checkLoaded;
    //         });
    //     };

    //     loadImages();
    // }, [LWFAC, WAG9]);


    useEffect(() => {
        const loco = new Image();
        const wagon = new Image();
      
        let isCancelled = false;
      
        const loadImages = () => {
          return new Promise((resolve) => {
            let loadedCount = 0;
      
            const checkLoaded = () => {
              loadedCount++;
              if (loadedCount === 2 && !isCancelled) {
                // Set the image objects only after both are loaded
                if (locoRef.current) locoRef.current.src = WAG9;
                if (wagonRef.current) wagonRef.current.src = LWFAC;
                setImagesLoaded(true);
                resolve();
              }
            };
      
            loco.onload = checkLoaded;
            wagon.onload = checkLoaded;
      
            loco.src = WAG9;
            wagon.src = LWFAC;
          });
        };
      
        loadImages();
      
        return () => {
          isCancelled = true;
      
          // Free image memory
          if (locoRef.current) {
            locoRef.current.src = '';
          }
          if (wagonRef.current) {
            wagonRef.current.src = '';
          }
        };
      }, [LWFAC, WAG9]);
      


    // usememo functions 
    const calculateTrackPointsMemo = useMemo(() => {
        return tracks.map(track => {
            // Ensure curvature starts with default values
            const curvature = track.curvature[0].start === 0
                ? [{ id: 0, start: -3000, end: -1, radius: 0 }, ...track.curvature]
                : track.curvature;

            // Find switch point track
            const findSwitchTrack = tracks.find(t =>
                t.switchPoints?.some(sp => sp.trackId === track.id)
            );

            const switchPoint = findSwitchTrack?.switchPoints.find(sp => sp.trackId === track.id);

            if (switchPoint) {
                const switchTrackData = trackpointdata.find(x => x.id === findSwitchTrack.id);
                const coordinates = switchTrackData?.lineone?.postionPoints.find(p => p.position === switchPoint.position);

                if (coordinates) {
                    // console.log('coordinates', coordinates);
                    const lineone = calculateTrackPoints(
                        coordinates.x, coordinates.y, curvature, curvature[0].start, coordinates.angle
                    );
                    return { lineone, id: track.id, type: 'switch' };
                } else {
                    console.error('Coordinates not found for switch point:', switchPoint);
                    return { lineone: [], id: track.id, type: 'switch' };
                }
            } else {
                let x = 0, y = 0;

                function getParallelTrack(tracks, trackId) {
                    for (let track of tracks) {
                        if (track.parallel_tracks?.length > 0) {
                            for (let parallel of track.parallel_tracks) {
                                if (parallel.id === trackId) {
                                    return { ...parallel, for: track.id };
                                }
                            }
                        }
                    }
                    return null;
                }

                let parallel = getParallelTrack(tracks, track.id);

                if (parallel) {
                    let findCord = trackpointdata.find(x => x.id === parallel.for);
                    if (findCord) {

                        y = parallel.direction > 0
                            ? findCord.lineone.postionPoints[0].y + (parallel.distance * 13)
                            : findCord.lineone.postionPoints[0].y - (parallel.distance * 13);
                        console.log('findDistancey', y)

                    }
                }

                const lineone = calculateTrackPoints(x, y, curvature, curvature[0].start);
                return { lineone, id: track.id, type: 'nonswitch' };
            }
        });


    }, [tracks, trackpointdata]); // Include `trackpointdata` to reactively update when needed

    // Update trackpointdata using useEffect
    useEffect(() => {
        settrackpointdata(calculateTrackPointsMemo);
    }, [calculateTrackPointsMemo]);


    // markers caluculations
    useEffect(() => {
        if (calculateTrackPointsMemo[0]?.lineone.postionPoints.length > 0) {
            const lineone = calculateTrackPointsMemo[0].lineone;
            const positions = lineone.postionPoints;

            const startPosition = positions[0].position;
            const endPosition = positions[positions.length - 1].position;
            const startX = positions[0].x;
            const endX = positions[positions.length - 1].x;
            const markers = [];
            for (let pos = startPosition; pos <= endPosition; pos += 100) {
                const point = positions.reduce((prev, curr) =>
                    Math.abs(curr.position - pos) < Math.abs(prev.position - pos) ? curr : prev
                );

                markers.push({
                    position: pos,
                    x: point.x * stageScale.x // Directly apply scale here
                });
            }

            const scaledWidth = (endX - startX) * stageScale.x;

            setScaleDimensions({
                width: scaledWidth,
                offset: startX * stageScale.x,
                startPosition: startX
            });

            setScaleMarkers(markers);
        }
    }, [stageScale, tracks, calculateTrackPointsMemo]);


    // train interpolate position
    const interpolatePosition = () => {

        setTrain(prevTrain => {

            const newPosition = prevTrain.currentPosition + (targetPosition - prevTrain.currentPosition) * EASE_FACTOR;

            if (Math.abs(targetPosition - newPosition) < 0.1) {
                return { ...prevTrain, currentPosition: targetPosition };
            }

            const trackSegment = findClosestTrackPoint(newPosition, prevTrain.trackPoints);
            if (!trackSegment) return prevTrain;

            const newTrainState = {
                ...prevTrain,
                currentPosition: newPosition,
                x: trackSegment.x,
                y: trackSegment.y,
                angle: trackSegment.angle
            };

            // Smooth viewport follow
            if (enableViewport) {
                setViewport(prev => {
                    // const targetX = -newTrainState.x * stageScale.x + INNER_WIDTH * 0.3 * WIDTH_RATIO;
                    // const targetY = -newTrainState.y * stageScale.y + INNER_HEIGHT * (1 / 3) * HEIGHT_RATIO;
                    const targetX = -newTrainState.x * stageScale.x + dimensions.midwidth;
                    const targetY = -newTrainState.y * stageScale.y + dimensions.midheight;
                    const easeFactor = EASE_FACTOR;

                    return {
                        x: prev.x + (targetX - prev.x) * easeFactor,
                        y: prev.y + (targetY - prev.y) * easeFactor
                    };
                });
            }

            return newTrainState;
        });

        animationRef.current = requestAnimationFrame(interpolatePosition);
    };


    // renderwagons
    const renderTrainAndWagons = () => {
        if (!imagesLoaded || !train.trackPoints.length) return null;
        // return Array.from({ length: trainObject.wagons }).map((_, index) => {
        return trainConfig.map((x, index) => {
            // const wagonPosition = Math.max(0, train.currentPosition - trainObject.wagonSpacing * (index + 1.1));
            const wagonPosition = (train.currentPosition) - trainObject.wagonSpacing * (index + 1.1);
            const trackSegment = findClosestTrackPoint(wagonPosition, train.trackPoints);
            return (
                <KonvaImage
                    key={`wagon-${index}`}
                    image={x.loco_type === 'WAP7' ? locoRef.current : wagonRef.current}
                    x={trackSegment.x}
                    y={trackSegment.y - tracktrainConfig.trainYOffset}
                    width={50}
                    height={20}
                    rotationDeg={(trackSegment.angle * 180) / Math.PI}
                    // style={{ transition: 'transform 0.1s linear ' }}
                    listening={false}
                    shadowEnabled={false}
                    hitStrokeWidth={0}
                />
            );
        });

    };



    useEffect(() => {
        // Cancel any existing animation
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        // Start new animation loop
        animationRef.current = requestAnimationFrame(interpolatePosition);

        // Cleanup
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [targetPosition, calculateTrackPointsMemo, train, enableViewport]);




    useEffect(() => {
        if (calculateTrackPointsMemo.length > 0) {
            // const mainTrack = calculateTrackPointsMemo.find(t => t.id === 1);
            let getRoutes = generateRoute(tracks, 0)
            let getpoints = getRoutePositionPoints(getRoutes, trackpointdata)
            // console.log('getpoints', getpoints)
            if (getpoints.length > 0) {
                setTrain(prev => ({
                    ...prev,
                    // trackPoints: mainTrack.lineone.postionPoints,
                    trackPoints: getpoints
                    //   currentPosition: mainTrack.lineone.postionPoints[0]?.position || 0
                }));
            }
        }
    }, [calculateTrackPointsMemo]);

    return (
        <div ref={divRef} onClick={(e) => handleClick(e)} style={{ height: '100%', width: '100%', overflow: 'hidden', position: 'relative'}}>
            <div
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: 30, overflow: 'hidden', zIndex: 1000, background: 'none', borderBottom: '0.1vh solid  rgba(255, 255, 255, 0.39)', overflowX: 'hidden', zIndex: 1000 }}
            >
                <div
                    style={{ position: 'relative', height: '100%', transformOrigin: 'left center', transform: `translateX(${viewport.x}px)`, width: `${scaleDimensions.width}px`, }}
                >
                    {scaleMarkers.map((marker, index) => (
                        <div key={index} style={{ position: 'fixed', left: `${marker.x}px`, height: '100%', width: 0, display: 'flex', alignItems: 'center' }}
                        >
                            <span style={{ position: 'absolute', top: 0, bottom: 0, fontSize: `${2 * stageScale.x}vh`, transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', }}
                            >
                                {`${marker.position}M`}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
            <Stage
                ref={stageRef}
                draggable={true}
                x={viewport.x}  // Apply dynamic position
                y={viewport.y}
                width={window.innerWidth} height={window.innerHeight}
                scale={stageScale}
                onDragMove={
                    (e) => {
                        stageRef.current?.batchDraw();
                        setViewport({
                            x: e.target.x(),
                            y: e.target.y()
                        });
                        handleDragMove()
                    }
                }
                onDragEnd={handleDragMove}

            >
                <Layer
                perfectDrawEnabled={false}
                >

                    {tracks
                        .map(track => ({
                            ...track,
                            trackData: calculateTrackPointsMemo.find(x => x.id === track.id)
                        }))
                        .filter(({ trackData }) => trackData?.type === 'nonswitch')
                        .map(({ id, trackData: { lineone } }) => {
                            const points = lineone.returnpoints;
                            return (
                                <Group key={id}>
                                    <Line
                                        points={points}
                                        stroke="black"
                                        strokeWidth={tracktrainConfig.LineOne.strokeWidth}
                                        listening={false} // Disable unnecessary event listeners
                                    />
                                    <Line
                                        points={points}
                                        strokeWidth={tracktrainConfig.LineTwo.strokeWidth}
                                        stroke="rgb(81 89 98)"
                                        listening={false}

                                    />
                                    <Line
                                        points={points}
                                        strokeWidth={tracktrainConfig.LineThree.strokeWidth}
                                        stroke="black"
                                        dash={tracktrainConfig.LineThree.dash}
                                        lineCap="butt"
                                        perfectDrawEnabled={false} // Disable extra smoothing
                                        listening={false}
                                    />
                                </Group>

                            );
                        })}


                    {tracks.map((track) => {
                        const { lineone, type } = calculateTrackPointsMemo.find(x => x.id === track.id);
                        // console.log('sign',track)
                        return (
                            <Group key={track.id}>
                                {type === 'switch' && (
                                    <>
                                        <Line points={lineone.returnpoints} stroke="black" strokeWidth={tracktrainConfig.LineOne.strokeWidth} listening={false} />
                                        <Line points={lineone.returnpoints} strokeWidth={tracktrainConfig.LineTwo.strokeWidth} stroke="rgb(81 89 98)" listening={false} />
                                        <Line
                                            points={lineone.returnpoints}
                                            strokeWidth={tracktrainConfig.LineThree.strokeWidth}
                                            stroke="black"
                                            dash={tracktrainConfig.LineThree.dash}
                                            lineCap="butt"
                                            perfectDrawEnabled={false}
                                            listening={false}
                                        />
                                    </>
                                )}

                                {isChecked.signal &&
                                    track.signals.map(signal => {
                                        const point = lineone.postionPoints.find(p => p.position === signal.position);
                                        if (!point) return null;

                                        return (
                                            <MemoizedSignal
                                                key={signal.id}
                                                payload={{
                                                    signal,
                                                    x: point.x,
                                                    y: signal.state.direction === 'right' ? point.y + 15 : point.y - 27,
                                                    angle: (point.angle * 180) / Math.PI,
                                                    onClick: () => handleOnclick({ signal: signal.id, trackId: track.id, signalInfo: signal })
                                                }}
                                            />
                                        );
                                    })}

                                {isChecked.point &&
                                    track.switchPoints.map(switchpoint => {
                                        const point = lineone.postionPoints.find(p => p.position === switchpoint.position);
                                        if (!point) return null;

                                        return (
                                            <MemoizedSwitchIcon
                                                key={switchpoint.id}
                                                isOn={switchpoint.state === 'on'}
                                                x={point.x}
                                                y={switchpoint.direction === 'right' ? point.y : point.y - 35}
                                                onToggle={() => handleSwitchPoint(track.id, switchpoint.id)}
                                                deg={(point.angle * 180) / Math.PI}
                                            />
                                        );
                                    })}


                                {isChecked.signage &&
                                    track.signages.map(signage => {
                                        const point = lineone.postionPoints.find(p => p.position === signage.position);
                                        if (!point) return null;

                                        return (
                                            <MemoizedSignages
                                                key={signage.id}
                                                payload={{
                                                    signage,
                                                    x: point.x,
                                                    y: signage.direction === 'right' ? point.y + 75 : point.y - 130,
                                                    angle: (point.angle * 180) / Math.PI
                                                }}
                                            />
                                        );
                                    })}

                                {
                                    track.signages.map(signage => {
                                        const point = lineone.postionPoints.find(p => p.position === signage.position);
                                        if (!point) return null;
                                        if (signage?.state?.type === 'pole') {

                                            return (
                                                <InvisibleComponent x={point.x} y={point.y - 10} height={20} width={20}
                                                    angle={(point.angle * 180) / Math.PI}
                                                    onClick={(e) => {
                                                        const stage = e.target.getStage();
                                                        const pointer = stage.getPointerPosition();
                                                        setTepopup({
                                                            x:pointer.x,
                                                            y:pointer.y,
                                                            postion:signage.position,
                                                            value:signage?.state?.config?.value 
                                                        })
                                                        setAddTePopUp(null)
                                                    }}
                                                />
                                            )
                                        }

                                    })
                                }

                            </Group>
                        );

                    })}

                    {
                        <Line
                            points={train.trackPoints.flatMap(({ x, y }) => [x, y])}
                            stroke="red"
                            strokeWidth={1}
                        />
                    }

                    {imagesLoaded && (
                        <>
                            {renderTrainAndWagons()}
                        </>
                    )}

                </Layer>
            </Stage>

            {signalpopup && (
                <div
                    style={{ position: "absolute", top: 40, left: signalpopup.x, height: 'auto', width: 'auto' }}
                >
                    <PopUpcomp tracks={tracks} setTracks={setTracks} signalData={signalpopup} setSignalpopup={setSignalpopup} />
                </div>
            )}

            {tePopup && (
                <div
                    style={{ position: "absolute", top: tePopup.y - 80, left: tePopup.x, height: '15%',
                        minWidth: '20%',
                        width: '25%',
                     }}
                >
                    <TESelectPopUpView setTepopup={setTepopup} setAddTePopUp={setAddTePopUp} tePopup={tePopup}/>
                </div>
            )}


            <div className='positionIndicator'>
                {`${Math.round(train.currentPosition)} M`}
            </div>

            <div className="zoom-div">
                <div className="zoom-actions">
                    <ButtonComp onClick={handleZoomIn} bntStyle={{ height: "24px", width: "100%", background: "none" }} prefixIcon={icon_zoom_in} />
                </div>
                <div className="zoom-actions">
                    <ButtonComp onClick={handleZoomOut} bntStyle={{ height: "24px", width: "100%", background: "none" }} prefixIcon={icon_zoom_out} />
                </div>
            </div>

            <div className='viewportdiv'>
                <ButtonComp onClick={handleViewPort} bntStyle={{ "height": "24px", "width": "100%", "background": "none" }} prefixIcon={enableViewport ? viewon : viewoff} />
            </div>

            <div className="layout_actions">
                <div className='l_action'>
                    <ButtonComp onClick={() => handleSignalCheck('signage')} bntStyle={{ "height": "24px", "width": "100%", "background": "none" }} prefixIcon={isChecked.signage ? signageon : signageoff} />
                </div>
                <div className='l_action'>
                    <ButtonComp onClick={() => handleSignalCheck('signal')} bntStyle={{ "height": "24px", "width": "100%", "background": "none" }} prefixIcon={isChecked.signal ? signalon : signaloff} />
                </div>
                <div className='l_action'>
                    <ButtonComp onClick={() => handleSignalCheck('point')} bntStyle={{ "height": "24px", "width": "100%", "background": "none" }} prefixIcon={isChecked.point ? pointon : pointoff} />
                </div>


            </div>
        </div>
    );
}




export default MimicTrack;