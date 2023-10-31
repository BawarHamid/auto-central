export async function fetchCars() {
  const headers: HeadersInit = {
    "X-RapidAPI-Key":
      "122762ed7cmsh3525069bc8ae55dp194546jsn8a69e5452983" || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
