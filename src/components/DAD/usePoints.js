export const usePoints = (gap, width, height, actualData) => {
  let data = actualData || [];
  const chartWidth = width;
  const chartHeight = height;
  const xMin = data?.length > 0 ? Math.min(...data?.map((p) => p.x)) : 0;
  const xMax = data?.length > 0 ? Math.max(...data?.map((p) => p.x)) : 0;
  let yMin = Math.min(...data?.map((p) => p.y)) || 0;
  let yMax = Math.max(...data?.map((p) => p.y)) || 0;
  let modifiedGap = Math.abs(yMax) + Math.abs(yMin);
  modifiedGap = 0.01 * (yMax - yMin);
  modifiedGap = gap;
  yMax = yMax + modifiedGap;
  yMin = yMin - modifiedGap;
  const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * chartWidth;
  const scaleY = (y) => height - ((y - yMin) / (yMax - yMin)) * chartHeight;
  const points = data?.map((p) => ({
    x: scaleX(p.x),
    y: scaleY(p.y),
  }));

  return points;
};

export const lineChartScaling = (gap, width, height, actualData) => {
  let data = actualData || [];
  const chartWidth = width;
  const chartHeight = height;
  const xMin = data?.length > 0 ? Math.min(...data?.map((p) => p.x)) : 0;
  const xMax = data?.length > 0 ? Math.max(...data?.map((p) => p.x)) : 0;
  let yMin = Math.min(...data?.map((p) => p.y)) || 0;
  let yMax = Math.max(...data?.map((p) => p.y)) || 0;
  let modifiedGap = Math.abs(yMax) + Math.abs(yMin);
  let distance = yMax - yMin;
  modifiedGap =
    distance > 5000
      ? distance * 0.1
      : distance > 2000
      ? distance * 0.05
      : 0.04 * distance;
  // modifiedGap = gap;
  yMax = yMax + modifiedGap;
  yMin = yMin - modifiedGap;
  const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * chartWidth;
  const scaleY = (y) => height - ((y - yMin) / (yMax - yMin)) * chartHeight;
  const points = data?.map((p) => ({
    x: scaleX(p.x),
    y: scaleY(p.y),
  }));

  return points;
};
