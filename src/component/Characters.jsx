import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharaters";
const initialState = {
  favorites: [],
};

const API = 'https://rickandmortyapi.com/api/character/'
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  //const handleSearch = () =>{
  //setSearch(searchInput.current.value)
  //}
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );
  return (
    <div className="container">
      <div className="row">
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
        <Search
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        {filteredUsers.map((character) => (
          <div className="col">
            <div className="item" key={character.id}>
              <img className="character__img" src={character.image} alt="" />

              <h2 className="character__name">{character.name}</h2>
              <button type="button" className="btn btn-primary"onClick={() => handleClick(character)}>
              ???
              </button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
