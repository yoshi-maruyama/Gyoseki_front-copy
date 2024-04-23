import classes from "@/components/input-text/input-text.module.scss";
import { InputTextProps } from "@/components/input-text/types";
import { FieldValues } from "react-hook-form";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function InputText<T extends FieldValues>(props: InputTextProps<T>) {
  const { label, placeholder, error, register, path } = props;
  return (
    <div>
      <label className={classes.input_label} htmlFor={path}>
        {label}
      </label>
      <div className={classes.relative}>
        <input
          className={`${classes.input_text} ${error && classes.error}`}
          placeholder={placeholder}
          id={path}
          type={path === "password" ? "password" : "text"}
          {...register(path)}
        />
        {error && <ExclamationCircleOutlined className={classes.error_icon} />}
      </div>
      {error && <div className={classes.error_text}>{error.message}</div>}
    </div>
  );
}
