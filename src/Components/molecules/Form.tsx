import InputForm from "../Atomic/InputForm";
import Button from "../Atomic/Button";
import { cn } from "../../lib/cn";
import { useTheme } from "../../Context/ThemeContext";

const Form = () => {
  const { theme } = useTheme();
  return (
    <form
      action=""
      className={cn(
        "rounded-xl py-3 w-96 max-sm:w-80 flex gap-2 justify-between px-4",
        theme === "light" ? "bg-white" : "bg-black"
      )}
    >
      <InputForm />
      <Button Title="Submit" />
    </form>
  );
};

export default Form;
