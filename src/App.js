import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import ProjectDetail from "./screens/SingleNote/ProjectDetail";
import HomePage from "./screens/HomePage/HomePage";
import ProjectScreen from "./screens/Project/ProjectScreen";
import ProjectDetails from "./screens/ProjectDetails/ProjectDetails";
import ProjectDetailss from "./screens/ProjectDetails/ProjectDetailss";
import ClientRegister from "./screens/ClientRegister/ClientRegister";
import ClientLogin from "./screens/ClientLogin/ClientLogin";
import UploadProject from "./screens/UploadProject/UploadProject";
import About from "./screens/About/About";
import Payment from './screens/Payment/Payment'
import Success from "./screens/Payment/Success";
function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/projects" component={ProjectScreen} />
        <Route path="/houses" component={ProjectDetails} />
        <Route path="/buildings" component={ProjectDetailss} />
        <Route path="/about" component={About} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/clientRegister" component={ClientRegister} />
        <Route path="/clientLogin" component={ClientLogin} />
        <Route path="/payment" component={Payment} />
        <Route path="/upload" component={UploadProject} />
        <Route path="/success" component={Success} />
        <Route
          path="/mynotes"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/createnote" component={CreateNote} />;
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/detail/:id" component={ProjectDetail} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
