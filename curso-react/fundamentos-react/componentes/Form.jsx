import { useState } from "react";

function Form(){
    const [value, setValue] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        // VALIDAÇÃO DE DADOS
        // VALIDAÇÃO
        // ENVIO AO SERVIDOR PELA API
        // LOADING
        // CHAMADA DA FUNÇÃO DE MENSAGEM DE ERRO/BEM SUCEDIDO
        return alert("Formulário enviado")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Preencha o campo"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <button type="submit" onClick={handleSubmit}>Enviar</button>
        </div>
    )
}

export default Form;