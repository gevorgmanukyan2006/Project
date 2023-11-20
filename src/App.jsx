import React, { createContext, useState } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import { AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Design from "./Components/Design/Design";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
export const ContextProvider = createContext();

const App = () => {
  const addNotification = (text, type) => {
    toast(text, { type });
  };
  const [num, setNum] = useState(5);
  const [loadin, setLoading] = useState(5);
  const { user, isAuthenticated } = useAuth0();

  const contextValue = {
    num,
    setNum,
    loadin,
    setLoading,
    addNotification,
  };
  const location = useLocation();
  const containerStyles = { width: "100%", margin: "auto" };

  return (
    <>
      <div>
        <div style={containerStyles}>
          <ContextProvider.Provider value={contextValue}>
            <AnimatePresence mode="wait">
              <Routes key={location.pathname} location={location}>
                <Route
                  path="/"
                  element={
                    isAuthenticated ? (
                      <Profile user={user} isAuthenticated={isAuthenticated} />
                    ) : (
                      <Portfolio />
                    )
                  }
                />
                <Route path="/home" element={<Home />} />
                <Route path="/design" element={<Design />} />
                <Route
                  path="/contact"
                  element={<Contact isAuthenticated={isAuthenticated} />}
                />
                <Route
                  path="/todo"
                  element={<ToDo addNotification={addNotification} />}
                />
                <Route path="/singleTask/:id" element={<SingleTask />} />
              </Routes>
              <Profile />
            </AnimatePresence>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </ContextProvider.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
