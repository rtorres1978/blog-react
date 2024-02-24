import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/inicio";
import Blog from "./componentes/blog";
import Acerca_De from "./componentes/acerca_de";
import Header from "./componentes/header";
import styled from "styled-components";
import Post from "./componentes/post";
import Error404 from "./componentes/Error404";
const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Routes>
            <Route path="*" element={<Error404/>}/>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post/>} />
            <Route path="/acerca-de" element={<Acerca_De />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
background: #fff;
padding: 40px;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`

export default App;



