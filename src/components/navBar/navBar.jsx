import { NavLink } from "react-router-dom";                                 

import "./navBar.scss"                                                      

import NavBarList from "../../datas/navList.json";                       

const NavBar = () => {                                                 
  return (                                                                  
    <nav>
        {NavBarList.map((link => {             
          return (                                                          
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={`/${link.page}`}>{link.name}
            </NavLink>           
          );
        }))}
    </nav>
  );
};

export default NavBar;                                                      
