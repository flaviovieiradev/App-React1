//import logo from './logo.svg';
//import Frases from './components/Frases';
//import Produto from './components/Produto';
//import Lista from './components/Lista';
//import Form from './components/Form';
//import Evento from './components/Evento';


/*
function App() {
  const nome="Flavio";
  //método JS para deixar as letras maiúsculas.
  const novo=nome.toUpperCase();
  const url="https://via.placeholder.com/150";

  function soma(a,b){
    return a+b;
  }


  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {novo}</p>
      <p>Soma: {soma(2,4)} </p>
      <img src={url} alt="Minha Imagem"></img>
      <Frases />
      <Produto
        nome="Caneca"
        foto="https://static3.tcdn.com.br/img/img_prod/684826/caneca_chopp_400ml_cerveja_heineken_sempre_cheia_casual_gift_24921_1_20201001144852.jpg"
        desc="Uma caneca bem interessante"
      />
      <Lista />
      <Form />
      <Evento />      
    </div>
  );
}

export default App;


import Condicional2 from './components/Condicional2';
function App() {
  return (
  <div className="App">
    <Condicional2/>
  </div>
 );
}

export default App;




import Condicional from './components/Condicional';

function App() {
  return (
    <div className="App">
      <Condicional />
    </div>
  );
}

export default App;



import './App.css';
import Lista2 from './components/Lista2';
function App() {
  const meusItens=['PHP', 'NodeJs', 'JavaScript','React'];
  return (
    <div className="App">
      <h1> Renderizando Listas</h1>
        <Lista2 itens={meusItens}/>
        <Lista2 itens={[]}/>
    </div>
  );
}

export default App;



import './App.css';
import {useState} from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState();
  return (
    <div className="App">
      <h1> State Lift </h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/empresa" element={<Empresa />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


*/

import Operacoes from './components/Operacoes';

function App() {
  return (
    <div className="App">
      <Operacoes/>
    </div>
  );
}

export default App;
