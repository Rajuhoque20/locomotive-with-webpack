import { Icons } from "#framework";
const {
  stop_indicator,
  stop_disc,
  warning_breaker,
  warning_xings,
  warning_xings2,
  warning_xings3,
  termination_indicator_t,
  termination_indicator_temu,
  termination_indicator_tg,
  termination_indicator_tp,
  termination_indicator_tl,
  caution_indicator,
  caution_order_ct,
  shunting_limit,
  sigma_board,
  signal_sigting_board_goods,
  signal_sigting_board_passenger,
  halt_station,
} = Icons.Signage;
export const featureIcons = {
  caution_indicator_left: caution_indicator,
  termination_passenger: stop_indicator,
  stopDisk: stop_disc,
  whistle_level_crossing: stop_disc,
  caution_indicator_right: stop_indicator,
  termination: stop_indicator,
  stopIndicator: stop_indicator,
  sigma: stop_disc,
  caution_tunnel: stop_disc,
  shunting_limit: shunting_limit,
  warning_breaker: warning_breaker,
  warning_xings: warning_xings,
  warning_xings2: warning_xings2,
  warning_xings3: warning_xings3,
  termination_indicator_t: termination_indicator_t,
  termination_indicator_temu: termination_indicator_temu,
  termination_indicator_tg: termination_indicator_tg,
  termination_indicator_tp: termination_indicator_tp,
  termination_indicator_tl: termination_indicator_tl,
  caution_order_ct: caution_order_ct,
  sigmaBoard: sigma_board,
  signal_sigting_board_goods: signal_sigting_board_goods,
  signal_sigting_board_passenger: signal_sigting_board_passenger,
  haltStation: halt_station,
};

export const curvatureDummyData = [
  { x: 1, y: 17 },
  { x: 2, y: 42 },
  { x: 3, y: 21 },
  { x: 4, y: 44 },
  { x: 5, y: 12 },
  { x: 6, y: 15 },
  { x: 7, y: 34 },
  { x: 8, y: 49 },
  { x: 9, y: 41 },
  { x: 10, y: 46 },
  { x: 11, y: 19 },
  { x: 12, y: 15 },
  { x: 13, y: 25 },
  { x: 14, y: 46 },
  { x: 15, y: 29 },
  { x: 16, y: 26 },
  { x: 17, y: 28 },
  { x: 18, y: 49 },
  { x: 19, y: 24 },
  { x: 20, y: 11 },
];
export const generateSmallPath = (x, y) => {
  return `M${x} ${y}L${x - 0.8} ${y + 3}H${x + 1.1}L${x} ${y}ZM${x + 0.4} ${
    y - 1
  }L${x + 1.5} ${y + 2}V${y - 4}L${x + 0.4} ${y - 1}ZM${x} ${y - 2}L${
    x + 1.1
  } ${y - 5}H${x - 1}L${x} ${y - 2}ZM${x - 0.4} ${y - 1}L${x - 1.5} ${y - 4}V${
    y + 2
  }L${x - 0.4} ${y - 1}Z`;
};
//interpolate till max x of 200

export function interpolatePoints(points, xIncrement = 4, xRange = 200) {
  if (points?.length === 0) {
    return;
  }
  const result = [];

  // Create an array of x values starting from the first point and incrementing by `xIncrement`
  const xValues = [];
  for (let i = points[0].x; i <= points[points.length - 1].x; i += xIncrement) {
    if (i > xRange) {
      break;
    }
    xValues.push(i);
  }

  // Interpolate y values for each x
  for (let i = 0; i < xValues.length; i++) {
    const x = xValues[i];

    // Find the two points to interpolate between
    let p1, p2;
    for (let j = 0; j < points.length - 1; j++) {
      if (x >= points[j].x && x <= points[j + 1].x) {
        p1 = points[j];
        p2 = points[j + 1];
        break;
      }
    }
    // If x is outside the given range, use the nearest point
    if (!p1 || !p2) {
      p1 = points[0];
      p2 = points[points.length - 1];
    }
    // Perform linear interpolation: y = y1 + (x - x1) * (y2 - y1) / (x2 - x1)
    const y = p1.y + ((x - p1.x) * (p2.y - p1.y)) / (p2.x - p1.x);
    result.push({ ...points[i], x, y });
  }
  return result;
}
export const generatePath = (points) => {
  let d = `M${0} ${[points[0].y]}`;
  let i = 1;
  while (i < points?.length) {
    d += `L${points[i].x + " " + points[i].y}`;
    i = i + 1;
  }
  return d;
};
