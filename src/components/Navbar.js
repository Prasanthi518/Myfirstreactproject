import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Navbar =  ()  => 
{
  const userData = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  const wishlistItems = useSelector((store) => store.wishlist.items);

  //console.log(cartItems);


  //console.log(userData);
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Amazing.com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" tabIndex="-1">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {userData.loggedInUser}
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" tabIndex="-1">
                Cart - ({cartItems.length})
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist" tabIndex="-1">
                Wishlist - ({wishlistItems.length})
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ordersummary" tabIndex="-1">
                OrderSummary
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
