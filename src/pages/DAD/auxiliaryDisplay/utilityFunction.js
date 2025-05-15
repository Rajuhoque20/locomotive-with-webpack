export function calculateCurvaturePoints(x, y, curvatures, startPosition = 0) {
  const points = [];
  let currentPos = { x: x, y: y };
  let currentAngle = 0;
  let accumulatedLength = startPosition;
  const returnpoints = [currentPos.x, currentPos.y];
  points.push({
    x: currentPos.x,
    y: currentPos.y,
    angle: 0,
    position: startPosition,
  });
  curvatures.forEach((curve) => {
    const segmentLength = curve.end - curve.start;
    if (curve.radius === undefined || !curve.radius) {
      for (let s = 0; s <= segmentLength; s++) {
        const x = currentPos.x + s * Math.cos(currentAngle);
        const y = currentPos.y + s * Math.sin(currentAngle);
        const position = accumulatedLength + s;
        points.push({ x, y, position: position });
        returnpoints.push(x, y);
      }
      currentPos = points[points.length - 1];
    } else {
      const radius = curve.radius;
      const isRightTurn = radius > 0;
      const absRadius = Math.abs(radius);
      const turnDirection = isRightTurn ? 1 : -1;

      const center = {
        x: currentPos.x - absRadius * Math.sin(currentAngle) * turnDirection,
        y: currentPos.y + absRadius * Math.cos(currentAngle) * turnDirection,
      };

      const startAngle = Math.atan2(
        currentPos.y - center.y,
        currentPos.x - center.x
      );
      const angleDelta = (isRightTurn ? 1 : -1) * (segmentLength / absRadius);

      const numPoints = Math.ceil(segmentLength);
      for (let s = 0; s <= numPoints; s++) {
        const angle = startAngle + (angleDelta * s) / numPoints;
        const x = center.x + absRadius * Math.cos(angle);
        const y = center.y + absRadius * Math.sin(angle);
        const position = accumulatedLength + (s * segmentLength) / numPoints;
        const smoothAngle = currentAngle + (angleDelta * s) / numPoints; // Smooth transition

        points.push({ x, y, angle: smoothAngle, position: position });
        returnpoints.push(x, y);
      }
      currentPos = points[points.length - 1];
      currentAngle += angleDelta;
    }
    accumulatedLength += segmentLength;
  });
  return points;
}

export const interpolateFeatureData = (data) => {
  const interpolatedData = [];

  for (let i = 0; i < data.length - 1; i++) {
    const { x: x1, y: y1, ...extra1 } = data[i];
    const { x: x2, y: y2, ...extra2 } = data[i + 1];

    for (let x = x1; x <= x2; x++) {
      const t = (x - x1) / (x2 - x1);
      const y = y1 + t * (y2 - y1); // Linear interpolation formula

      // Merge extra properties (if x matches exactly, inherit them)
      let extraProps = {};
      if (x === x1) extraProps = extra1;
      if (x === x2) extraProps = extra2;

      interpolatedData.push({ x, y, ...extraProps });
    }
  }

  return interpolatedData;
};
