import { ThemeProvider } from "styled-components";
import { StyledButton } from "./Components/styles/Button.styled";
import { AppContainer } from "./Components/styles/Container.styled";
import { GlobalStyles } from "./Components/styles/GlobalStyles";
import Header from "./Components/Header";
import content from "./content";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

// theme provider je pro nejake glob. veci
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: "768px", // tady tahle hodnota bude nase hodnota pro max width u media query. kdyz ji zmenim tady, tak se pak zmeni vsude, kde potrebuji
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyles />
        <Header />
        <StyledButton
          buttonLabel="Click here"
          backgroundColor="green"
        ></StyledButton>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </AppContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

/*
PUVODNI:
function App() {
  return (
    <AppContainer>
      <Button backgroundColor="red"><ButtonLabel>Click me 1!</ButtonLabel></Button>
      <Button backgroundColor="blue">Click me 1!</Button>
      <Button backgroundColor="green">Click me 1!</Button>
    </AppContainer>
  );
}
 */
