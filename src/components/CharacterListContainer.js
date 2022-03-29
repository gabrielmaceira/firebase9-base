import React, { useState, useEffect } from 'react';
import { CharacterList } from './CharacterList';
import { useParams } from 'react-router-dom';

import db from '../firebase/firebase';
import { collection, getDocs, query, where, orderBy} from 'firebase/firestore';

export const CharacterListContainer = ({ greeting }) => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoader(true);

      const characterFilter = categoryId ? 
        query(collection(db, 'characters'), orderBy('name'), where('category', '==', categoryId))
      :
        query(collection(db, 'characters'), orderBy('name'))
      ;

      getDocs(characterFilter).then(charactersData => {
        const newCharacterArray = charactersData.docs.map(char => {
          return {id: char.id, ...char.data()}
        })
        setCharacters(newCharacterArray)
      })
      .catch(err => console.log(err))
      .finally(() => setLoader(false))

  }, [categoryId]);

  return loader ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <CharacterList characters={characters} />
    </>
  );
};
