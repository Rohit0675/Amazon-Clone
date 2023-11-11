import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function Header() {
  const [{basket, user}] = useStateValue();
  console.log(basket);
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      {/* search box */}
      <div className="header_search">
        <input type={Text} className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/*  3 links on the right */}
      <div className="headernav">
        <Link to={!user && "/login"} className="headerlink">
          <div inClick={login} className="headeroption">
            <span className="lineone">Hello</span>
            <span className="linetwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/" className="headerlink">
          <div className="headeroption">
            <span className="lineone">Returns</span>
            <span className="linetwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="headerlink">
          <div className="headeroption">
            <span className="lineone">Your</span>
            <span className="linetwo">Prime</span>
          </div>
        </Link>
        {/* basket */}
        <Link to="/checkout" className="headerlink">
          <div className="headerbasket">
            <ShoppingCartIcon />
            <span className="linetwo basketcount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
