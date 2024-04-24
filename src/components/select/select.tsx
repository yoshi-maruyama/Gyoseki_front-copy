import classes from "@/components/select/select.module.scss";
import { SelectProps } from "@/components/select/types";

export default function Select(props: SelectProps) {
  const { options, onChange, defaultValue } = props;
  return (
    <select className={classes.select} value={defaultValue} onChange={onChange}>
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
