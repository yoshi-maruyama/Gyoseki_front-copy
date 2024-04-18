import classes from "@/components/input-text/input-text.module.scss";
import { InputTextProps } from "@/components/input-text/types";

export default function InputText(props: InputTextProps) {
  const { label, placeholder } = props;
  return (
    <div>
      <label className={classes.input_label}>{label}</label>
      <input className={classes.input_text} placeholder={placeholder} type="text" />
    </div>
  );
}
