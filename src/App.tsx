import "./App.css";
import CustomFilter from "./components/CustomFilter";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-with" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore the cars you might like!</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;