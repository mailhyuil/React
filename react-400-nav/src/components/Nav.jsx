import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="main-nav">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="todo">TODO LIST</Link>
      <Link to="bucket">BUCKET LIST</Link>
    </nav>
  );
};
export default Nav;
