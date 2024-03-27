import "./App.css";
// import {Routes, Route} from "react-router-dom"
import Header from "./layout/Header";
import About from "./taps/About";
import Project from "./taps/Project";
import Skills from "./taps/skills";
import Educations from "./taps/educations";
import Works from "./taps/works";

import { SectionsContainer, Section } from "react-fullpage";

function App() {
  let options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: "SectionContainer", // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: "Section", // the section class name
    sectionPaddingTop: "0", // the section top padding
    sectionPaddingBottom: "0", // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
  };

  return (
    <div className="App relative">
      <Header />
      <SectionsContainer {...options}>
        <Section>
          <About />
        </Section>

        <Section>
          <Educations />
          <Works />
        </Section>

        <Section>
          <Project />
        </Section>

        <Section>
          <Skills />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
