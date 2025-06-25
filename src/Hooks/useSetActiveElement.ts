const useSetActiveElement = () => {
  const handleClick = (el?: React.MouseEvent<HTMLButtonElement>) => {
    document.querySelectorAll(".Active").forEach((el: any) => {
      el.classList.remove("Active");
    });
    el?.currentTarget.classList.add("Active");
  };

  return { handleClick };
};

export default useSetActiveElement;
