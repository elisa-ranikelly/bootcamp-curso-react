import { useState } from "react";

function Input({onClickAdicionar}){

    const [nomeTarefa, setNomeTarefa] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(nomeTarefa.trim()){
            onClickAdicionar(nomeTarefa);
            setNomeTarefa("");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={nomeTarefa}
                onChange={(e) => setNomeTarefa(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Input;