import Encabezamiento from './componentes/compartidos/Encabezamiento';
import Pie from './componentes/compartidos/Pie';
import Principal from './componentes/compartidos/Principal';
import './App.css';

function App() {
  return (
    <div className="App">

      <Encabezamiento></Encabezamiento>
      <Principal></Principal>
      <Pie></Pie>

    </div>
  );
}

export default App;
