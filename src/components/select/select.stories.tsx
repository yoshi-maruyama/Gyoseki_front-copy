import Select from "@/components/select/select";

const meta = {
  title: "Components/Select",
  component: Select,
  args: { options: { one: "one", two: "two" } },
  tags: ["autodocs"],
};

export default meta;

export const LangSelect = {
  args: { options: { en: "English", ja: "Japanese" } },
};
