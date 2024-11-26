import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import TableComponent from './components/table/table';
import DropDownComponent from './components/dropdown/dropdown';
import config from '../enviroments';

function App() {
  const [errorCode, setErrorCode] = useState(0);

  const [tableData, setTableData] = useState([]);

  const ownApiFailed = () => { setErrorCode(1); };

  const GetArticulos = () => {
    fetch(config.urlBackEnd + 'Articles/GetArticulos')
      .then(response => response.json())
      .then(json => {setTableData(json); setCheckedState(new Array(json.length).fill(false));})
      .catch(() => { errorCode === 0 ? ownApiFailed() : null;});
  }

  const GetVendedores = () => {
      fetch('https://run.mocky.io/v3/c70569d3-9e72-48fb-8e77-3b8b00ceb0bc')
      .then(response => response.json())
      .then(json => setDropDownData(json))
      .catch(
        () => {
        console.log("La API proveída ha fallado, cambiando a API propia");
        fetch(config.urlBackEnd + 'Sellers/GetVendedores')
        .then(response => response.json())
        .then(json => setDropDownData(json))
        .catch(() => {errorCode === 0 ? ownApiFailed() : null});
      }
    );
  }

  async function GenerateOrder() {
        await fetch(config.urlBackEnd + 'Orders/GenerateOrder', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({selectedItems: checkedState, seller: dropDownSelectedValue})
      })
      .then((response) => {
        if (response.ok) {
          alert("Pedido realizado de manera exitosa.");
          GetArticulos();
          setDropDownSelectedValue("");
          return;
        }
        throw new Error('Algo salió mal');
      })
      .catch(() => {errorCode === 0 ? ownApiFailed() : null});
  }

  useEffect(() => { GetArticulos(); }, []);

  type Seller = {
      id: number,
      descripcion: string,
  }

  const [dropDownData, setDropDownData] = useState<Seller[]>();

  useEffect(() => { GetVendedores() }, []);

  const [dropDownSelectedValue, setDropDownSelectedValue] = useState<string>("");

  const handleSellerChange = (value) => {
      setDropDownSelectedValue(value);
  }

  const [checkedState, setCheckedState] = useState<any>();

  async function generarPedido()
  {
    let canContinue = true;
    if(!checkedState.some(chk => chk === true))
    {
      alert("Seleccione por lo menos un articulo.");
      canContinue = false;
    }
    if(dropDownSelectedValue === '')
    {
      alert("Seleccione por lo menos a un vendedor.");
      canContinue = false;
    }
    if(canContinue)
    {
      await GenerateOrder();
    }
  }

  return (
    <>
      {
        errorCode === 0 &&
        <>
          { dropDownData ? <DropDownComponent data={ dropDownData } handleChange={handleSellerChange} selectedValue={dropDownSelectedValue}/> : 'Cargando...' }
          { tableData ? <TableComponent data={ tableData } check={{checkedState, setCheckedState}} /> : 'Cargando...' }
          { dropDownData && tableData && <button onClick={generarPedido}>Generar pedido</button> }
        </>
      }
      {
        errorCode !== 0 &&
        <>
          <h1>⚠️Error⚠️</h1>
          <h2>Hubo un problema con la API</h2>
          <h3>Probablemente no se este ejecutando</h3>
          <h4>En caso de estar testeandola en local, Por favor, levanten el backend</h4>
          <h5>de no ser así...</h5>
          <h1 className='monke'>🙈</h1>
          <small className='hide'>¿Probaron ya seteando la urlBackEnd para prod desde el config de enviroments?</small>
        </>
      }
    </>
  )
}

export default App
