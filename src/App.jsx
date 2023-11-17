import React, { createContext, useState } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import { AnimatePresence } from "framer-motion";

// import A from "./functionalComponents/A";

import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Design from "./Components/Design/Design";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Regsiter from "./Components/Register/Regsiter";
import Portfolio from "./Components/Portfolio/Portfolio";
export const ContextProvider = createContext();

const App = () => {
  const types = ["success", "info", "warning", "error"];
  const addNotification = (text, type) => {
    toast(text, { type });
  };
  const [num, setNum] = useState(5);
  const [loadin, setLoading] = useState(5);
  const contextValue = {
    num,
    setNum,
    loadin,
    setLoading,
    addNotification,
  };
  const navigate = useNavigate();
  const location = useLocation();
  const containerStyles = { width: "100%", margin: "auto" };
  return (
    <>
      <div>
        <div style={containerStyles}>
          <ContextProvider.Provider value={contextValue}>
            <AnimatePresence mode="wait">
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Portfolio />} />
                <Route path="/home" element={<Home />} />
                <Route path="/design" element={<Design />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/todo"
                  element={<ToDo addNotification={addNotification} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Regsiter />} />
                <Route path="/singleTask/:id" element={<SingleTask />} />
              </Routes>
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
          {/* <A /> */}
        </div>
      </div>
    </>
  );
};

export default App;
