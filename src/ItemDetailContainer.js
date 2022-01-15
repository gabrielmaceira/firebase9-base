import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { data } from './data/data'

import db from './firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true)
    const getProduct = new Promise((res) => {
      res(data.find(item => item.id === itemId))
    })

    getProduct.then(item => setProduct(item)).finally(() => setLoading(false))
}, []);

return <ItemDetail {...product} />;
};
