import InputForm from "../Atomic/InputForm";
import Button from "../Atomic/Button";

const Form = () => {
  return (
    <form
      action=""
      className="bg-black rounded-xl py-3 w-96 flex gap-2 justify-between px-4"
    >
      <InputForm />
      <Button />
    </form>
  );
};

export default Form;
