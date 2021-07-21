import React from 'react';

const Selector = ({itensPerPage, setItensPerPage}) => {
    return (
        <div>
            Itens por páginas:
            <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
                <option value={2}>2</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>

            </select>
        </div>
    )

}

export default Selector;