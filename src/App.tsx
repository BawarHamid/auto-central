import "./App.css";
import Home from "./screens/Home";

const App: React.FC = () => {
  return <Home />;
};

export default App;

// import "./App.css";
// import Home from "./screens/Home";
// import { useEffect, useState } from "react"; // Import useEffect and useState

// const App: React.FC = () => {
//   const [searchParams, setSearchParams] = useState(
//     new URLSearchParams(window.location.search)
//   );

//   useEffect(() => {
//     // Update searchParams whenever the URL changes
//     const handlePopState = () => {
//       setSearchParams(new URLSearchParams(window.location.search));
//     };

//     // Listen for popstate events (e.g., back/forward navigation)
//     window.addEventListener("popstate", handlePopState);

//     return () => {
//       // Remove the event listener when the component unmounts
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, []);

//   return <Home searchParams={searchParams} />;
// };

// export default App;
