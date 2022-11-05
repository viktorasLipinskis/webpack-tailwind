import cn from "classnames";
import styles from "./Text.module.scss";

const Text = () => {
  return (
    <div className={cn(styles.text, "bg-orange-500")}>
      This is my text with css modules and tailwind styles
    </div>
  );
};

export default Text;
