import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'

//data
import aboutData from './data/AboutData.js'
import projectsData from './data/ProjectsData.js'
import contactData from './data/ContactData'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About aboutData={aboutData}/>
      <Projects projectsData={projectsData}/>
      <Footer contactData={contactData}/>
    </div>
  );
}

export default App;
