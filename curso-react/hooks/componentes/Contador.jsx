import { useReducer } from "react";

function Contador(){

    // Definição de estado inicial
    const estadoInicial = {contador: 0};
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    // função reducer que define como as ações atualizam o estado
    function reducer(estado, acao){
        switch(acao.tipo){
            case "incrementar":
                return {contador: estado.contador + 1};
            case "decrementar":
                return {contador: estado.contador - 1};
            case "resetar":
                return {contador: 0};
            default:
                throw new Error('Ação não suportada!');
        }
    }
    return(
        <div>
            <div>
                <p>Contagem: {estado.contador}</p>
                <button onClick={() => dispatch({tipo: "incrementar"})}>Incrementar</button>
            </div>
            <div>
                <p>Contagem: {estado.contador}</p>
                <button onClick={() => dispatch({tipo: "decrementar"})}>Decrementar</button>
            </div>
            <div>
                <p>Contagem: {estado.contador}</p>
                <button onClick={() => dispatch({tipo: "resetar"})}>Resetar</button>
            </div>
        </div>
    )
};

export default Contador;