import classes from "@/components/title/title.module.scss";
import { TitleProps } from "@/components/title//types";

export default function Title(props: TitleProps) {
  const { title } = props;
  return <div className={classes.title}>{title}</div>;
}
