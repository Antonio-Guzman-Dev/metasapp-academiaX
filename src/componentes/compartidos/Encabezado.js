import estilos from './Encabezado.module.css';
import { ReactComponent as LogoSVG } from '../../img/logo.svg';
import { ReactComponent as PerfilSVG } from '../../img/perfil.svg';

function Encabezado() {
  return (
    <header className={estilos.encabezado}>

      <div className="flex pl-4">
        <LogoSVG className={estilos.logo} />
        <a href="/" className={estilos.metas}>Metas App</a>
      </div>

      <nav>
        <a href="/perfil" className={estilos.perfil} >
          <PerfilSVG className={estilos.logoPerfil} />
        </a>
      </nav>

    </header>
  );
}

export default Encabezado;