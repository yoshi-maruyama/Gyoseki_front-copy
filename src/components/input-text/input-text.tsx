import classes from "@/components/input-text/input-text.module.scss";
import { InputTextProps } from "@/components/input-text/types";
import { FieldValues } from "react-hook-form";

export default function InputText<T extends FieldValues>(props: InputTextProps<T>) {
  const { label, placeholder, register, path } = props;
  return (
    <div>
      <label className={classes.input_label}>{label}</label>
      <input
        className={classes.input_text}
        placeholder={placeholder}
        type="text"
        {...register(path)}
      />
    </div>
  );
}
