import { Routes, Route } from 'react-router';
import Layout from './componentes/compartidos/Layout';
import './App.css';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import NoEncontrado from './componentes/compartidos/NoEncontrado';
import Modal from './componentes/compartidos/Modal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Lista />} />  
        <Route path="/lista" element={<Lista />}>
          <Route path="/lista/:id" element={
            <Modal>
              <Detalles></Detalles>
            </Modal>} />
        </Route>
        <Route path="/nueva" element={<Detalles />} />
      </Route>
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;
