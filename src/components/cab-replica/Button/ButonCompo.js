import classes from "./ButtonCompo.module.css";
function ButtonCompo({
  title,
  style,
  type,
  onClick,
  prefixIcon,
  disabled,
  suffixIcon,
  className,
}) {
  return (
    <div
      onClick={onClick}
      className={`${classes.mainDiv} ${className} ${
        disabled === true ? classes.disabled : ""
      }`}
      style={style}
    >
      {prefixIcon !== undefined ? (
        <img src={prefixIcon} style={{ width: "1rem", height: "1rem" }} />
      ) : (
        ""
      )}
      <button className={classes.mainBtn} type={type} disabled={disabled}>
        {title}
      </button>
      {suffixIcon !== undefined ? (
        <img src={suffixIcon} style={{ width: "20px", height: "20px" }} />
      ) : (
        ""
      )}
    </div>
  );
}
export default ButtonCompo;
