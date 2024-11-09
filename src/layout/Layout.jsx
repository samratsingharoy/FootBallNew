import React, { useEffect } from "react";
import Nav from "../components/nav/Nav";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
