import { Link } from "react-router-dom";

function App() {
    return (
        <nav>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default App;