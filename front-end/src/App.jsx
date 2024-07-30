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
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider.jsx";
import { PrivateCom } from "./components/PrivateCom.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <ThemeProvider>
              <ApiProvider>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route
                    path="/dashbord"
                    element={
                      <PrivateCom>
                        <Dashbord />
                      </PrivateCom>
                    }
                  />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <FooterCom />
              </ApiProvider>
            </ThemeProvider>
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </>
  );
};
export default App;
