import { MouseEventHandler } from "react";

type Props = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  IsDisabled?: boolean;
};

const CustomButton: React.FC<Props> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  IsDisabled,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <img
            src={rightIcon}
            alt="right icon"
            className="object-contain mx-auto"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
