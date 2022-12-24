import "./App.css";
import Header from "./components/Header";
import { Container } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <Form />
      <Container className="mt-3" maxWidth="xl"></Container>
    </>
  );
}

export default App;
