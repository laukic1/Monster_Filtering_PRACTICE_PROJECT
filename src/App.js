import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [newFilteredMonsters, setNewFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resolve) => resolve.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchString(searchField);
  };

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchString)
    );
    setNewFilteredMonsters(filteredMonsters);
  }, [monsters, searchString]);

  return (
    <div className="App">
      <h1 className="title">Monsters Rolodex</h1>
      
<SearchBox onSearchChangeHandler={onSearchChange} />
      <CardList monsters={newFilteredMonsters} />
    </div>
  );
};

export default App;
