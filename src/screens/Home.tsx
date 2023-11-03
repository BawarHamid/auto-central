import { useState, useEffect } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils/car-service";
import CarCard from "../components/CarCard";
import { fuels, yearsOfProduction } from "../constants";
import ShowMore from "../components/ShowMore";
import { CarState } from "../types/index-types";
import LoaderImg from "../assets/public/loading-loader.svg";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allCars, setAllCars] = useState<CarState>([]);

  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");
  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      setError(error);
      console.error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-with" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like!</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter options={fuels} setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {loading ? (
          <h2>FETCHING OUR CARS</h2>
        ) : error ? (
          <p>Database error: {error.message}</p> // Render the error message
        ) : allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, key) => (
                <CarCard car={car} key={key} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <img
                  src={LoaderImg}
                  className="object-contain"
                  height={50}
                  width={50}
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No Results!</h2>
            <p>No cars found.</p>
          </div>
        )}
      </div>
    </main>
  );
}
