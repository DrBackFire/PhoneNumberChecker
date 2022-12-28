import "./App.css";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Form from "./components/Form";
import NumberListing from "./components/NumberListing";
import { Container } from "@mui/material";
import { useQuery } from "react-query";
import { fetchCountries } from "./services/Api";
import { ValidationService } from "./services/ValidationService";
import Footer from "./components/Footer";

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
      {/* <Footer /> */}
    </>
  );
}

export default App;
