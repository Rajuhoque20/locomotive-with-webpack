export function pagination(page, limit, DataList) {
  let initialIndex = page - 1;
  let lastIndex = initialIndex + limit;
  lastIndex = lastIndex > DataList.length ? DataList?.length - 1 : lastIndex;
  let result = DataList.slice(initialIndex, lastIndex);
  return result;
}

export function smoothPath(d) {
  if (!d) {
    return d;
  }
  const points = d.match(/[\d.-]+/g).map(Number); // Extract numbers from d
  if (points.length < 4) return d; // Not enough points to smooth

  let result = `M${points[0]} ${points[1]}`; // Start with 'M'

  for (let i = 0; i < points.length - 4; i += 2) {
    const [x0, y0] =
      i === 0 ? [points[i], points[i + 1]] : [points[i - 2], points[i - 1]];
    const [x1, y1] = [points[i], points[i + 1]];
    const [x2, y2] = [points[i + 2], points[i + 3]];
    const [x3, y3] =
      i + 4 < points.length ? [points[i + 4], points[i + 5]] : [x2, y2];

    // Compute Catmull-Rom control points
    const c1x = x1 + (x2 - x0) / 6;
    const c1y = y1 + (y2 - y0) / 6;
    const c2x = x2 - (x3 - x1) / 6;
    const c2y = y2 - (y3 - y1) / 6;

    result += ` C${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;
  }

  return result;
}
export function pointsToSmoothPath(points) {
  if (!points.length) return "";

  const path = [];
  path.push(`M${points[0].x},${points[0].y}`);

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1] || p1;
    const p3 = points[i + 2] || p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    path.push(`C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`);
  }

  return path.join(" ");
}

export const generatePath = (points) => {
  let d = `M${points[0]?.x} ${points[0]?.y}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L${points[i].x} ${points[i].y}`;
  }
  return d;
};
