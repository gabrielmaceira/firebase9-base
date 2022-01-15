import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { data } from './data/data';

import db from './firebase/firebase';
import { collection, getDocs, query, where, getDoc } from 'firebase/firestore';

export const ItemListContainer = ({ greeting }) => {
  /* useHistory */

  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoader(true);

    const getProducts = new Promise(res => {
      const myItems = categoryId ? data.filter(item => item.category === categoryId) : data;
      setTimeout(() => {
        res(myItems)
      }, 1500)
    })

    getProducts.then(products => setItems(products))
      .finally(() => {
        setLoader(false);
      });
  }, [categoryId]);

  return loader ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};
