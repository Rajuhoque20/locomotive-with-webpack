
// import './MimicTrack.css'
// import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp'
// import { Icons } from "#framework";
// import { CustomCheckbox } from "../Simulation/AddFault";
// import { createRoot } from "react-dom/client";
// import GradientPost from "../../../../../../components/Signage/GradientPost";
// import { Stage, Layer, Line, Image as KonvaImage, Text, Group, Rect } from "react-konva";
// import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
// import { calculateTrackPoints } from './mimicFunctions';
// import { Signals } from './AssetsComponents/Signals/signals';
// import { PopUpcomp } from './mimicPopup';
// import SwitchIcon from './AssetsComponents/SwitchPoints/switch_point';
// import { Signages } from './AssetsComponents/Signages/signages';

// const TrackLayoutModel = ({ tab }) => {
//   const { icon_zoom_in, icon_zoom_out, icon_move, locosvg, wagonsvg, switchpointon, switchpointoff, Stop } = Icons.ISIcons;
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const scaleRef = useRef(null);
//   const objectImage = new Image();
//   const objectwagon = new Image();
//   const [isChecked, setIsChecked] = useState({
//     signal: false,
//     point: false,
//     signage: false
//   });
//   const handleSignalCheck = (key) => {
//     if (popupsContainer) {
//       popupsContainer.innerHTML = "";
//     }
//     setIsChecked((prev) => ({
//       ...prev,
//       [key]: !prev[key] // Toggle the specific key
//     }));
//   };
//   const drawFunctionsRef = useRef({
//     drawTracks: () => { },
//     drawTrains: () => { },
//     drawScale: () => { },
//   });
//   const sOn = new Image();
//   const sOff = new Image();
//   const signalimg = new Image();
//   const trackStart = 0; // Starting position of the track
//   const trackEnd = 2000; // Ending position of the track
//   let scale = 1
//   let isDragging = false;
//   let dragStartX, dragStartY;
//   let offsetX = 0, offsetY = 0
//   let animationFrameId;
//   const popupsContainer = document.getElementById("popups-container");

//   const trackArray = [
//     {
//       id: 1,
//       lineLength: 2000,
//       curvature: [
//         //{ position: 200, direction: 'right', degree: 90 },
//         //	{ position: 500, direction: 'left', degree: 45 },
//       ],
//       signals: [
//         { id: 1, position: 300, signal: 'stop', direction: 'left' },
//         { id: 2, position: 1900, signal: 'stop', direction: 'right' }
//       ],

//       speed: 1, // Speed in pixels per frame
//       points: [],
//       distances: [],
//       diversions: [
//         {
//           id: 1,
//           position: 300, // Position along main track where the diversion begins
//           lineLength: 700,
//           curvature: [
//             { position: 50, direction: 'left', degree: 45 },
//             { position: 150, direction: 'right', degree: 45 },
//             { position: 500, direction: 'right', degree: 45 },
//             { position: 600, direction: 'left', degree: 45 },

//           ],
//           signals: [
//             // { position: 150, signal: 'warning', direction: 'right' }
//           ],
//           switchPoints: [
//             {
//               position: 0,
//               type: 'on',
//               side: 'right'
//             }
//           ],
//           points: [], // Added points array for diversion
//           distances: [], // Added distances array for diversion,
//         },
//         {
//           id: 2,
//           position: 300, // Position along main track where the diversion begins
//           lineLength: 700,
//           curvature: [
//             { position: 50, direction: 'left', degree: 45 },
//             { position: 150, direction: 'right', degree: 45 },
//           ],
//           signals: [
//             // { position: 150, signal: 'warning', direction: 'right' }
//           ],
//           switchPoints: [

//           ],
//           points: [], // Added points array for diversion
//           distances: [] // Added distances array for diversion
//         },
//         {
//           id: 3,
//           position: 200, // Position along main track where the diversion begins
//           lineLength: 400,
//           curvature: [
//             { position: 50, direction: 'right', degree: 45 },
//             { position: 315, direction: 'left', degree: 45 },
//           ],
//           signals: [
//             // { position: 150, signal: 'warning', direction: 'right' }
//           ],
//           switchPoints: [
//             {
//               position: 0,
//               type: 'on',
//               side: 'left'
//             }
//           ],
//           points: [], // Added points array for diversion
//           distances: [] // Added distances array for diversion
//         }
//       ]
//     },
//     {
//       id: 2,
//       lineLength: 1500,
//       curvature: [
//         // { position: 200, direction: 'right', degree: 90 },
//         // { position: 500, direction: 'right', degree: 60 },
//       ],
//       signals: [{ id: 3, position: 300, signal: 'stop', direction: 'right' }],

//       speed: 10, // Speed in pixels per frame
//       points: [],
//       distances: [],
//       diversions: [
//         {
//           id: 1,
//           position: 400, // Position along main track where the diversion begins
//           lineLength: 600,
//           curvature: [
//             { position: 50, direction: 'right', degree: 45 },
//             { position: 150, direction: 'left', degree: 45 },
//             { position: 350, direction: 'left', degree: 45 },
//             { position: 450, direction: 'right', degree: 45 },
//           ],
//           signals: [
//             // { position: 150, signal: 'warning', direction: 'right' }
//           ],
//           switchPoints: [
//             {
//               position: 0,
//               type: 'on',
//               side: 'left'
//             }
//           ],
//           points: [], // Added points array for diversion
//           distances: [] // Added distances array for diversion
//         },
//         {
//           id: 2,
//           position: 400, // Position along main track where the diversion begins
//           lineLength: 600,
//           curvature: [
//             { position: 50, direction: 'right', degree: 45 },
//             { position: 150, direction: 'left', degree: 45 },
//             { position: 350, direction: 'left', degree: 45 },
//             { position: 450, direction: 'right', degree: 45 },
//           ],
//           signals: [
//             { id: 4, position: 150, signal: 'warning', direction: 'left' }
//           ],
//           switchPoints: [
//             {
//               position: 0,
//               type: 'on',
//               side: 'left'
//             }
//           ],
//           points: [], // Added points array for diversion
//           distances: [] // Added distances array for diversion
//         },
//         {
//           id: 3,
//           position: 1000, // Position along main track where the diversion begins
//           lineLength: 400,
//           curvature: [
//             { position: 50, direction: 'left', degree: 45 },
//             { position: 315, direction: 'right', degree: 45 },
//           ],
//           signals: [
//             // { position: 150, signal: 'warning', direction: 'right' }
//           ],
//           switchPoints: [
//             {
//               position: 0,
//               type: 'on',
//               side: 'left'
//             }
//           ],
//           points: [], // Added points array for diversion
//           distances: [] // Added distances array for diversion
//         },

//       ]
//     },
//   ];


//   const trainObjects = [
//     {
//       id: 1,
//       objectPosition: 300, // Position along the current segment of the route
//       currentSegmentIndex: 0, // Index of the current route segment
//       speed: 0, // Speed in pixels per frame
//       color: 'red',
//       wagons: 10,
//       wagonPositions: [],
//       objectRoute: [
//         { mainTrackId: 1, start: 0, end: 350 },
//         { mainTrackId: 1, diversionId: 1, start: 0, end: 800 },
//         { mainTrackId: 1, start: 1090, end: 1500 },
//         { mainTrackId: 1, start: 0, end: 250 },
//         { mainTrackId: 1, diversionId: 3, start: 0, end: 450 },
//         { mainTrackId: 2, start: 600, end: 1500 },
//       ]
//     },

//   ];



//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = 3000;
//     canvas.height = 3000;

//     drawScale()

//     objectImage.src = locosvg;
//     objectwagon.src = wagonsvg
//     sOn.src = switchpointon
//     sOff.src = switchpointoff
//     signalimg.src = Stop
//     objectImage.onload = () => {
//     };
//     objectwagon.onload = () => {
//     }
//     sOff.onload = () => {
//     }
//     sOn.onload = () => {
//     }

//     const drawSwitchPoints = async (ctx, diversion) => {
//       if (isChecked.point) {
//         const promises = diversion.switchPoints.map((switchPoint) => {
//           return new Promise((resolve, reject) => {
//             const point = diversion.points[switchPoint.position];
//             const nextPoint = diversion.points[switchPoint.position + 1];

//             if (point && nextPoint) {
//               const offset = 20;
//               const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);

//               // Calculate offset direction based on switchPoint side
//               const angleOffset = angle + (switchPoint.side === "left" ? Math.PI / 2 : -Math.PI / 2);
//               const offsetX = offset * Math.cos(angleOffset);
//               const offsetY = offset * Math.sin(angleOffset);

//               // Draw the switch point icon
//               const img = switchPoint.type === "on" ? sOn : sOff;
//               const imgSize = 50 / scale;

//               // Simulating asynchronous operation (like loading image, etc.)
//               ctx.drawImage(img, point.x + offsetX - imgSize / 2, point.y + offsetY - imgSize / 2, imgSize, imgSize);

//               resolve();
//             } else {
//               reject('Point not found');
//             }
//           });
//         });

//         // Wait for all promises to resolve
//         await Promise.all(promises)
//           .then(() => {
//             console.log('All switch points drawn');
//           })
//           .catch((err) => {
//             console.error('Error drawing switch points:', err);
//           });
//       }
//     };

//     const drawTracks = () => {
//       ctx.save();
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);
//       trackArray.forEach((track, index) => {
//         const trackOffsetY = index * 200;
//         calculateTrackPoints(track, trackOffsetY);
//         drawTrack(ctx, track);
//         drawSignals(ctx, track);

//         track.diversions.forEach((diversion) => {
//           const startPoint = track.points[diversion.position];
//           if (startPoint) {
//             const mainTrackAngle = calculateTrackDirection(track, diversion.position);

//             calculateTrackPoints(diversion, 0);
//             diversion.points = diversion.points.map((p) => ({
//               x: p.x + startPoint.x,
//               y: p.y + startPoint.y,
//             }));

//             diversion.points = diversion.points.map((point) => {
//               const angle = mainTrackAngle * (Math.PI / 180);
//               return {
//                 x: startPoint.x + (point.x - startPoint.x) * Math.cos(angle) - (point.y - startPoint.y) * Math.sin(angle),
//                 y: startPoint.y + (point.x - startPoint.x) * Math.sin(angle) + (point.y - startPoint.y) * Math.cos(angle) - 50,
//               };
//             });

//             drawTrack(ctx, diversion);
//             drawSignals(ctx, diversion);
//             drawSwitchPoints(ctx, diversion); // Add this line

//           }
//         });
//       });

//       ctx.restore();
//     };

//     const drawTrains = async () => {
//       ctx.save();
//       ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);

//       // Map over the trainObjects and create an array of promises
//       const trainPromises = trainObjects.map(async (train) => {
//         if (train.currentPoint && typeof train.angle !== "undefined") {
//           // Draw the train engine
//           ctx.translate(train.currentPoint.x, train.currentPoint.y);
//           ctx.rotate(train.angle);

//           const imgSizeHeight = 8 / scale;
//           const imgSizeWidth = 30 / scale;
//           ctx.drawImage(
//             objectImage,
//             -imgSizeHeight / 2, // Center the image horizontally
//             -imgSizeHeight / 2, // Center the image vertically
//             imgSizeWidth, // Width of the image
//             imgSizeHeight // Height of the image
//           );

//           ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);

//           // Map over the wagons to create promises for each wagon
//           const wagonPromises = train.wagonPositions.map(async (wagonPoint, index) => {
//             if (wagonPoint && typeof train.wagonAngles[index] !== "undefined") {
//               ctx.translate(wagonPoint.x, wagonPoint.y);
//               ctx.rotate(train.wagonAngles[index]);

//               const imgSizeWidth = 30 / scale;
//               ctx.drawImage(
//                 objectwagon,
//                 -imgSizeHeight / 2, // Center the image horizontally
//                 -imgSizeHeight / 2, // Center the image vertically
//                 imgSizeWidth, // Width of the image
//                 imgSizeHeight // Height of the image
//               );

//               ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);
//             }
//           });

//           // Wait for all wagon drawing promises to resolve
//           await Promise.all(wagonPromises);
//         }
//       });

//       // Wait for all train drawing promises to resolve
//       await Promise.all(trainPromises);

//       ctx.restore();
//     };

//     const animateTrains = () => {
//       trainObjects.forEach((train) => {
//         const route = train.objectRoute;

//         if (!route || route.length === 0) return;

//         const currentSegment = route[train.currentSegmentIndex];
//         const track = trackArray.find((t) => t.id === currentSegment.mainTrackId);
//         if (!track) return;

//         let activeTrack = track;
//         if (currentSegment.diversionId) {
//           activeTrack = track.diversions.find((d) => d.id === currentSegment.diversionId);
//           if (!activeTrack) return;
//         }

//         const segmentStart = currentSegment.start;
//         const segmentEnd = currentSegment.end;
//         const segmentLength = segmentEnd - segmentStart;

//         // Update the train's position
//         train.objectPosition = train.objectPosition || 0;
//         train.objectPosition += train.speed;
//         if (train.objectPosition >= segmentLength) {
//           train.objectPosition = 0;
//           train.currentSegmentIndex++;
//           if (train.currentSegmentIndex >= route.length) train.currentSegmentIndex = 0;
//         }

//         const absolutePosition = segmentStart + train.objectPosition;
//         train.currentPoint = getPointAtDistance(activeTrack, absolutePosition);

//         if (!train.currentPoint) return;

//         // Update train's angle
//         if (train.previousPoint) {
//           const dx = train.currentPoint.x - train.previousPoint.x;
//           const dy = train.currentPoint.y - train.previousPoint.y;
//           const targetAngle = Math.atan2(dy, dx);
//           const angleDiff = ((targetAngle - train.angle + Math.PI) % (2 * Math.PI)) - Math.PI;
//           train.angle += angleDiff * 0.3; // Smooth transition
//         } else {
//           train.angle = 0; // Default angle if no movement yet
//         }
//         train.previousPoint = { ...train.currentPoint };

//         // Update wagons' positions and angles
//         const wagonDistance = 29; // Distance between wagons
//         for (let i = 0; i < train.wagons; i++) {
//           const distanceBehind = absolutePosition - (i + 1) * wagonDistance;
//           const wagonPoint = getPointAtDistance(activeTrack, distanceBehind);

//           if (wagonPoint) {
//             train.wagonPositions[i] = wagonPoint;

//             // Calculate wagon angle
//             if (train.wagonAngles === undefined) train.wagonAngles = [];
//             if (train.wagonPreviousPoints === undefined) train.wagonPreviousPoints = [];

//             if (train.wagonPreviousPoints[i]) {
//               const dx = wagonPoint.x - train.wagonPreviousPoints[i].x;
//               const dy = wagonPoint.y - train.wagonPreviousPoints[i].y;
//               train.wagonAngles[i] = Math.atan2(dy, dx);
//             } else {
//               train.wagonAngles[i] = train.angle; // Initialize to train angle
//             }

//             // Update previous point for wagon
//             train.wagonPreviousPoints[i] = { ...wagonPoint };
//           }
//         }
//       });

//       drawTracks();
//       drawTrains();
//       drawScale()
//       drawFunctionsRef.current.drawTracks = drawTracks;
//       drawFunctionsRef.current.drawTrains = drawTrains;
//       drawFunctionsRef.current.drawScale = drawScale;
//       animationFrameId = requestAnimationFrame(animateTrains);
//     };


//     animateTrains();

//     return () => {
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };
//   }, [scale, offsetX, offsetY, isChecked]);


//   const calculateBezierPoint = (t, p0, p1, p2, p3) => {
//     const u = 1 - t;
//     const tt = t * t;
//     const uu = u * u;
//     const uuu = uu * u;
//     const ttt = tt * t;

//     const x =
//       uuu * p0.x +
//       3 * uu * t * p1.x +
//       3 * u * tt * p2.x +
//       ttt * p3.x;
//     const y =
//       uuu * p0.y +
//       3 * uu * t * p1.y +
//       3 * u * tt * p2.y +
//       ttt * p3.y;

//     return { x, y };
//   };

//   const calculateTrackPoints = (track, offsetY) => {
//     const points = [];
//     const distances = [];
//     let currentX = 50;
//     let currentY = 50 + offsetY;
//     let currentAngle = 0;
//     let totalDistance = 0;

//     for (let i = 0; i <= track.lineLength; i++) {
//       const curve = track.curvature.find(curve => curve.position === i);

//       if (curve) {
//         const curveLength = 20;
//         const controlOffset = curveLength / 2;

//         const curveAngle = curve.degree * (curve.direction === 'left' ? -1 : 1);
//         const endAngle = currentAngle + curveAngle;



//         let endX = (currentX) + curveLength * Math.cos((Math.PI / 180) * endAngle);
//         let endY = (currentY) + curveLength * Math.sin((Math.PI / 180) * endAngle);

//         if (curve.direction === 'right') {
//           endX = endX + controlOffset
//           endY = endY - controlOffset
//         } else if (curve.direction === 'left') {
//           endX = endX - controlOffset + 20
//           endY = endY + controlOffset
//         }

//         const controlX1 = currentX + controlOffset * Math.cos((Math.PI / 180) * currentAngle);
//         const controlY1 = currentY + controlOffset * Math.sin((Math.PI / 180) * currentAngle);
//         const controlX2 = endX - controlOffset * Math.cos((Math.PI / 180) * endAngle);
//         const controlY2 = endY - controlOffset * Math.sin((Math.PI / 180) * endAngle);

//         let prevPoint = { x: currentX, y: currentY };
//         for (let t = 0; t <= 1; t += 0.02) {
//           const point = calculateBezierPoint(t,
//             { x: currentX, y: currentY },
//             { x: controlX1, y: controlY1 },
//             { x: controlX2, y: controlY2 },
//             { x: endX, y: endY });
//           points.push(point);

//           const distance = Math.sqrt(
//             Math.pow(point.x - prevPoint.x, 2) +
//             Math.pow(point.y - prevPoint.y, 2)
//           );
//           totalDistance += distance;
//           distances.push(totalDistance);
//           prevPoint = point;
//         }

//         currentX = endX;
//         currentY = endY;
//         currentAngle = endAngle;
//       } else {
//         const nextX = currentX + Math.cos((Math.PI / 180) * currentAngle);
//         const nextY = currentY + Math.sin((Math.PI / 180) * currentAngle);
//         points.push({ x: nextX, y: nextY });

//         const distance = Math.sqrt(
//           Math.pow(nextX - currentX, 2) +
//           Math.pow(nextY - currentY, 2)
//         );
//         totalDistance += distance;
//         distances.push(totalDistance);

//         currentX = nextX;
//         currentY = nextY;
//       }

//     }

//     track.totalDistance = totalDistance;
//     track.points = points;
//     track.distances = distances;
//   };

//   const drawTrack = (ctx, track) => {
//     ctx.beginPath();
//     track.points.forEach((point, index) => {
//       if (index === 0) ctx.moveTo(point.x, point.y);
//       else ctx.lineTo(point.x, point.y);
//     });

//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 12;
//     ctx.stroke();

//     // Create a linear gradient for the overlay stroke
//     const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0); // Adjust gradient direction as needed
//     gradient.addColorStop(0, 'rgba(255, 255, 255, 0.62)');
//     // gradient.addColorStop(1, 'rgb(168, 169, 174)');
//     // gradient.addColorStop(1, 'rgb(157, 158, 161)');

//     // Apply the gradient stroke
//     ctx.strokeStyle = gradient;
//     ctx.lineWidth = 8;
//     ctx.stroke();
//   };

//   const drawSignals = async (ctx, track) => {
//     if (isChecked.signal) {
//       // popupsContainer.innerHTML = "";
//       const signalPromises = track.signals.map(async (signal) => {
//         const point = track.points[signal.position];
//         if (point) {
//           ctx.save();

//           const offset = signal.direction == "right" ? 50 : 30
//           const angle = Math.atan2(
//             track.points[signal.position + 1]?.y - point.y,
//             track.points[signal.position + 1]?.x - point.x
//           );

//           const offsetX = offset * Math.cos(angle + (signal.direction === "right" ? Math.PI / 3 : -Math.PI / 3));
//           const offsetY = offset * Math.sin(angle + (signal.direction === "right" ? Math.PI / 3 : -Math.PI / 3));

//           const img = signalimg;
//           const imgSize = 40;
//           const imgSizewidth = 40
//           const imgSizeheight = 15
//           const x = point.x + offsetX - imgSize / 2
//           const y = point.y + offsetY - imgSize / 2

//           signal.clickRegion = {
//             x: x,
//             y: y,
//             width: imgSizewidth,
//             height: imgSizeheight,
//             id: signal.id,
//             position: signal.position
//           };
//           // Manage popup container
//           const popupId = `popup-${signal.id}`;
//           const existingPopup = document.getElementById(popupId);
//           if (existingPopup) {
//             // existingPopup.style.left = `${(point.x * scale) + offsetX}px`;
//             // existingPopup.style.top = `${(point.y * scale) + offsetY}px`;
//             existingPopup.style.left = `${x}px`;
//             existingPopup.style.top = `${y}px`;
//             existingPopup.style.transform = `scale(${scale})`;

//           } else {
//             const newPopupContainer = document.createElement("div");
//             newPopupContainer.id = popupId;
//             newPopupContainer.style.position = "absolute";
//             // newPopupContainer.style.left = `${(point.x * scale) + offsetX}px`;
//             // newPopupContainer.style.top = `${(point.y * scale) + offsetY}px`;
//             newPopupContainer.style.left = `${x}px`;
//             newPopupContainer.style.top = `${y}px`;
//             newPopupContainer.style.transform = `scale(${scale})`;

//             const root = createRoot(newPopupContainer);
//             root.render(<GradientPost data={''} height={'5vh'} width={'5vw'} />);
//             popupsContainer.appendChild(newPopupContainer);
//           }
//           ctx.drawImage(img, x, y, imgSizewidth, imgSizeheight);
//           ctx.restore();
//         }
//       })
//       await Promise.all(signalPromises);
//     }
//   };

//   const calculateTrackDirection = (track, position) => {
//     let currentAngle = 0;
//     for (let i = 0; i <= position; i++) {
//       const curve = track.curvature.find(curve => curve.position === i);
//       if (curve) {
//         const curveAngle = curve.degree * (curve.direction === 'left' ? -1 : 1);
//         currentAngle += curveAngle;
//       }
//     }
//     return currentAngle;
//   };

//   const getPointAtDistance = (track, distance) => {
//     const index = track.distances.findIndex(d => d >= distance);
//     return track.points[index] || track.points[track.points.length - 1];
//   };

//   const drawScale = () => {
//     const scalecanvas = scaleRef.current;
//     const scaleCtx = scalecanvas.getContext("2d");

//     // Clear the scale canvas
//     scaleCtx.clearRect(0, 0, scalecanvas.width, scalecanvas.height);

//     // Draw the main line for the scale
//     scaleCtx.beginPath();
//     scaleCtx.moveTo(0, 30); // Middle of the canvas vertically
//     scaleCtx.lineTo(scalecanvas.width, 30);
//     scaleCtx.strokeStyle = 'white';
//     scaleCtx.lineWidth = 1;
//     scaleCtx.stroke();

//     // Scale step based on current zoom level
//     const step = 50 * scale; // Adjust marker spacing by zoom level
//     // const visibleWidth = scalecanvas.width / scale;
//     const startOffset = -offsetX % step;

//     // Draw markers and labels every 50 units (adjusted for zoom)
//     for (let x = -startOffset; x < scalecanvas.width; x += step) {
//       const position = Math.floor((x - (offsetX + 50)) / (50 * scale)) * 50;
//       if (position >= trackStart && position <= trackEnd) {
//         // Draw marker line
//         scaleCtx.beginPath();
//         scaleCtx.moveTo(x * scale, 25);
//         scaleCtx.lineTo(x * scale, 35);
//         scaleCtx.strokeStyle = 'white';
//         scaleCtx.lineWidth = 1;
//         scaleCtx.stroke();

//         // Draw marker label
//         scaleCtx.font = '12px Arial';
//         scaleCtx.fillStyle = 'white';
//         scaleCtx.textAlign = 'center';
//         scaleCtx.fillText(`${position}M`, x * scale, 15);
//       }
//     }
//   };



//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const scalecanvas = scaleRef.current;
//     const container = containerRef.current;
//     canvas.width = 3000;
//     canvas.height = 3000;
//     scalecanvas.width = window.innerWidth;
//     scalecanvas.height = 50;
//     const handleMouseDown = (e) => {
//       isDragging = true;
//       dragStartX = e.clientX - offsetX;
//       dragStartY = e.clientY - offsetY;
//       container.style.cursor = "grabbing";
//     };

//     const handleMouseMove = (e) => {
//       if (isDragging) {
//         const newOffsetX = e.clientX - dragStartX;
//         const newOffsetY = e.clientY - dragStartY;

//         // Restrict offsetX to keep track within bounds
//         if (newOffsetX <= trackStart) {
//           offsetX = trackStart;

//         } else if (newOffsetX + scalecanvas.width / scale >= trackEnd) {
//           offsetX = trackEnd - scalecanvas.width / scale;

//         } else {
//           offsetX = newOffsetX;

//         }
//         offsetX = e.clientX - dragStartX;
//         offsetY = e.clientY - dragStartY;

//         offsetX = newOffsetX;
//         offsetY = newOffsetY;

//         // Update the positions of popups in popupsContainer
//         const popups = document.querySelectorAll("#popups-container > div");
//         popups.forEach((popup) => {
//           const popupData = popup.dataset; // Assuming popup data includes x/y offsets
//           const x = parseFloat(popupData.x) + offsetX;
//           const y = parseFloat(popupData.y) + offsetY;
//           popup.style.left = `${x}px`;
//           popup.style.top = `${y}px`;
//         });

//         drawFunctionsRef.current.drawTracks();
//         drawFunctionsRef.current.drawTrains();
//         drawFunctionsRef.current.drawScale();

//       }
//     };

//     const handleMouseUp = () => {
//       isDragging = false;
//       container.style.cursor = "pointer";

//     };

//     container.addEventListener("mousedown", handleMouseDown);
//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       container.removeEventListener("mousedown", handleMouseDown);
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseup", handleMouseUp);

//     };
//   }, [isChecked]);

//   const zoomIn = () => {
//     const ctx = canvasRef.current.getContext("2d");
//     if (scale < 1.20) {
//       scale /= 0.91;
//     }
//     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear canvas
//     trackArray.forEach((track) => drawTrack(ctx, track));
//   };

//   const zoomOut = () => {
//     const ctx = canvasRef.current.getContext("2d");
//     if (scale > 0.68) {
//       scale *= 0.91;
//     }
//     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear canvas
//     trackArray.forEach((track) => drawTrack(ctx, track));
//   };


//   return (
//     <div
//       ref={containerRef}
//       // style={{ position: "relative" }}
//       className="canvas_div">

//       <div className="topscalediv">
//         <canvas ref={scaleRef} ></canvas>

//       </div>
//       <canvas ref={canvasRef}></canvas>
//       <div id="popups-container"
//         style={{
//           left: 0,
//           top: 0,
//           pointerEvents: "none", // Allow interaction with canvas
//         }}
//       ></div>

//       <div className="zoom-div">
//         <div className="zoom-actions">
//           <ButtonComp onClick={() => { zoomIn() }} bntStyle={{ "height": "24px", "width": "100%", "background": "none" }} prefixIcon={icon_zoom_in} />
//         </div>
//         <div className="zoom-actions">
//           <ButtonComp onClick={() => { zoomOut() }} bntStyle={{ "height": "24px", "width": "100%", "background": "none" }} prefixIcon={icon_zoom_out} />
//         </div>
//         <div className="zoom-actions">
//           {/* <ButtonComp onClick={() => { drag() }} bntStyle={{ "height": "24px", "width": "100%", "background": "none" }} prefixIcon={icon_move} /> */}
//         </div>
//       </div>

//       <div className="layout_actions">
//         <div className="l_action">
//           Signal
//           <CustomCheckbox isChecked={isChecked.signal ? false : true} onChange={() => {
//             handleSignalCheck('signal')
//           }} />
//         </div>
//         <div className="l_action">
//           Point
//           <CustomCheckbox isChecked={isChecked.point ? false : true} onChange={() => {
//             handleSignalCheck('point')
//           }} />
//         </div>
//         <div className="l_action">
//           Signage
//           <CustomCheckbox isChecked={isChecked.signage ? false : true} onChange={() => {
//             handleSignalCheck('signage')
//           }} />
//         </div>
//       </div>
//     </div>
//   )
// };  // intial implimentation


// const MimicTrackModel = () => {
//   const [tracks, setTracks] = useState([
//       {
//           id: 1,
//           length: 1000,
//           curvature: [
//               {
//                   id: 1,
//                   start: 0,
//                   end: 100,
//                   radius: 200,
//               },
//               {
//                   id: 2,
//                   start: 100,
//                   end: 500,
//               },
//               {
//                   id: 3,
//                   start: 500,
//                   end: 700,
//                   radius: -350,
//               },
//               {
//                   id: 4,
//                   start: 700,
//                   end: 1000,
//               },
//               {
//                   id: 5,
//                   start: 1000,
//                   end: 2000,
//               },
//               {
//                   id: 6,
//                   start: 2000,
//                   end: 3000,
//               },
//               {
//                   id: 7,
//                   start: 3000,
//                   end: 3100,
//                   radius: -150
//               },
//               {
//                   id: 8,
//                   start: 3100,
//                   end: 3200,
//                   radius: 150
//               },
//               {
//                   id: 8,
//                   start: 3200,
//                   end: 3800,
//               },
//               {
//                   id: 8,
//                   start: 3800,
//                   end: 4000,
//               },
//               {
//                   id: 9,
//                   start: 4000,
//                   end: 4100,
//                   radius: 500
//               },
//               {
//                   id: 9,
//                   start: 4100,
//                   end: 4500,
//                   radius: -600

//               },
//               {
//                   id: 9,
//                   start: 4500,
//                   end: 5000,
//                   radius: 600

//               },
//               {
//                   id: 10,
//                   start: 5000,
//                   end: 6000
//               }


//           ],

//           signals: [
//               {
//                   id: 1,
//                   position: 50,
//                   state: {
//                       type: '2CL',
//                       indication: 'red',
//                       direction: 'left',
//                       shunting: null,
//                       calling: null,
//                       bidirection: null
//                   }
//               },

//               {
//                   id: 2,
//                   position: 500,
//                   state: {
//                       type: '2CL',
//                       indication: 'green',
//                       direction: 'right',
//                       shunting: {
//                           indication: 'stop'
//                       },
//                       calling: null,
//                       bidirection: null
//                   }
//               },
//               {

//                   id: 3,
//                   position: 1000,
//                   state: {
//                       type: '2CL',
//                       indication: 'red',
//                       direction: 'left',
//                       shunting: {
//                           indication: 'stop'
//                       },
//                       calling: {
//                           indication: 'on'
//                       },
//                       bidirection: null
//                   }
//               },
//               {
//                   id: 4,
//                   position: 5000,
//                   state: {
//                       type: '2CL',
//                       indication: 'red',
//                       direction: 'left',
//                       shunting: null,
//                       calling: {
//                           indication: 'on'
//                       },
//                       bidirection: null
//                   }
//               },
//               {
//                   id: 5,
//                   position: 2000,
//                   state: {
//                       type: '3CL',
//                       indication: 'red',
//                       direction: 'right',
//                       shunting: {
//                           indication: 'stop'
//                       },
//                       calling: {
//                           indication: 'on'
//                       },
//                       bidirection: {
//                           visibledirections: [1, 2, 3, 4, 5, 6],
//                           enabled: 1
//                       }
//                   }
//               },
//               {
//                   id: 6,
//                   position: 2500,
//                   state: {
//                       type: '4CL',
//                       indication: 'red',
//                       direction: 'right',
//                       shunting: {
//                           indication: 'stop'
//                       },
//                       calling: {
//                           indication: 'on'
//                       },
//                       bidirection: {
//                           visibledirections: [3, 4,],
//                           enabled: 0
//                       }
//                   }
//               },
//               {
//                   id: 7,
//                   position: 150,
//                   state: {
//                       type: '2CLRepeat',
//                       indication: 'green',
//                       direction: 'right',
//                       shunting: null,
//                       calling: null,
//                       bidirection: null
//                   }
//               },
//               {
//                   id: 8,
//                   position: 250,
//                   state: {
//                       type: '3Macl',
//                       indication: 'yellow',
//                       direction: 'right',
//                       shunting: null,
//                       calling: null,
//                       bidirection: null,
//                       prewarning: true,
//                   }
//               },
//               {
//                   id: 9,
//                   position: 350,
//                   state: {
//                       type: 'twoClStopWarner',
//                       indication: 'red',
//                       direction: 'right',
//                       shunting: null,
//                       calling: null,
//                       bidirection: null,
//                       prewarning: true,
//                   }
//               },
//               {
//                   id: 10,
//                   position: 600,
//                   state: {
//                       type: 'warnerSignal',
//                       indication: 'red',
//                       direction: 'right',
//                       shunting: null,
//                       calling: null,
//                       bidirection: null,
//                       prewarning: true,
//                   }
//               },

//           ],
//           switchPoints: [
//               {
//                   id: 1,
//                   position: 300,
//                   state: 'on',
//                   direction: 'left'
//               },
//               {
//                   id: 2,
//                   position: 700,
//                   state: 'off',
//                   direction: 'right'
//               }
//           ],
//           sinages: [
//               {
//                   id: 2,
//                   position: 100,
//                   direction: 'left',
//                   state: {
//                       type: 'speedIndicator',
//                       config: {
//                           speed: '50'
//                       }
//                   }
//               },
//               {
//                   id: 3,
//                   position: 1000,
//                   direction: 'left',
//                   state: {
//                       type: 'cautionIndicator',
//                       config: {
//                           speed: '50'
//                       }
//                   }
//               },
//               {
//                   id: 4,
//                   position: 2000,
//                   direction: 'left',
//                   state: {
//                       type: 'stopIndicator',
//                       config: {
//                       }
//                   }
//               },
//               {
//                   id: 5,
//                   position: 3000,
//                   direction: 'left',
//                   state: {
//                       type: 'stopDisk',
//                       config: {

//                       }
//                   }
//               },
//               {
//                   id: 6,
//                   position: 4000,
//                   direction: 'left',
//                   state: {
//                       type: 'primaryStationBoard',
//                       config: {
//                           title: 'स्टेशन नाम',
//                           subTitle: 'Station Name',
//                           info: 'MEAN SEA LEVEL 0000 M tr'
//                       }
//                   }
//               },
//               {
//                   id: 7,
//                   position: 4500,
//                   direction: 'left',
//                   state: {
//                       type: 'secondaryStationBoard',
//                       config: {
//                           title: 'स्टेशन नाम',
//                           subTitle: 'Station Name',
//                       }
//                   }
//               },
//               {
//                   id: 8,
//                   position: 5000,
//                   direction: 'left',
//                   state: {
//                       type: 'kmPost',
//                       config: {
//                           km: '800'
//                       }
//                   }
//               },
//               {
//                   id: 9,
//                   position: 5700,
//                   direction: 'right',
//                   state: {
//                       type: 'gradientPost',
//                       config: {
//                           km: '800'
//                       }
//                   }
//               },
//               {
//                   id: 10,
//                   position: 700,
//                   direction: 'left',
//                   state: {
//                       type: 'haltStation',
//                       config: {
//                       }
//                   }
//               },
//               {
//                   id: 11,
//                   position: 200,
//                   direction: 'left',
//                   state: {
//                       type: 'shuntingLimit',
//                       config: {
//                       }
//                   }
//               },
//               {
//                   id: 12,
//                   position: 100,
//                   direction: 'right',
//                   state: {
//                       type: 'sigmaBoard',
//                       config: {
//                       }
//                   }
//               },
//               {
//                   id: 13,
//                   position: 300,
//                   direction: 'right',
//                   state: {
//                       type: 'neutralSelection',
//                       config: {
//                           meter: '500'
//                       }
//                   }
//               },
//               {
//                   id: 14,
//                   position: 700,
//                   direction: 'right',
//                   state: {
//                       type: 'djBoards',
//                       config: {
//                           type: 'emu'
//                       }
//                   }
//               },
//               {
//                   id: 15,
//                   position: 1300,
//                   direction: 'right',
//                   state: {
//                       type: 'oheMast',
//                       config: {
//                           a: '145',
//                           b: '7'
//                       }
//                   }
//               },
//               {
//                   id: 15,
//                   position: 1700,
//                   direction: 'right',
//                   state: {
//                       type: 'panto',
//                       config: {
//                           pantoType: 'lower'
//                       }
//                   }
//               },
//               {
//                   id: 16,
//                   position: 2000,
//                   direction: 'right',
//                   state: {
//                       type: 'sigtingBoards',
//                       config: {
//                           // sigtingType: 'passenger'
//                           sigtingType: 'goods'
//                       }
//                   }
//               },
//               {
//                   id: 17,
//                   position: 2500,
//                   direction: 'right',
//                   state: {
//                       type: 'bridgeBoard',
//                       config: {
//                           title: 'Name',
//                           subTitle: 'Name'
//                       }
//                   }
//               },
//               {
//                   id: 18,
//                   position: 2800,
//                   direction: 'right',
//                   state: {
//                       type: 'whistleIndicators',
//                       config: {
//                           // type: 'single'
//                           type: 'double'
//                       }
//                   }
//               },
//               {
//                   id: 19,
//                   position: 3600,
//                   direction: 'right',
//                   state: {
//                       type: 'terminationIndicators',
//                       config: {
//                           type: 'CT'
//                           // type: 'T'
//                       }
//                   }
//               },
//               {
//                   id: 20,
//                   position: 5000,
//                   direction: 'right',
//                   state: {
//                       type: 'warningBoards',
//                       config: {
//                           // type: 'speedBreaker'
//                           type: 'trackWarning2'
//                       }
//                   }
//               }
//           ]
//       },
//   ]
//   )
//   const [viewport, setViewport] = useState({ x: 10, y: 50 });
//   const [enableViewport, setEnableViewport] = useState(true)
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   // for scale 

//   const [scaleMarkers, setScaleMarkers] = useState([]);
//   const [scaleDimensions, setScaleDimensions] = useState({
//       width: 0,
//       offset: 0,
//       startPosition: 0
//   });
//   // for scale
//   const locoRef = useRef(new Image());
//   const wagonRef = useRef(new Image());

//   const [train, setTrain] = useState({ x: 0, y: 0, currentPosition: 0, speed: 1, angle: 0 })
//   const trainObject = {
//       trainId: 1,
//       wagons: 10,
//       wagonSpacing: 44,
//   }
//   const [signalpopup, setSignalpopup] = useState(null);
//   const { icon_zoom_in, icon_zoom_out, locosvg, wagonsvg, icon_move } = Icons.ISIcons;
//   const [stageScale, setStageScale] = useState({ x: 1, y: 1 });
//   const stageRef = useRef(null);


//   useEffect(() => {
//       const loadImages = () => {
//           return new Promise((resolve) => {
//               const loco = locoRef.current;
//               const wagon = wagonRef.current;

//               loco.src = locosvg;
//               wagon.src = wagonsvg;

//               let loadedCount = 0;
//               const checkLoaded = () => {
//                   loadedCount++;
//                   if (loadedCount === 2) {
//                       setImagesLoaded(true);
//                       resolve();
//                   }
//               };

//               loco.onload = checkLoaded;
//               wagon.onload = checkLoaded;
//           });
//       };

//       loadImages();
//   }, [locosvg, wagonsvg]);
//   const [isChecked, setIsChecked] = useState({
//       signal: false,
//       point: false,
//       signage: false
//   });

//   const handleSignalCheck = useCallback((key) => {
//       setSignalpopup(null);
//       setIsChecked(prev => ({
//           ...prev,
//           [key]: !prev[key]
//       }));
//   }, []);

//   const handleZoomIn = useCallback(() => {
//       setStageScale(prev => ({
//           x: Math.min(prev.x * 1.2, 1.2),
//           y: Math.min(prev.y * 1.2, 1.2)
//       }));
//       setSignalpopup(null);
//   }, []);

//   const handleZoomOut = useCallback(() => {
//       setStageScale(prev => ({
//           x: Math.max(prev.x / 1.2, 0.66),
//           y: Math.max(prev.y / 1.2, 0.66)
//       }));
//       setSignalpopup(null);
//   }, []);
//   const handleViewPort = useCallback(() => {
//       console.log('viewport', enableViewport);
//       setEnableViewport(!enableViewport);
//   }, [enableViewport]);

//   const handleDragMove = useCallback(() => {
//       setSignalpopup(null);
//   }, []);
//   const handleSwitchPoint = (trackId, switchPointId) => {
//       setTracks(prevTracks =>
//           prevTracks.map(track => {
//               if (track.id !== trackId) return track; // Keep other tracks unchanged

//               return {
//                   ...track,
//                   switchPoints: track.switchPoints.map(switchPoint =>
//                       switchPoint.id === switchPointId
//                           ? { ...switchPoint, state: switchPoint.state === "on" ? "off" : "on" }
//                           : switchPoint
//                   )
//               };
//           })
//       );
//   };
//   const handleOnclick = useCallback((signal) => {
//       if (stageRef.current) {
//           const stage = stageRef.current.getStage();
//           const pointerPosition = stage.getPointerPosition();
//           if (!pointerPosition) return;
//           signal['x'] = pointerPosition.x;
//           signal['y'] = pointerPosition.y;
//           setSignalpopup(signal);
//       }
//   }, []);

//   const calculateTrackPointsMemo = useMemo(() => {
//       return tracks.map(track => {
//           const lineone = calculateTrackPoints(0, 0, track.curvature);
//           // const linetwo = calculateTrackPoints(0, 10, track.curvature);
//           return { lineone, id: track.id };
//       });
//   }, [tracks]);


//   const updateTrainPosition = () => {
//       const trackPoints = ((calculateTrackPointsMemo.find((x) => x.id === 1)).lineone).postionPoints
//       const totalTrackLength = trackPoints.length;
//       const trackSegment = trackPoints.find((point) => point.position === train.currentPosition);

//       if (trackSegment) {
//           setTrain((prevTrain) => ({
//               ...prevTrain,
//               x: trackSegment.x,
//               y: trackSegment.y,
//               angle: trackSegment.angle
//           }));
//           // setViewport(prevViewport => ({
//           //     x: prevViewport.x - train.speed * Math.cos(trackSegment.angle), // Move left/right
//           //     y: prevViewport.y - train.speed * Math.sin(trackSegment.angle), // Move up/down
//           // }));

//           const newTrainX = trackSegment.x;
//           const newTrainY = trackSegment.y;
//           if (enableViewport) {
//               setTrain(prevTrain => {
//                   // Check if the train is within the safe zone
//                   if (newTrainX < (1500 * 1) && newTrainX < (1500 * 0.5)) {
//                       // Move the train normally
//                       return { ...prevTrain, x: newTrainX, y: newTrainY, angle: trackSegment.angle };
//                   } else {
//                       // Move the stage instead of the train
//                       setViewport(prevViewport => ({
//                           x: prevViewport.x - train.speed * Math.cos(trackSegment.angle),
//                           y: prevViewport.y - train.speed * Math.sin(trackSegment.angle),
//                       }));
//                       return prevTrain;
//                   }
//               });
//           }

//       }

//       // Update the currentPosition based on speed
//       setTrain((prevTrain) => {
//           let newPosition = prevTrain.currentPosition + prevTrain.speed;
//           if (newPosition > totalTrackLength) {
//               setViewport({ x: 10, y: 50 })
//               newPosition = 0; // Reset to start of track
//           }
//           return { ...prevTrain, currentPosition: newPosition };
//       });
//   };

//   useEffect(() => {
//       const intervalId = setInterval(() => {
//           updateTrainPosition();
//       }, 1000 / 60); // Update at 60 FPS
//       return () => clearInterval(intervalId); // Cleanup the interval on unmount

//   }, [train.currentPosition, train.speed]);
//   useEffect(() => {
//       if (enableViewport) {
//           setViewport({
//               x: 1500 / 2 - train.x, // Center train in viewport
//               y: 400 / 2 - train.y
//           });
//       }
//   }, [enableViewport])
//   useEffect(() => {
//       if (calculateTrackPointsMemo[0]?.lineone.postionPoints.length > 0) {
//           const lineone = calculateTrackPointsMemo[0].lineone;
//           const positions = lineone.postionPoints;

//           const startPosition = positions[0].position;
//           const endPosition = positions[positions.length - 1].position;
//           const startX = positions[0].x;
//           const endX = positions[positions.length - 1].x;

//           const markers = [];
//           for (let pos = 0; pos <= endPosition; pos += 100) {
//               const point = positions.reduce((prev, curr) =>
//                   Math.abs(curr.position - pos) < Math.abs(prev.position - pos) ? curr : prev
//               );

//               markers.push({
//                   position: pos,
//                   x: point.x * stageScale.x // Directly apply scale here
//               });
//           }

//           const scaledWidth = (endX - startX) * stageScale.x;

//           setScaleDimensions({
//               width: scaledWidth,
//               offset: startX * stageScale.x,
//               startPosition: startX
//           });

//           setScaleMarkers(markers);
//       }
//   }, [stageScale, tracks, calculateTrackPointsMemo]);


//   return (
//       <div style={{ height: '100%', width: '100%', overflow: 'hidden', position: 'relative' }}>
//           <div
//               style={{
//                   position: 'fixed',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: 30,
//                   overflow: 'hidden',
//                   zIndex: 1000,
//                   background: 'none',
//                   borderBottom: '0.1vh solid  rgba(255, 255, 255, 0.39)',
//                   overflowX: 'hidden',
//                   zIndex: 1000,
//               }}
//           >
//               <div
//                   style={{
//                       position: 'relative',
//                       height: '100%',
//                       transformOrigin: 'left center',
//                       transform: `translateX(${viewport.x}px)`, // Only translate, no scale
//                       width: `${scaleDimensions.width}px`,
//                   }}
//               >
//                   {/* <div
//                       style={{
//                           position: 'absolute',
//                           left: `${train.x * stageScale.x}px`,
//                           height: '100%',
//                           width: 'auto',
//                           // background: '#ff0000',
//                           zIndex: 1001,
//                           transition: 'left 0s linear'
//                       }}
//                   >
//                       <div style={{
//                           position: 'absolute',
//                           left: '50%', // Changed from -15px
//                           transform: 'translateX(-50%)', // Center horizontally
//                           color: '#ff0000',
//                           fontSize: '2.5vh',
//                           fontWeight: 'bold',
//                           whiteSpace: 'nowrap',
//                           padding: '0.2vhpx 0.6vhpx',
//                           height: '100%',
//                           width: '10vh',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           borderRadius: '1.2vh',
//                           background: 'var(--Windows-Glass, rgba(6, 6, 37, 0.74))',
//                           'backdrop-filter': 'blur(5.7vh)'

//                       }}>
//                           {`${Math.round(train.currentPosition)} M`}
//                       </div>
//                   </div> */}
//                   {scaleMarkers.map((marker, index) => (
//                       <div
//                           key={index}
//                           style={{
//                               position: 'fixed',
//                               left: `${marker.x}px`,
//                               height: '100%',
//                               // borderLeft: '0.1vh solid rgb(255, 255, 255)',
//                               width: 0,
//                               display: 'flex',
//                               alignItems: 'center',
//                           }}
//                       >
//                           <span style={{
//                               position: 'absolute',
//                               top: 0,
//                               bottom: 0,
//                               fontSize: '2vh',
//                               transform: 'translateX(-50%)',
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                               color: 'white',
//                               fontWeight: '700',
//                           }}>
//                               {`${marker.position}M`}
//                           </span>
//                       </div>
//                   ))}

//               </div>
//           </div>
//           <Stage
//               ref={stageRef}
//               draggable={true}
//               x={viewport.x}  // Apply dynamic position
//               y={viewport.y}
//               width={1500} height={800}
//               scale={stageScale}
//               onDragMove={
//                   (e) => {

//                       setViewport({
//                           x: e.target.x(),
//                           y: e.target.y()
//                       });
//                       handleDragMove()


//                   }
//               }
//               onDragEnd={handleDragMove}

//           >
//               <Layer>

//                   {tracks.map((track, idx) => {
//                       const { lineone, linetwo } = calculateTrackPointsMemo[idx];

//                       return (
//                           <Group key={track.id}>
//                               <Line
//                                   points={lineone.returnpoints}
//                                   stroke="black"
//                                   strokeWidth={18}
//                               // lineCap="round"
//                               // lineJoin="round"
//                               />
//                               <Line
//                                   points={lineone.returnpoints}
//                                   // stroke="rgba(17, 20, 48, 0.783"
//                                   strokeWidth={12}
//                                   // stroke="rgba(255, 255, 255, 0.62)"
//                                   stroke="rgb(81 89 98)"
//                               // shadowColor="rgba(196, 196, 214, 0.74)"
//                               // lineCap="round"
//                               // lineJoin="round"
//                               />
//                               <Line
//                                   points={lineone.returnpoints}
//                                   // stroke="rgba(17, 20, 48, 0.783"
//                                   strokeWidth={22}
//                                   stroke="black"
//                                   dash={[2, 4]}
//                               // lineCap="round"
//                               // lineJoin="round"
//                               />
//                               {/* <Line
//                                   points={linetwo.returnpoints}
//                                   stroke="black"
//                                   strokeWidth={2}
//                                   lineCap="round"
//                                   lineJoin="round"
//                               /> */}
//                               {isChecked.signal && track.signals.map(signal => {
//                                   const point = lineone.postionPoints.find(x => x.position === signal.position);
//                                   if (point) {
//                                       const payload = {
//                                           signal: signal,
//                                           x: point.x,
//                                           y: signal.state.direction === 'right' ? point.y + 50 : point.y - 50,
//                                           angle: point.angle,
//                                           onClick: () => handleOnclick({ signal: signal.id, trackId: track.id, signalInfo: signal })
//                                       };
//                                       return <Signals payload={payload} key={signal.id} />;
//                                   }
//                                   return null;
//                               })}
//                               {isChecked.point && track.switchPoints.map(switchpoint => {
//                                   const point = lineone.postionPoints.find(x => x.position === switchpoint.position);
//                                   if (point) {
//                                       return (
//                                           <SwitchIcon
//                                               key={switchpoint.id}
//                                               isOn={switchpoint.state === 'on'}
//                                               x={point.x}
//                                               y={switchpoint.direction === 'right' ? point.y : point.y - 30}
//                                               onToggle={() => handleSwitchPoint(track.id, switchpoint.id)}
//                                           />
//                                       );
//                                   }
//                                   return null;
//                               })}
//                               {isChecked.signage && track.sinages.map(signage => {
//                                   const point = lineone.postionPoints.find(x => x.position === signage.position);
//                                   if (point) {
//                                       return (
//                                           <Signages
//                                               key={signage.id}
//                                               payload={{
//                                                   signage: signage,
//                                                   x: point.x,
//                                                   y: signage.direction === 'right' ? point.y + 50 : point.y - 75
//                                               }}
//                                           />
//                                       );
//                                   }
//                                   return null;
//                               })}
//                           </Group>
//                       );
//                   })}

//                   {imagesLoaded && (
//                       <>
//                           <KonvaImage
//                               image={locoRef.current}
//                               x={train.x}
//                               y={train.y - 8}
//                               width={50}
//                               height={15}
//                               rotationDeg={(train.angle * 180 + 1) / Math.PI}
//                           />
//                           {Array.from({ length: trainObject.wagons }).map((_, index) => {
//                               const trackPoints = calculateTrackPointsMemo.find(t => t.id === 1).lineone.postionPoints;
//                               const totalTrackLength = trackPoints.length; // Based on curvature end position
//                               let wagonPosition = train.currentPosition - trainObject.wagonSpacing * (index + 1.1);
//                               wagonPosition = ((wagonPosition % totalTrackLength) + totalTrackLength) % totalTrackLength; // Ensure positive position

//                               const trackSegment = trackPoints.reduce((prev, curr) =>
//                                   Math.abs(curr.position - wagonPosition) < Math.abs(prev.position - wagonPosition) ? curr : prev
//                                   , trackPoints[0]);

//                               return (
//                                   <KonvaImage
//                                       key={`wagon-${index}`}
//                                       image={wagonRef.current}
//                                       x={trackSegment.x}
//                                       y={trackSegment.y - 8}
//                                       width={50}
//                                       height={15}
//                                       rotationDeg={(trackSegment.angle * 180 + 1) / Math.PI}
//                                   />
//                               );
//                           })}
//                       </>
//                   )}
//               </Layer>
//           </Stage>

//           {signalpopup && (
//               <div
//                   style={{
//                       position: "absolute",
//                       top: 10,
//                       left: signalpopup.x,
//                       height: 'auto',
//                       width: 'auto',
//                   }}
//               >
//                   <PopUpcomp tracks={tracks} setTracks={setTracks} signalData={signalpopup} setSignalpopup={setSignalpopup} />
//               </div>
//           )}
//           <div className='positionIndicator'>
//               {`${Math.round(train.currentPosition)} M`}
//           </div>
//           <div className="zoom-div">
//               <div className="zoom-actions">
//                   <ButtonComp onClick={handleZoomIn} bntStyle={{ height: "24px", width: "100%", background: "none" }} prefixIcon={icon_zoom_in} />
//               </div>
//               <div className="zoom-actions">
//                   <ButtonComp onClick={handleZoomOut} bntStyle={{ height: "24px", width: "100%", background: "none" }} prefixIcon={icon_zoom_out} />
//               </div>
//               <div className="zoom-actions">
//                   <ButtonComp onClick={handleViewPort} bntStyle={{ "height": "24px", "width": "100%", "background": "none" }} prefixIcon={icon_move} />
//               </div>
//           </div>

//           <div className="layout_actions">
//               <div className="l_action">
//                   Signal
//                   <CustomCheckbox
//                       isChecked={isChecked.signal ? false : true}
//                       onChange={() => handleSignalCheck('signal')}
//                   />
//               </div>
//               <div className="l_action">
//                   Point
//                   <CustomCheckbox
//                       isChecked={isChecked.point ? false : true}
//                       onChange={() => handleSignalCheck('point')}
//                   />
//               </div>
//               <div className="l_action">
//                   Signage
//                   <CustomCheckbox
//                       isChecked={isChecked.signage ? false : true}
//                       onChange={() => handleSignalCheck('signage')}
//                   />
//               </div>
//           </div>
//       </div>
//   );
// };  //current implimentation

