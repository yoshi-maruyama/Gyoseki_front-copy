import classes from "@/components/button/button.module.scss";
import { ButtonProps } from "@/components/button/types";

export default function Button(props: ButtonProps) {
  const { label } = props;
  return <button className={classes.button}>{label}</button>;
}
