import { Link } from "react-router"
import Red from "../pages/Red"
import Green from "../pages/Green"
import Blue from "../pages/Blue"
import App from "../App"


function Navbar () {
    return(
<nav>
<ul>
    <li>
      {/* <Link to="/">Home</Link>   */}
    </li>
    <li>
        <Link to="/Red">Red Page</Link>
    </li>
    <li>
        <Link to="/Green">Green Page</Link>
    </li>
    <li>
        <Link to="/Blue">Blue</Link>
    </li>
</ul>
</nav>

    )
}
export default Navbar