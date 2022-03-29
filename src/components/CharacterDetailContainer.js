import React, { useState, useEffect } from 'react';
import { CharacterDetail } from './CharacterDetail';
import { useParams } from 'react-router-dom';

import db from '../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

export const CharacterDetailContainer = () => {
  const [charData, setCharData] = useState({});
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'characters', itemId)

    getDoc(docRef).then(el => {
      setCharData({id: el.id, ...el.data()})
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  }, []);

  return loading ? <h2>Cargando...</h2> : <CharacterDetail {...charData} />;
};
