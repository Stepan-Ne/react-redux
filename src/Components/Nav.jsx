import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


const styles = {
  selected: {
   
    fontSize: '1.4rem',
    color: '#0d6efd'
  },
};

function Nav() {

  return (
    <nav>
      <h3>LOGO</h3>
      <ul className='nav_links'>
        <NavLink to='/about' activeStyle={styles.selected}>
          <li>About</li>
        </NavLink>
        <NavLink to='/list' activeStyle={styles.selected}>
          <li>List</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
