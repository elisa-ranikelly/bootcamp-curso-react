import { useState } from "react";

function Counter(){
    // [consultar, alterar]
    const [counter, setCounter] = useState(0);

    function testeDoBotao(){
        return setCounter(counter + 1);
    }

    return(
        <div>
            <p>Você clicou {counter} vezes</p>
            <button onClick={() => testeDoBotao()}>Clique aqui</button>
        </div>
    )
}

export default Counter;