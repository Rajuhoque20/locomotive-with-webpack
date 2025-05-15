export const getDirectionalCLData = () => {
  let data = {
    text1: "s-626",
  };
  let direction = [
    {
      exist: true,
      active: false,
    },
    {
      exist: true,
      active: false,
    },
    {
      exist: true,
      active: false,
    },
    {
      exist: true,
      active: false,
    },
    {
      exist: true,
      active: false,
    },
    {
      exist: true,
      active: true,
    },
  ];
  data["DIRECTION"] = direction;
  return data;
};
