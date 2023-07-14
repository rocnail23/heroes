import { Link, NavLink, useNavigate } from 'react-router-dom';
import {useContext} from "react"
import { AuthContext } from '../../auth/authContex';
export const Navbar = () => {

    const navigate = useNavigate()
    const {user,logout} = useContext(AuthContext)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <button 
                        className="nav-item nav-link btn"
                        onClick={() =>{ 
                            logout()
                            
                            navigate("/login",{
                            replace:true
                        })}}            
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}