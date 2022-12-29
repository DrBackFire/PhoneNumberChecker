import "./App.css";
import Header from "./components/Header";
import NumberListing from "./components/NumberListing";
import { useQuery } from "react-query";
import { fetchCountries } from "./services/Api";
import { ValidationService } from "./services/ValidationService";

function App() {
  const { data: validationService } = useQuery(
    "supportedCountries",
    fetchCountries,
    {
      select: (data) => new ValidationService(data),

      /** To prevent a new service instance on window focus.
          The service is meant to be a singleton 
        */
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Header validationService={validationService} />
      <NumberListing validationService={validationService} />
    </>
  );
}

export default App;
