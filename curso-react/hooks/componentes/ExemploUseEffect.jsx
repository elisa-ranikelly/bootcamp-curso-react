import { useEffect, useState } from "react";

function ExemploUseEffect(){
    const [contador, setContador] = useState(0);

    // executa algo, baseado em algo:
    // a mudança de um valor, carregamento da página
    useEffect(() => {
        document.title = `Você clicou ${contador} vezes`;
    })

    function onClick(){
        return setContador(contador + 1);
    }

    return(
        <div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={onClick}>Clique aqui</button>
        </div>
    );
}

export default ExemploUseEffect;