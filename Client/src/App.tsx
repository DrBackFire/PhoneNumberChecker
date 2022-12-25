import "./App.css";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Form from "./components/Form";
import useNumberValidator from "./hooks/useNumberValidator";

function App() {
  const { validationService } = useNumberValidator();

  return (
    <>
      <Header />
      <Form validationService={validationService} />
      <Container className="mt-3" maxWidth="xl"></Container>
    </>
  );
}

export default App;
