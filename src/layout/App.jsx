import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <nav style={{border: "1px solid black",padding: "5px"}}>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/extrato">Extrato</Link>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default App;