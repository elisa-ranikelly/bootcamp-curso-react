import { useEffect, useState } from "react";
import TaskList from "../to-do-list/componentes/TaskList";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(task){
        
        //id, texto, isCompleta
        setTasks([...tasks, 
            {id: Date.now(), 
            text: task, 
            isCompleta: false}]);

        // Localstorage
        //localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    function removeTask(taskId){
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    function marcarComoConcluida(taskId){
      setTasks(tasks.map((task) => task.id === taskId ? {
        ...task, isCompleta: true } : task))
      }
    }

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
      <PerfilDeUsuario usuarioId={1}/>
      <Usuario />
      <FibCalculator n={10} />*/}


      <h1>Lista de Tarefas</h1>
      <Input onClickAdicionar={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </>
  )


export default App;
