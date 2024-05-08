import Encabezado from './componentes/compartidos/Encabezado';
import Pie from './componentes/compartidos/Pie';
import Principal from './componentes/compartidos/Principal';
import Meta from './componentes/lista/Meta';
import './App.css';

function App() {
  return (
    <div className="App">

      <Encabezado></Encabezado>
      <Principal>
        <Meta></Meta>
      </Principal>
      <Pie></Pie>

    </div>
  );
}

export default App;
