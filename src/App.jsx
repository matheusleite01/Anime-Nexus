import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Anime from "./components/Anime";
import Manga from "./components/Manga";
import Character from "./components/Character";
import Producers from "./components/Producers";
import PageNotFound from "./components/PageNotFound";
import Sidebar from "./components/Sidebar";
import Info from "./components/Info";
import { GlobalStorage } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Anime />} />
          <Route path="manga" element={<Manga />} />
          <Route path="character" element={<Character />} />
          <Route path="producers" element={<Producers />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
