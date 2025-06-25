const Button = ({ Title }: { Title: string }) => {
  return (
    <button className="w-32 py-1 rounded-md bg-white text-black">
      {Title}
    </button>
  );
};

export default Button;
