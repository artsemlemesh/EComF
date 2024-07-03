import "./nav.css";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

const SearchBox = () => {
  const { searchParam, handleChange } = useContext(GlobalContext);

  return (
    <div className="search_box">
      <input
        type="text"
        value={searchParam}
        placeholder="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
