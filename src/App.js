import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import MainNavigation from './components/MainNavigation';
import ActivitiesPage from './pages/Activities';
import FooterPage from './pages/Footer';

function App() {
  return <div> 
    <MainNavigation/>
    <HomePage idA="about"/>
    <ProjectsPage id="projects"/>
    <ActivitiesPage id="activities"/>
    <ContactPage id="contact"/>
    <FooterPage id="footer"/>
  </div>;
}

export default App;