import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/home/Home";
import PressCorner from "../pages/pressCorner/PressCorner";
import PressCornerID from "../pages/pressCornerId/PressCornerID";
import Tournament from "../pages/tournament/Tournament";
import MatchCenter from "../pages/matchCenter/MatchCenter";
import About from "../pages/about/About";
import TNC from "../pages/tnc/TNC";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import Initiatives from "../pages/initiatives/Initiatives";

import { AnimatePresence, motion } from "framer-motion";
import InitiativesID from "../pages/initiativesID/InitiativesID";
import SignUp from "../pages/signup/SignUp";
import TQ from "../pages/tq/TQ";
import SignIn from "../pages/signIn/SignIn";
import OTP from "../pages/otp/OTP";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import PasswordChange from "../pages/passwordChange/PasswordChange";
import TeamRegistration from "../pages/teamRegistration/TeamRegistration";

const pageVariants = {
  initial: {
    x: "100vw", // Initial position off-screen to the right
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5, // Adjust duration as needed
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      delay: 0.5, // Delay the exit animation by 0.3 seconds
      duration: 0.2,
    },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/tournaments"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Tournament />
            </motion.div>
          }
        />
        <Route path="/press-corner" element={<PressCorner />} />
        <Route path="/press-cornerid" element={<PressCornerID />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/initiatives-id" element={<InitiativesID />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/match-center" element={<MatchCenter />} />
        <Route path="/terms-and-conditions" element={<TNC />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/thank-you" element={<TQ />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/password-changed-successfully"
          element={<PasswordChange />}
        />
        <Route path="/team-register" element={<TeamRegistration />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
