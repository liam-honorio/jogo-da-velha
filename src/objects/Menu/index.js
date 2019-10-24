import React from 'react';
import './styles.css';

const Menu = ({ onClick }) => (<a href="#to-do" 
                      className="menu"
                      onClick={onClick}
                    >
                      <span className="center">Menu</span>
                    </a>);

export default Menu;