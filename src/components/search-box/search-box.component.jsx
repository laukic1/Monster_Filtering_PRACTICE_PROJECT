import './search-box.styles.css';


const SearchBox = ({ onSearchChangeHandler }) => (

  <input
        className="search-box"
        placeholder="search monsters"
        type="search"
        onChange={onSearchChangeHandler}
      />

)

export default SearchBox;