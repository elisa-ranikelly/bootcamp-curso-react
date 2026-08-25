import { Link } from "react-router-dom";

function Sobre(){
    return(
        <div>
            <h1>Essa é a página de sobre a empresa</h1>
            <p>Seja bem vindo(a)!</p>

            <div>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
            </div>
        </div>
    );
};

export default Sobre;