import { useState } from "react";

const useOpenTabel = () => {
  const [isOpenTable, setIsOpenTable] = useState(false);

  const handleTriggerOpenTable = () => {
    setIsOpenTable((prev) => !prev);
  };

  return { isOpenTable, handleTriggerOpenTable };
};

export default useOpenTabel;
