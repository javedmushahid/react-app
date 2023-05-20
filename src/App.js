import React from "react";
import { Container, Typography } from "@mui/material";
import ClassComponent from "./Components/ClassComponent";
import QuestionTwo from "./Components/QuestionTwo";
import QuestionThree from "./Components/QuestionThree";
import QuestionFive from "./Components/QuestionFive";
import QuestionSix from "./Components/QuestionSix";
import FunctionalComponent from "./Components/FunctionalComponent.tsx";
import QuestionFour from "./Components/QuestionFour";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1">
        Question 1:
      </Typography>

      <ClassComponent />

      <Typography variant="h2" component="h1">
        Question 2:
      </Typography>
      <QuestionTwo />

      <Typography variant="h2" component="h1">
        Question 3:
      </Typography>
      <QuestionThree />

      <Typography variant="h2" component="h1">
        Question 4:
      </Typography>
      <QuestionFour />

      <QuestionFive />

      <Typography variant="h2" component="h1">
        Question 6:
      </Typography>
      <QuestionSix />
    </Container>
  );
};

export default App;
