import { UseState } from "react";
import { fullCountries } from "./data/countries.js";

 
export default function SearchBar() {
  const [searchText, setSearchText] = UseState("");
  const [counties, setCounties] = UseState(fullCountries);
 
  const onChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
 
    if (value.length === 0) {
      setCounties(fullCountries);
    } else {
      const filteredList = fullCountries.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      );
      setCounties(filteredList);
    }
  };
 
  return (
    <div>
      <input value={searchText} onChange={onChange} />
      {counties.map((country) => (
        <div>
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}