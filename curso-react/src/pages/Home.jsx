import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Essa é a página de início</h1>
            <p>Seja bem vindo(a)!</p>

            <div>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    
                </nav>
            </div>
        </div>
    );
};

export default Home;