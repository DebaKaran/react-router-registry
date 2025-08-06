import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <>
      <Link to="/">NPM Registry</Link>
      <SearchInput />
    </>
  );
};

export default Header;
