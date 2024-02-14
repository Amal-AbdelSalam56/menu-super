import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import LogoPage from "./pages/logoPage/logoPage";
import ProductSingle from "./pages/ProductSingle/ProductSingle";
import SearchMenu from "./pages/Search/Search";
import FeedbackForm from "./pages/Feedback/Feedback";
import { useEffect, useState } from "react";


function App() {

  const language = localStorage.getItem('lang' || 'en');

  // useEffect(() => {
  //   localStorage.setItem('lang', language);
  // }, [language]);

  return (
    <BrowserRouter>

      <div className="flex h-full min-h-screen animate-fadeIn relative " dir={language == 'ar' ? 'rtl' : 'ltr'}>
        {/* Mobile View */}
        <div id="mobile" className="w-full xs:max-w-full lg:max-w-[30%] min-h-screen lg:h-screen lg:min-h-screen lg:relative flex flex-col justify-start flex-1 md:border-r md:border-solid md:border-r-[#0000004D] lg:border-r lg:border-solid lg:border-r-[#0000004D]">
          <Routes>
            {/* Mobile View */}
            <Route path="/" element={<Home />} />
            <Route path="/ProductSingle/:id" element={<ProductSingle />} />
            <Route path="/SearchMenu" element={<SearchMenu />} />
            <Route path="/Feedback" element={<FeedbackForm />} />
          </Routes>
        </div>

        {/* Desktop View */}
        <div id="desktop" className="hidden sm:hidden md:hidden lg:flex flex-col items-center justify-center w-full max-w-[70%] select-none border border-solid border-transparent">
          <LogoPage />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
