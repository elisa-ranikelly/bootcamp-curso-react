import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

function App() {

  /*const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

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
      }*/

  return (
    <>
      <div>
        <h2>Itens</h2>
        <Link to="/itens/1">Item</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/*Serve para identificar que é aquela página que está aberta*/}
      <NavLink className={({ isActive}) => (isActive ? "active-link" : "")} to="/contato"></NavLink>
    </>
  )
}


export default App;
