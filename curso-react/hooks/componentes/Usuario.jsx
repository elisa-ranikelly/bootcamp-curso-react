import { useEffect } from "react";

function Usuario(){

    const userInfo = {
        nome: "Elisa",
        email: "pessoa@gmail.com"
    };
    
    useEffect(() => {
        document.title = `${userInfo.nome} - ${userInfo.email}`
    }, [userInfo])
    
    return(
        <div>
            <h2>Informações do Usuário</h2>
            <p>Nome: {userInfo.nome}</p>
            <p>E-mail: {userInfo.email}</p>
        </div>
    );
}

export default Usuario;