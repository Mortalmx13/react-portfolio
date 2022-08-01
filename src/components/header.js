import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

const styles ={
  header: {
background: 'fff0ff'
  },
  h1:{
fontSize: '3.0rem'
  }
}
function Header() {

  return (
    <header style={styles.header} className="header">
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
