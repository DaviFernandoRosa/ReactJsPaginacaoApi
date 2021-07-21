import { useEffect, useState }from 'react';
import Pagination from './Components/Pagination';
import Selector from "./Components/Selector";
import './App.css';


function App() {

    const [ itens, setItens ] = useState([])
    const [ itensPerPage, setItensPerPage] = useState(5)
    const [ currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = itens.slice(startIndex, endIndex)



    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetch('http://localhost:8000/cliente')
                .then(response => response.json())
                .then(data => data)
            setItens(result)
        }
        fetchData()
    },[])

    //Quando escolher um numero do selector vai mostrar a lista do começo
    useEffect(()=>{
        setCurrentPage(0)
    },[itensPerPage])

    return (
        <div className="App">

            <h1>Relatório </h1>

            <Selector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />


            {currentItens.map(item => {
                return <div className="item" key={item.id}>

                                 <span>NOME: {item.name}</span>
                                 <span>ID: {item.id}</span>
                                 <span>ATIVO: {item.cidade}</span>
                       </div>
            })}

            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </div>
    );
}

export default App;






