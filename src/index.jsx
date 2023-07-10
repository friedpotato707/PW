import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Section from "./components/Section";
import SectionGap from "./components/SectionGap";
import {
  bio,
  experiences,
  references,
  volunteer_experiences,
} from "./components/Experiences";
import { projects, hackathons } from "./components/Projects";
import { education } from "./components/Education";
import { coursework } from "./components/Education";
import { awards } from "./components/Education";
import Background from "./components/Background";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import UniversityOfToronto from "./assets/universityOfToronto.jpg";
import FuturisticBackground from "./assets/coding.jpg";
import Team from "./assets/team.jpg";
import PortfolioGrid from "./components/PortfolioGrid";
import Recommendation from "./assets/recommendation.jpg";
import Library from "./assets/library.jpg";
import { isMobile } from "react-device-detect";
import Hackathons from "./assets/hackathons.jpg";
import CodingNew from "./assets/coding-new.jpg";
import Volunteering from "./assets/volunteering.jpg";

const App = () => {
  let courseWorkGridBreakSize = 0;
  let standardGridBreakSize = window.innerHeight * 0.1 + "px";
  let isSafari = window.safari !== undefined;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Background>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Header title="Portfolio" />

                <Section
                  index={0}
                  backgroundImage={FuturisticBackground}
                  backgroundTransparency="0.7"
                  sectionLink=""
                  fullWidth={false}
                  colorTitle={true}
                  forcedHeight={true}
                  maxWidth={1000}
                  anchorOffset="0px"
                >
                  <br />
                  <br />
                  <br />
                  <About
                    title=" Back-End Software Engineer | UofT Computer Science Alumni | CS Mentor "
                    headerTextSize="h2"
                    textSize="h2"
                    bio={bio}
                  />
                </Section>
                <SectionGap credits="A" backgroundTransparency={0.3} />

                <Section
                  title="Education"
                  index={3}
                  backgroundImage={UniversityOfToronto}
                  backgroundTransparency="0.7"
                  credits="Photo from Pexels"
                  sectionLink="education"
                  fullWidth={false}
                  colorTitle={true}
                  maxWidth={800}
                  anchorOffset="-250px"
                >
                  <PortfolioGrid
                    gridBreakSize={standardGridBreakSize}
                    items={education}
                    textSize="h3"
                    headerTextSize="h1"
                    splitView={true}
                    highlightsText="Courses taken"
                    disableAnimations={true}
                  />
                </Section>
                <SectionGap credits="A" backgroundTransparency={0.3} />

                <Section
                  title="Coursework Highlights"
                  index={3}
                  backgroundImage={Library}
                  backgroundTransparency="0.7"
                  credits="Photo by Olenka Sergienko from Pexels"
                  sectionLink="courses"
                  fullWidth={true}
                  colorTitle={false}
                  maxWidth={800}
                  anchorOffset="-250px"
                >
                  <PortfolioGrid
                    gridBreakSize={courseWorkGridBreakSize}
                    items={coursework}
                    textSize="h3"
                    headerTextSize="h2"
                    splitView={false}
                    highlightsText="Courses taken"
                    highlightTitle={false}
                    sorting={false}
                    sortingCategories={["1", "2", "3"]}
                    disableAnimations={true}
                  />
                </Section>
                <SectionGap credits="A" backgroundTransparency={0.3} />

                <Section
                  title="Volunteer Experience"
                  index={1}
                  backgroundImage={Volunteering}
                  backgroundTransparency="0.7"
                  credits="Photo by Christina Morillo from Pexels"
                  sectionLink="experience"
                  fullWidth={false}
                  colorTitle={true}
                  maxWidth={800}
                  anchorOffset="-250px"
                >
                  <PortfolioGrid
                    gridBreakSize={standardGridBreakSize}
                    items={volunteer_experiences}
                    textSize="h3"
                    headerTextSize="h1"
                    splitView={true}
                    highlightsText="Programming languages used:"
                    disableAnimations={true}
                  />
                </Section>
                <SectionGap credits="A" backgroundTransparency={0.3} />

                <Section
                  title="Projects"
                  index={4}
                  backgroundImage={FuturisticBackground}
                  plainColorBackgorund={true}
                  backgroundColor={"white"}
                  backgroundTransparency="0.9"
                  credits="Photo by Kevin Ku from Pexels"
                  sectionLink="projects"
                  fullWidth={false}
                  colorTitle={true}
                  maxWidth={1100}
                  anchorOffset="-250px"
                >
                  <PortfolioGrid
                    gridBreakSize={standardGridBreakSize}
                    items={projects}
                    textSize="h3"
                    headerTextSize="h2"
                    splitView={false}
                    highlightsText="Tech used and highlights"
                    disableAnimations={true}
                  />
                </Section>
                <SectionGap credits="A" backgroundTransparency={0.3} />
              </Route>
            </Switch>
          </BrowserRouter>
        </Background>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
