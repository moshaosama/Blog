import { useNavigate } from "react-router";

const useSetActiveElement = () => {
  const Navigate = useNavigate();
  const handleClick = (el?: React.MouseEvent<HTMLDivElement>, data?: any) => {
    document.querySelectorAll(".Active").forEach((el: any) => {
      el.classList.remove("Active");
    });
    el?.currentTarget.classList.add("Active");
    Navigate(data.slice(1));
  };

  return { handleClick };
};

export default useSetActiveElement;
