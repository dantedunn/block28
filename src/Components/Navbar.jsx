import { Link } from "react-router"



function Navbar () {
    return(
<nav>
<ul>
    <li>
      <Link to="/">Home</Link>  
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