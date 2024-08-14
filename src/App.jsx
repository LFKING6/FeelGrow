import { RouterProvider, Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Materiais from "./pages/Materiais";
import Referencias from "./pages/Referencias";
import Contato from "./pages/Contato";

import {theme} from "./styles/theme.js"
import {GlobalStyle} from "./styles/global.js"

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/materiais" element={<Materiais />}/>
            <Route path="/referencias" element={<Referencias />}/>
            <Route path="/contato" element={<Contato />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}
