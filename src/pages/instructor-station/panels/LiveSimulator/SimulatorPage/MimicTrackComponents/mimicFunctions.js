import React, { memo } from 'react';
import { Signals } from './AssetsComponents/Signals/signals';
import SwitchIcon from './AssetsComponents/SwitchPoints/switch_point';
import { Signages } from './AssetsComponents/Signages/signages';

export const MemoizedSignal = memo(({ payload }) => <Signals payload={payload} />);

export const MemoizedSwitchIcon = memo(({ isOn, x, y, onToggle, deg }) => (
    <SwitchIcon isOn={isOn} x={x} y={y} onToggle={onToggle} deg={deg} />
));

export const MemoizedSignages = memo(({ payload }) => <Signages payload={payload} />);


export function calculateTrackPoints(x, y, curvatures, startPosition = 0, angle = 0) {

  const points = [];
  let currentPos = { x: x, y: y };
  let currentAngle = angle;
  let accumulatedLength = startPosition;
  const returnpoints = [currentPos.x, currentPos.y]
  points.push({ x: currentPos.x, y: currentPos.y, angle: 0, position: startPosition });
  curvatures.forEach((curve) => {
    const segmentLength = curve.end - curve.start;
    if (curve.radius === undefined || !curve.radius) {
      for (let s = 0; s <= segmentLength; s++) {
        const x = currentPos.x + (s * Math.cos(currentAngle));
        const y = currentPos.y + (s * Math.sin(currentAngle));
        const position = accumulatedLength + s
        points.push({ x, y, angle: currentAngle, position: position });
        returnpoints.push(x, y)
      }
      currentPos = points[points.length - 1];
    } else {
      const radius = curve.radius;
      // const isRightTurn = radius > 0;
      const isRightTurn = curve.direction > 0
      const absRadius = Math.abs(radius);
      const turnDirection = isRightTurn ? 1 : -1;

      const center = {
        x: currentPos.x - absRadius * Math.sin(currentAngle) * turnDirection,
        y: currentPos.y + absRadius * Math.cos(currentAngle) * turnDirection,
      };

      const startAngle = Math.atan2(currentPos.y - center.y, currentPos.x - center.x);
      const angleDelta = (isRightTurn ? 1 : -1) * (segmentLength / absRadius);

      const numPoints = Math.ceil(segmentLength);
      for (let s = 0; s <= numPoints; s++) {
        const angle = startAngle + (angleDelta * s) / numPoints;
        const x = center.x + absRadius * Math.cos(angle);
        const y = center.y + absRadius * Math.sin(angle);
        const position = accumulatedLength + (s * segmentLength) / numPoints;
        const smoothAngle = currentAngle + ((angleDelta * s) / numPoints); // Smooth transition

        points.push({ x, y, angle: smoothAngle, position: position });
        returnpoints.push(x, y)
      }
      currentPos = points[points.length - 1];
      currentAngle += angleDelta;
    }
    accumulatedLength += segmentLength;

  });
  // console.log('points', {
  //   postionPoints: points,
  //   returnpoints: returnpoints
  // })
  return {
    postionPoints: points,
    returnpoints: returnpoints
  };
};


// export const findClosestTrackPoint1 = (position, trackPoints) => {
//   if (!trackPoints?.length) return null;

//   let low = 0;
//   let high = trackPoints.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (trackPoints[mid].position < position) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   if (low >= trackPoints.length) return trackPoints[trackPoints.length - 1];
//   if (high < 0) return trackPoints[0];

//   // Changed the comparison to <= to choose the higher position on tie
//   return Math.abs(trackPoints[low].position - position) <=
//     Math.abs(trackPoints[high].position - position)
//     ? trackPoints[low]
//     : trackPoints[high];
// };


// export const findClosestTrackPoint2 = (position, trackPoints) => {
//   // Define lastKnownTrackPoint inside the function but persist it across calls
//   let lastKnownTrackPoint = findClosestTrackPoint.lastKnownTrackPoint || null;

//   if (!trackPoints?.length) return lastKnownTrackPoint;

//   let low = 0;
//   let high = trackPoints.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (trackPoints[mid].position < position) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   if (low >= trackPoints.length) lastKnownTrackPoint = trackPoints[trackPoints.length - 1];
//   else if (high < 0) lastKnownTrackPoint = trackPoints[0];
//   else {
//     lastKnownTrackPoint =
//       Math.abs(trackPoints[low].position - position) <= Math.abs(trackPoints[high].position - position)
//         ? trackPoints[low]
//         : trackPoints[high];
//   }

//   // Store the last known position in the function itself
//   findClosestTrackPoint.lastKnownTrackPoint = lastKnownTrackPoint;

//   return lastKnownTrackPoint;
// };

export const findClosestTrackPoint = (() => {
  let lastKnownTrackPoint = null;
  let lastKnownTime = Date.now();
  let lastKnownVelocity = 0; // Estimated speed when no data is received

  return (position, trackPoints) => {
    const currentTime = Date.now();
    const timeDelta = (currentTime - lastKnownTime) / 1000; // Convert ms to seconds

    // If no track data, estimate movement based on last known velocity
    if (!trackPoints?.length) {
      if (lastKnownTrackPoint) {
        return {
          ...lastKnownTrackPoint,
          position: lastKnownTrackPoint.position + lastKnownVelocity * timeDelta, // Keep moving
        };
      }
      return null;
    }

    let low = 0;
    let high = trackPoints.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (trackPoints[mid].position < position) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    let closestPoint;
    if (low >= trackPoints.length) closestPoint = trackPoints[trackPoints.length - 1];
    else if (high < 0) closestPoint = trackPoints[0];
    else {
      closestPoint =
        Math.abs(trackPoints[low].position - position) <= Math.abs(trackPoints[high].position - position)
          ? trackPoints[low]
          : trackPoints[high];
    }

    // Calculate velocity for smooth interpolation if data delays
    if (lastKnownTrackPoint) {
      lastKnownVelocity = (closestPoint.position - lastKnownTrackPoint.position) / timeDelta;
    }

    lastKnownTrackPoint = closestPoint;
    lastKnownTime = currentTime;

    return lastKnownTrackPoint;
  };
})();



export const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const createFactorCalculator = (currentValue) => {
  let prevValue = currentValue; // Store previous value

  let easeFactor = 1; // Initial easeFactor

  return function (currentValue) {
    if (currentValue >= 40) {
      easeFactor = 0.1;
    } else if (currentValue < 40 && currentValue >= 30) {
      easeFactor = 1
    } else if (currentValue <= 30 && currentValue >= 10) {
      easeFactor = 1
    } else if (currentValue <= 10 && currentValue >= 0) {
      easeFactor = 10
    }
    if (prevValue !== null) {
      let change = Math.abs(currentValue - prevValue); // Absolute change

      // Increase or decrease easeFactor based on value movement
      if (currentValue > prevValue) {
        easeFactor += change * 0.1; // Increase proportionally
      } else if (currentValue < prevValue) {
        easeFactor -= change * 0.1; // Decrease proportionally
      }
    }

    // Clamp easeFactor within a valid range (0 to 1)
    easeFactor = Math.max(0, Math.min(0.2, easeFactor));

    // Dynamically calculate superFactor (adjust decrease proportionally)
    let superFactor = easeFactor - (easeFactor * easeFactor); // Reduce superFactor dynamically

    // Update previous value
    prevValue = currentValue;

    return { easeFactor, superFactor };
  };
}


export const getRoutePositionPoints = (trainRoute, tracks) => {
  
  let result = [];

  trainRoute.forEach(route => {
    if(route.priority === 1){
      route.from = -3000
    }
    const track = tracks.find(t => t.id === route.trackId);
    // console.log('points',track)
    if (track) {
      if(track?.lineone?.postionPoints){
        const filteredPoints = track.lineone.postionPoints.filter(
          point => point.position >= route.from && point.position <= route.to
        );
        result.push(...filteredPoints);
      }
    }
  });

  return result;
}

export const generateRoute = (trackData, startPosition = 0) => {
  let route = [];
  let currentTrack = trackData.find(track => track.id === 1);
  let currentPosition = startPosition;
  let priority = 1;

  while (currentTrack) {
    let segmentEnd = currentTrack.curvature[currentTrack.curvature.length - 1].end;

    // Check for switch points that are "on"
    if (currentTrack.switchPoints) {
      let activeSwitch = currentTrack.switchPoints.find(sp => sp.position >= currentPosition && sp.state === "on");
      if (activeSwitch) {
        segmentEnd = activeSwitch.position;
      }
    }

    route.push({
      priority: priority++,
      trackId: currentTrack.id,
      from: currentPosition,
      to: segmentEnd
    });

    // Check for next segment
    if (currentTrack.switchPoints) {
      let activeSwitch = currentTrack.switchPoints.find(sp => sp.position === segmentEnd && sp.state === "on");
      if (activeSwitch) {
        currentTrack = trackData.find(track => track.id === activeSwitch.trackId);
        currentPosition = segmentEnd;
        continue;
      }
    }

    if (currentTrack.trackId) {
      currentTrack = trackData.find(track => track.id === currentTrack.trackId);
      currentPosition = segmentEnd;
    } else {
      break;
    }
  }

  return route;
}

