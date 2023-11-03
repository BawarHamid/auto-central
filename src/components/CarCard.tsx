import { calculateCarRent, generateCarImageUrl } from "../utils/car-service";
import steeringwheel from "../assets/public/steering-wheel.svg";
import tire from "../assets/public/tire.svg";
import gas from "../assets/public/gas.svg";
import CustomButton from "./CustomButton";
import rightIcon from "../assets/public/right-arrow.svg";
import { useState } from "react";
import CarDetails from "./CarDetails";
import { CarProps } from "../types/index-types";

export type CarCardProps = {
  car: CarProps;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <img
          src={generateCarImageUrl(car)}
          width={270}
          height={270}
          alt="car hero"
          className="mx-auto object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="car-card__icon">
            <img src={steeringwheel} width={20} height={20} alt="steeringw" />
            <p className="car-card__icon-text">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="car-card__icon">
            <img src={tire} width={20} height={20} alt="tireimg" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>

          <div className="car-card__icon">
            <img src={gas} width={20} height={20} alt="gasimg" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon={rightIcon}
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
