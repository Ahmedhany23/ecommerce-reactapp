import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { SuspenseWithDelay } from "./hooks/useLoadingWithDelay";
import ReactQueryClientProvider from "./context/QueryClientProvider";
import { HeaderCustomizationProvider } from "./hooks/HeaderCustomization";

// Lazy load the components
const HomePage = lazy(() => import("./pages/Home/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Login = lazy(() => import("./pages/Login/Login"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const CartPage = lazy(() => import("./pages/Cart/CartPage"));
function App() {
  return (
    <ReactQueryClientProvider>
      <HeaderCustomizationProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <SuspenseWithDelay delay={1000}>
                    <HomePage />
                  </SuspenseWithDelay>
                }
              />
              <Route path="/contact" element={<ContactPage />} />
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
                  <SuspenseWithDelay delay={1000}>
                    <Signup />
                  </SuspenseWithDelay>
                }
              />
              <Route
                path="/login"
                element={
                  <SuspenseWithDelay delay={1000}>
                    <Login />
                  </SuspenseWithDelay>
                }
              />
              <Route
                path="/cart"
                element={
                  <SuspenseWithDelay delay={2000}>
                    <CartPage />
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
      </HeaderCustomizationProvider>
    </ReactQueryClientProvider>
  );
}

export default App;
