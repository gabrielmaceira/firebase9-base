import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//uso de categorias en un array para que puedan ser dinamicas en un futuro. irian en la NavBar ej: traerlas de una base de datos

export const NavBar = () => {
  const categories = [
    { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
    { id: '123asf', address: '/category/A', text: 'CATEGORIA A' },
    { id: 'sgs3q3', address: '/category/B', text: 'CATEGORIA B' },
    { id: 'gkl98s', address: '/category/C', text: 'CATEGORIA C' },
  ];

  return (
    <section style={{ background: 'lightgray' }}>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink to={cat.address} exact activeClassName="activeClass">
              {cat.text}
            </NavLink>
            {/* POR SI USAN BOOTSTRAP */}
            {/* <Nav.Link as={Link} to={cat.address}></Nav.Link> */}
          </div>
        );
      })}
    </section>
  );
};
