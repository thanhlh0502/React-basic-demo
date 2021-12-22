import React from 'react';
import './Nav.scss';
import { NavLink, Link} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todo">Todos</NavLink>
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/users">Users</Link> */}
            </div>
        )
    }
}
export default Nav;
