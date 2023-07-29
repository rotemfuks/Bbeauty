import React, { createContext, useState } from "react";

type FavoriteContextType = {
  favoriteCardIds: number[];
  addToFavorite: (cardId: number) => void;
  removeFromFavorite: (cardId: number) => void;
};

const intialValue: FavoriteContextType = {
  favoriteCardIds: [],
  addToFavorite: () => {},
  removeFromFavorite: () => {},
};

const FavoriteContext = createContext<FavoriteContextType>(intialValue);

const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [favoriteCardIds, setFavoriteCardIds] = useState<number[]>([]);

  const addToFavorite = (cardId: number) => {
    setFavoriteCardIds((prevState) => [...prevState, cardId]);
  };

  const removeFromFavorite = (cardId: number) => {
    setFavoriteCardIds((prevState) => {
      const newState = [...prevState];
      newState.splice(prevState.indexOf(cardId), 1);
      return newState;
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteCardIds, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
