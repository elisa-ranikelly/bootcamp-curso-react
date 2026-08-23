import { useState } from "react";

function UserInfoForm(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log(nome, email);

        // ACESSAR A API VIA FECTH OU AXIOS
        
        setNome("");
        setEmail("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Digite seu nome..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default UserInfoForm;