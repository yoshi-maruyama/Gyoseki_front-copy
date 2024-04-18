import classes from "@/components/select/select.module.scss";
import { SelectProps } from "@/components/select/types";

export default function Select(props: SelectProps) {
  const { options } = props;
  return (
    <select className={classes.select}>
      {Object.keys(options).map((key) => {
        return (
          <option key={key} value={key}>
            {options[key]}
          </option>
        );
      })}
    </select>
  );
}
