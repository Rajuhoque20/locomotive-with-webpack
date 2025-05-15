import classes from "./ModalCompo.module.css";
import closeIcon from "../../assets/closeIcon.svg";
function ModalCompo({
  open = false,
  className,
  onCancel,
  children,
  contentStyle,
  closableLeft = false,
  closableRight = false,
  header,
  childrenModStyle,
}) {
  if (open) {
    return (
      <div>
        <div className={classes.maskModal}></div>
        <div className={classes.ModalWrap}>
          <div className={`${classes.modal} ${className}`} style={contentStyle}>
            <div className={classes.header}>
              <div>
                {closableLeft === false ? (
                  <div></div>
                ) : (
                  <div onClick={onCancel}>
                    <img src={closeIcon}></img>
                  </div>
                )}
              </div>
              <div>{header}</div>
              <div>
                {closableRight === false ? (
                  <div></div>
                ) : (
                  <div onClick={onCancel}>
                    <img src={closeIcon}></img>
                  </div>
                )}
              </div>
            </div>
            <div className={classes.modalContent} style={childrenModStyle}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalCompo;
