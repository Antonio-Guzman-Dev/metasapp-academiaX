
const opcionesDeFrecuencia = ["dia", "semana", "mes", "año"];
const iconos = ["💻", "🏃", "📖", "🛫", "💵"];

function Detalles() {
    return ( 
        <div>
            <form>
                <label>
                    Describe tu meta
                    <input placeholder="ej. 52 caminatas" />
                </label>
                <label>
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <input type="number" />
                    <select>
                        {opcionesDeFrecuencia.map(option => <option value={option}>{option}</option>)};
                    </select>
                </label>
                <label>
                    ¿Cuantas veces deseas completar esta meta?
                    <input type="number" />
                </label>
                <label>
                    ¿Tienes una fecha límite?
                    <input type="date" />
                </label>
                <label>
                    ¿Cuantas veces haz completado ya esta meta?
                    <input type="number" />
                </label>
                <label>
                    Escoge el icono para la meta
                    <select>
                        {iconos.map(option => <option value={option}>{option}</option>)};
                    </select>
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;