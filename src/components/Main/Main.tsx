import classes from "./Main.module.sass";
import catImg from "../../assets/cat.jpg";

const Main: React.FC<{ isMobile: boolean; apx: number }> = ({
  isMobile,
  apx,
}) => {
  return (
    <div className={classes.wrap}>
      <h1>
        React + SASS example for{" "}
        <a href="https://www.npmjs.com/package/adaptive-pixel">
          adaptive-pixel
        </a>{" "}
        pakage
      </h1>

      <div className={classes.text}>
        Some text on{" "}
        <span className={classes.accent}>
          {isMobile ? "mobile" : "desktop"}
        </span>{" "}
        view.
        <br />
        Current apx value ={" "}
        <span className={classes.accent}>{apx.toFixed(4)}</span>
      </div>

      <img className={classes.img} src={catImg} alt="" />
    </div>
  );
};

export default Main;
