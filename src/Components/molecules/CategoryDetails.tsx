import Text_Elements from "../Atomic/Text_Elements";
import { useLocation } from "react-router";

const CategoryDetails = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Text_Elements>
        <h1 className="text-3xl font-bold">#{pathname.slice(12)}</h1>
        <p>Discover more categories and expand your knowledge!</p>
      </Text_Elements>
    </>
  );
};

export default CategoryDetails;
