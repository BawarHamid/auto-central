import React from "react";
import CustomButton from "./CustomButton";
import { ShowMoreProps } from "../types/index-types";

const ShowMore: React.FC<ShowMoreProps> = ({
  pageNumber,
  isNext,
  setLimit,
}) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
