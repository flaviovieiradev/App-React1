import {useState, useEffect} from 'react';
//Arrow Function
const Operacoes = () => {
    //exemplo de useEffect
    useEffect(() =>{
     console.log('Sou o Primeiro a ser executado');
    });
    
    //useStates
    const [v1, setV1] = useState();
    const [v2, setV2] = useState();
    const [total, setTotal] = useState();
    
    //Arrow Function
    const handleSoma = (e) =>{ 
        e.preventDefault();
        setTotal(parseInt(v1)+parseInt(v2));
    };
    //Função comum
    function handleSub (e) {
        e.preventDefault();
        setTotal(v1-v2);
    };
    const handleMult = (e) => {
        e.preventDefault();
        setTotal(v1*v2);
    };
    const handleDiv = (e) => {
        e.preventDefault();
        setTotal(v1/v2);
    };
    return(
        <div>
        <h1> Minhas operações </h1>
        <form>
            <input type="number" placeholder="Digite um número" onChange={(e)=> setV1(e.target.value)} />
            <br/>
            
            <input type="number" placeholder="Digite um número" onChange={(e)=> setV2(e.target.value)} />
            <br/>
            
            <button onClick={handleSoma}>Soma</button>
            <button onClick={handleSub}>Subtração</button>
            <button onClick={handleMult}>Multiplicação</button>
            <button onClick={handleDiv}>Divisão</button>
            
            <p>Resultado: {total}</p>
        </form>
    </div>
    )
}

export default Operacoes;