import { useContext } from "react";
import { MeuContexto } from "./MeuContexto";

function ValorDoContexto(){
    const {mensagem} = useContext(MeuContexto);

    return(
        <div>
            <p>O valor do contexto é {mensagem}</p>
        </div>
    )
}

export default ValorDoContexto;