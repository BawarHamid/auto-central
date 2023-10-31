import "./App.css";
import Home from "./screens/Home";
// import CustomFilter from "./components/CustomFilter";
// import Hero from "./components/Hero";
// import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  return (
    <Home />
    // <main className="overflow-hidden">
    //   <Hero />

    //   <div className="mt-12 padding-x padding-y max-with" id="discover">
    //     <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
    //       <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
    //       <p>Explore the cars you might like!</p>
    //     </div>

    //     <div className="home__filters">
    //       <SearchBar />
    //       <div className="home__filter-container">
    //         <CustomFilter title="fuel" />
    //         <CustomFilter title="year" />
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default App;
