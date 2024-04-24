import { ChangeEvent } from "react";

export type SelectProps = {
  options: {
    [key: string]: string;
  };
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};
