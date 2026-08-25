import { Link } from "react-router-dom";

function Contato(){
    return(
        <div>
            <h1>Essa é a página de contato</h1>
            <p>Seja bem vindo(a)!</p>

            <div>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
            </div>
        </div>
    );
};

export default Contato;