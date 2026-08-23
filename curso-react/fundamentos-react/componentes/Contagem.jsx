import { useState } from "react";

function Contagem(){
    const [contagem, setContagem] = useState(0);

    function handleClick(){
        return setContagem(contagem + 1);
    }

    function handleDesclique(){
        return setContagem(contagem-1);
    }
    return(
        <div>
            <button onClick={handleClick}>Emprementar</button>
            <p>Você clicou no botão {contagem} vezes.</p>

            <div>
                <button onClick={handleDesclique}>Decrementar</button>
            </div>
        </div>

    )
}

export default Contagem;