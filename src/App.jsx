import "./App.css";
import { createBrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import PressCorner from "./pages/pressCorner/PressCorner";
import PressCornerID from "./pages/pressCornerId/PressCornerID";
import Tournament from "./pages/tournament/Tournament";
import MatchCenter from "./pages/matchCenter/MatchCenter";
import About from "./pages/about/About";
import TNC from "./pages/tnc/TNC";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Initiatives from "./pages/initiatives/Initiatives";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import AnimatedRoutes from "./routes/AnimatedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tournaments",
        element: <Tournament />,
      },
      {
        path: "/press-corner",
        element: <PressCorner />,
      },
      {
        path: "/press-cornerid",
        element: <PressCornerID />,
      },
      {
        path: "/initiatives",
        element: <Initiatives />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/login",
        element: "Login",
      },
      {
        path: "/match-center",
        element: <MatchCenter />,
      },
      {
        path: "/terms-and-conditions",
        element: <TNC />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
