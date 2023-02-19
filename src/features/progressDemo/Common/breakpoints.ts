const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1200px",
};
const device = {
  xs: `(min-width: ${size.mobile})`,
  sm: `(min-width: ${size.tablet})`,
  lg: `(min-width: ${size.laptop})`,
};
export default { size, device };
