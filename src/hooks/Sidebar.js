import { NavLink } from "react-router-dom";
import sideBarImg from '../images/slider-1.jpg'

const Sidebar = () => {
    return <div className="sidebar-area">
        <img className="side-img" src={sideBarImg} alt="" />
        <NavLink
            to="/home"
            activeStyle={{
                fontWeight: "bold",
                color: "black"
            }}
        >

            Home
        </NavLink>
        <NavLink
            to="/about"
            activeStyle={{
                fontWeight: "bold",
                color: "black"
            }}
        >
            About
        </NavLink>
        <NavLink
            to="/fees"
            activeStyle={{
                fontWeight: "bold",
                color: "black"
            }}
        >
            Fees
        </NavLink>
        <NavLink
            to="/form"
            activeStyle={{
                fontWeight: "bold",
                color: "black"
            }}
        >
            Form
        </NavLink>
        <NavLink
            to="/contact"
            activeStyle={{
                fontWeight: "bold",
                color: "black"
            }}
        >
            Contact
        </NavLink>
    </div>
}

export default Sidebar;