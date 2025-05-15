const importAll = (requireContext) => {
  const icons = {};
  requireContext.keys().forEach((key) => {
    const fileName = key.replace("./", "").replace(/\.[^/.]+$/, "");
    icons[fileName] = requireContext(key);
  });
  return icons;
};

const ISIcons = importAll(
  require.context(
    "../assets/Instructor-station/Icons",
    false,
    /\.(svg|png|jpe?g|gif|PNG)$/
  )
);
const CRIcons = importAll(
  require.context(
    "../assets/cab-replica/icons",
    false,
    /\.(svg|png|jpe?g|gif|PNG)$/
  )
);
const DADIcons = importAll(
  require.context("../assets/DAD/icons", false, /\.(svg|png|jpe?g|gif|PNG)$/)
);
const VIDIcons = importAll(
  require.context("../assets/VID/icons", false, /\.(svg|png|jpe?g|gif|PNG)$/)
);
const DDUIcons = importAll(
  require.context("../assets/DDU/icons", false, /\.(svg|png|jpe?g|gif|PNG)$/)
);
const Signage = importAll(
  require.context("../assets/Signage", false, /\.(svg|png|jpe?g|gif|PNG)$/)
);
const Icons = {
  ISIcons,
  CRIcons,
  DADIcons,
  DDUIcons,
  Signage,
  VIDIcons,
};
export default Icons;
