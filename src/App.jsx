import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesContextProvider } from "./contexts/CitiesContex";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectAuth from "./pages/ProtectAuth";
function App() {
  return (
    <AuthProvider>
      <CitiesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectAuth>
                  <AppLayout />
                </ProtectAuth>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesContextProvider>
    </AuthProvider>
  );
}

export default App;
