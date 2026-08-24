import "./App.css";
/*import Welcome from "../fundamentos-react/componentes/Welcome";
import BomDia from "../fundamentos-react/componentes/BomDia";
import Pai from "../fundamentos-react/componentes/Pai";
import Descricao from "../fundamentos-react/componentes/Descricao";
import Cachorro from "../fundamentos-react/componentes/Cachorro";
import Counter from "../fundamentos-react/componentes/Counter";
import UserInfoForm from "../fundamentos-react/componentes/UserInfoForm";
import Button from "../fundamentos-react/componentes/Button";
import Form from "../fundamentos-react/componentes/Form";
import RenderCondicional from "../fundamentos-react/componentes/RenderCondicional";
import LoginButton from "../fundamentos-react/componentes/LoginButton";
import Warning from "../fundamentos-react/componentes/Warning";
import NumberList from "../fundamentos-react/componentes/NumberList";
import Greeting from "../fundamentos-react/componentes/Greeting";
import Contagem from "../fundamentos-react/componentes/Contagem";
import TaskList from "../fundamentos-react/componentes/TaskList";
import ExemploUseEffect from "../hooks/componentes/ExemploUseEffect";
import Timer from "../hooks/componentes/Timer";
import ComponenteFilho from "../contexts/ComponenteFilho";
import ValorDoContexto from "../contexts/ValorDoContexto";
import { MeuContextoProvider } from "../contexts/MeuContexto";
import Contador from "../hooks/componentes/Contador";
import DisplayWindowSize from "../hooks/componentes/DisplayWindowSize";
import Container from "../hooks/componentes/Container";
import PerfilDeUsuario from "../hooks/componentes/PerfilDeUsuario";*/

import Usuario from "../hooks/componentes/Usuario";
import FibCalculator from "../hooks/componentes/FibCalculator";

function App() {

  return (
    <>
      {/*Criação de componente
      <Welcome/>
      <BomDia/>
      <Pai/>
      <Descricao nome="Elisa" idade={21}/>
      <Cachorro nome="Rabito" raca="Vira-lata"/>
      <Counter/>
      <UserInfoForm />
      <Button/>
      <Form />
      <RenderCondicional user="Elisa"/>
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />
      <Warning warning={true}/>
      <NumberList numbers={[1, 3, 5, 6]}/>
      <Greeting nome="Elisa"/> 
      <Contagem />
      <TaskList/>
      <ExemploUseEffect />
      <Timer />
      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      <Contador />
      <DisplayWindowSize />
      <Container>
        <h1>Título da seção</h1>
        <p>Este é o meu subtítulo</p>
      </Container>
      <PerfilDeUsuario usuarioId={1}/>*/}
      <Usuario />
      <FibCalculator n={10} />
    </>
  )
}

export default App;
