import { useContext } from "react";
import { MeuContexto } from "./MeuContexto";

function ComponenteFilho(){
    const {mensagem, setMensagem} = useContext(MeuContexto);

    return(
        <div>
            <button onClick={() => setMensagem("Nova mensagem")}>
                Alterar mensagem
            </button>
        </div>
    )
}

export default ComponenteFilho;