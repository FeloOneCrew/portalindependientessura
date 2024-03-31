import './Portal.css'
import basedatos from "../utils/datosPrueba.json"
import {useState} from 'react'

export function Portal(){

    const [verFiltro, modificarFiltro] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    //const [datosFiltrados, setDatosFiltrados] = useState(basedatos);
    

    // Función para manejar cambios en el input
    const handleInputChange = (event) => {
        modificarFiltro(event.target.value);
    };


    /*const filtrarPorPalabra = basedatos.filter(datos =>
        datos.Ciudad.toLowerCase().includes(verFiltro.toLowerCase())
    );
    */
    
    const filtrarPorPalabra = selectedOption !== '' ? basedatos.filter(datos =>
        datos[selectedOption].toLowerCase().includes(verFiltro.toLowerCase())
    ) : basedatos;

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    let felo = filtrarPorPalabra.length

    /*
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        // Filtrar los datos basados en la opción seleccionada
        const filteredData = basedatos.filter(datos => datos[selectedOption].toLowerCase() === event.target.value.toLowerCase());
        setDatosFiltrados(filteredData);
    };
        
    */
   
    return(
        <>  
            <div className='contenedor'>
                <div className="container cont1 mt-5 col-md-6">
                    <select 
                        value={selectedOption} 
                        onChange={handleSelectChange} 
                        className='ContainerLista mb-2'
                    >
                        <option value="">Seleccione la opcion de filtro</option>
                        <option value="Nombre_completo">Nombre</option>
                        <option value="Documento_de_identidad">Documento</option>
                        <option value="Salario">Salario</option>
                        <option value="Ciudad">Ciudad</option>
                        <option value="Tipo_de_independiente">Tipo</option>
                        <option value="Sector_económico">Sector Económico</option>
                        <option value="Nivel_de_riesgo">Nivel Riesgo</option>
                    </select>
                    <input 
                        type='text'
                        id='search'
                        className='form-control mb-4 col-md-3' 
                        placeholder='Filtrar'
                        value={verFiltro}
                        onChange={handleInputChange}
                    />
                    <p>Se va a filtrar por la columna: {selectedOption}</p>
                    <table 
                        className="table table-responsive table-hover" 
                        id='tabla'
                    >
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Documento</th>
                                <th>Salario</th>
                                <th>Ciudad</th>
                                <th>Tipo</th>
                                <th>Sector Económico</th>
                                <th>Nivel Riesgo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                /*basedatos.map((datos)=>{
                                    return(
                                        <tr>
                                            <td>{datos.Nombre_completo}</td>
                                            <td>{datos.Documento_de_identidad}</td>
                                            <td>{datos.Salario}</td>
                                            <td>{datos.Ciudad}</td>
                                            <td>{datos.Tipo_de_independiente}</td>
                                            <td>{datos.Sector_económico}</td>
                                            <td>{datos.Nivel_de_riesgo}</td>
                                        </tr>
                                    )
                                })
                                */
                                filtrarPorPalabra.map((datos, index) => (
                                    <tr key={index}>
                                    <td>{datos.Nombre_completo}</td>
                                    <td>{datos.Documento_de_identidad}</td>
                                    <td>{datos.Salario}</td>
                                    <td>{datos.Ciudad}</td>
                                    <td>{datos.Tipo_de_independiente}</td>
                                    <td>{datos.Sector_económico}</td>
                                    <td>{datos.Nivel_de_riesgo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="contInfo col-md-3">
                    <table 
                        className="table-bordered table mt-5" 
                        id='tabla'
                    >
                        <thead>
                            <tr>Información</tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>palabra ingresada es:</td> 
                                <td><strong>{verFiltro}</strong></td>
                            </tr>

                            <tr>
                                <td>La cantidad de filas encontradas es: </td>
                                <td><strong>{felo}</strong></td>
                                
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
  
        </>
    ) 
}