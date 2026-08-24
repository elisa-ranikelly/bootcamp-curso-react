import { useMemo } from "react";

function FibCalculator({n}){

    function calculaFib(num){
        if(num <= 1){
            return num;
        }

        return calculaFib(num - 1) + calculaFib(num - 2);
    };

    const resultado = useMemo(() => calculaFib(n), [n]);

    return(
        <div>
            <p>Fibonacci de {n} é {resultado}</p>
        </div>
    );
};

export default FibCalculator;