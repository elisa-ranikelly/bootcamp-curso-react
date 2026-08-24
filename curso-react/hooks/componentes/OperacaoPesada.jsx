import { useMemo } from "react";

function OperacaoPesada({numero}){
    
    const resultado = useMemo(() => {
        return operacaoPesada(numero);
    }, [numero]);

    const operacaoPesada = (num) => {
        return num * 1000;
    }

    return(
        <div>
            Resultado: {resultado}
        </div>
    );
}

export default OperacaoPesada;