import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { SuspenseWithDelay } from "./hooks/useLoadingWithDelay";
// Lazy load the components
const HomePage = lazy(() => import("./pages/Home/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Login = lazy(() => import("./pages/Login/Login"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <SuspenseWithDelay delay={2000}>
              <HomePage />
            </SuspenseWithDelay>
          }
        />
        <Route
          path="/contact"
          element={
            <SuspenseWithDelay delay={2000}>
              <ContactPage />
            </SuspenseWithDelay>
          }
        />
        <Route
          path="/about"
          element={
            <SuspenseWithDelay delay={2000}>
              <AboutPage />
            </SuspenseWithDelay>
          }
        />
        <Route
          path="/signup"
          element={
            <SuspenseWithDelay delay={2000}>
              <Signup />
            </SuspenseWithDelay>
          }
        />
        <Route
          path="/login"
          element={
            <SuspenseWithDelay delay={2000}>
              <Login />
            </SuspenseWithDelay>
          }
        />
        <Route
          path="*"
          element={
            <SuspenseWithDelay delay={1000}>
              <NotFoundPage />
            </SuspenseWithDelay>
          }
        />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
