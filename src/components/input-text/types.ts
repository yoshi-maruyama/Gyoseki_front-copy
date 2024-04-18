import { Path, FieldValues, UseFormRegister } from "react-hook-form";

export type InputTextProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  path: Path<T>;
  label: string;
  placeholder: string;
};
