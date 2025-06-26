import CategoryInformations from "../molecules/CategoryInformation";
import CategoryInformationTable from "../molecules/CategoryInformationTable";
import ImageDetailsCategoryId from "../molecules/ImageDetailsCategoryId";
import TableOfContent from "../molecules/TableOfContent";

export const CategoryId = () => {
  return (
    <>
      <ImageDetailsCategoryId />
      <div className="mx-10 my-10">
        <CategoryInformationTable />
        <div className="flex max-sm:flex-col mt-10 gap-x-20">
          <TableOfContent />
          <CategoryInformations />
        </div>
      </div>
    </>
  );
};
