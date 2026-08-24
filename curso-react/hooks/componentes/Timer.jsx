import { useEffect, useState } from "react";

function Timer(){

    const [segundos, setSegundos] = useState(0);

    // setInterval, setTimeout
    useEffect(() => {
        const intervaloId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);

        // limpeza de estado
        return () => clearInterval(intervaloId);
    }, []) // array de dependecias vazio

    return(
        <div>
            Timer: {segundos} segundos.
        </div>
    );
}

export default Timer;