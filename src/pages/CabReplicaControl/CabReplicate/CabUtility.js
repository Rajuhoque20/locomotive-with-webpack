export const dialPointValidate = (min, max, value) => {
  if (value > max) {
    return max;
  }
  if (value < min) {
    return min;
  }
  return value;
};

export const throttleValueAngleFn = (value) => {
  value = value > 3 ? 3 : value < -3 ? -3 : value;
  switch (value) {
    case 0:
      return 0;
    case 1:
      return -45;
    case 2:
      return -90;
    case 3:
      return -135;
    case -1:
      return 45;
    case -2:
      return 90;
    case -3:
      return 135;
    default:
      return null;
  }
};

export const switchValueAngleFn = (value) => {
  value = value > 1 ? 1 : value < -1 ? -1 : value;
  switch (value) {
    case 0:
      return 0;
    case 1:
      return -30;
    case -1:
      return 30;
    default:
      return null;
  }
};

export const deriveAngleFn = (min1, max1, min2, max2, current) => {
  const result = min2 + ((current - min1) / (max1 - min1)) * (max2 - min2);
  return result;
};
