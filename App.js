import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Container } from "./Styled";

export const App = () => {
  return (
    <Container>
      <Login />
      <Register />
    </Container>
  );
};

export default App;
