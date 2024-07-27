import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashbord from "./pages/Dashbord";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import FooterCom from "./components/FooterCom";
import { ApiProvider } from "./context/ApiContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ApiProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <FooterCom />
        </ApiProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
