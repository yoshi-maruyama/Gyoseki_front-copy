import classes from "@/components/button/button.module.scss";
import { ButtonProps } from "@/components/button/types";

export default function Button(props: ButtonProps) {
  const { label, disabled } = props;
  return (
    <button className={classes.button} disabled={disabled}>
      {label}
    </button>
  );
}
