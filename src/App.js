import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Research } from "./pages/Research/Research";
import { Honors } from "./pages/Honors/Honors";
import { BookReviews } from "./pages/BookReviews/BookReviews";


const App = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/honors" element={<Honors />} />
          <Route path="/Book-Reviews" element={<BookReviews />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default App;