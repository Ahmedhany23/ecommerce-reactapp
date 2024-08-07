import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { SuspenseWithDelay } from "./hooks/useLoadingWithDelay";
import ReactQueryClientProvider from "./context/QueryClientProvider";
import { HeaderCustomizationProvider } from "./hooks/HeaderCustomization";
import { AddedToCartProvider } from "./context/AddedToCart";

import ScrollToTop from "./components/utilites/ScrollToTop";

// Lazy load the components
const HomePage = lazy(() => import("./pages/Home/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Login = lazy(() => import("./pages/Login/Login"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const CartPage = lazy(() => import("./pages/Cart/CartPage"));
const ProductDetailsPage = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const ProductsPage = lazy(() => import("./pages/Product/ProductsPage"));
const CategoryPage = lazy(() => import("./pages/Category/CategoryPage"));
const SearchPage = lazy(() => import("./pages/Search/SearchPage"));
const AccountPage = lazy(() => import("./pages/Account/AccountPage"));
const WishListPage = lazy(() => import("./pages/Whishlist/WishListPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOut/CheckOutPage"));

function App() {
  return (
    <ReactQueryClientProvider>
      <HeaderCustomizationProvider>
        <AddedToCartProvider>
          <Router>
            <ScrollToTop />
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
                  path="/wishlist"
                  element={
                    <SuspenseWithDelay delay={2000}>
                      <WishListPage />
                    </SuspenseWithDelay>
                  }
                />
                <Route
                  path="/productdetails/:id"
                  element={
                    <SuspenseWithDelay delay={2000}>
                      <ProductDetailsPage />
                    </SuspenseWithDelay>
                  }
                />
                <Route
                  path="/productS"
                  element={
                    <SuspenseWithDelay delay={2000}>
                      <ProductsPage />
                    </SuspenseWithDelay>
                  }
                />
                <Route
                  path="/category"
                  element={
                    <SuspenseWithDelay delay={2000}>
                      <CategoryPage />
                    </SuspenseWithDelay>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <SuspenseWithDelay delay={2000}>
                      <AccountPage />
                    </SuspenseWithDelay>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <SuspenseWithDelay delay={2000}>
                      <CheckOutPage />
                    </SuspenseWithDelay>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <SuspenseWithDelay delay={2000}>
                      <SearchPage />
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
        </AddedToCartProvider>
      </HeaderCustomizationProvider>
    </ReactQueryClientProvider>
  );
}

export default App;
