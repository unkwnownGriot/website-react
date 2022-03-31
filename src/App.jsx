import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Services from "./components/Services";
const Container = styled.div`
  height:100vh;
  overflow: hidden;
  position: relative;
`

const    Shape = css`
   width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`



const IntroShape = styled.div`
 ${Shape}
  clip-path: polygon(100% 0%, 76% 0%, 65% 100%, 100% 100%);
  background-color: crimson;
`
const FeatureShape = styled.div`
 ${Shape}
  clip-path: polygon(0% 0%, 45% 0%, 23% 100%, 0% 100%);
  background-color: lightcoral;
`
const ServiceShape = styled.div`
 ${Shape}
  clip-path: polygon(0% 0%, 23% 0%, 43% 100%, 0% 100%);
  background-color: #f88497;
`

const PriceShape = styled.div`
 ${Shape}
  clip-path: polygon(43% 0%, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`

function App() {

  const smallScreen = window.screen.width <= 480 ? true : false
  return (
    <>
          <Container>
              <Navbar/>
              <Intro/>
              <IntroShape/>
            </Container>
          <Container>
            <Features/>
            <FeatureShape/>
          </Container>
          <Container>
            <Services/>
         {!smallScreen &&  <ServiceShape/>}
          </Container>
          <Container>
            <Price/>
            <PriceShape/>
          </Container>
          <Container>
            <Contact/>
            <Footer/>
          </Container>
    </>
     
  );
}

export default App;
