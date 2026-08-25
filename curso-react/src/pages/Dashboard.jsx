import { Link, Outlet } from "react-router-dom"

function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="perfil">Perfil</Link>
            </nav>

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;