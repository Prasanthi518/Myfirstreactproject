import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearwishlist } from "../utils/wishlistslice";

const Wishlist = () => {
  const wishlistItems = useSelector((store) => store.wishlist.items);

  console.log(wishlistItems);

  const dispatch = useDispatch();

  const handleClearWishList = () => {
    dispatch(clearwishlist());
  };

  return (
    <div>
      <ul className="list-group">
        {wishlistItems.map((items) => (
          <li className="list-group-item">{items}</li>
        ))}
        {wishlistItems.length ? (
          <li
            className="list-group-item list-group-item-danger"
            onClick={handleClearWishList}
          >
            Clear all items
          </li>
        ) : (
          <li class="list-group-item list-group-item-primary">
            Your wishlist is empty.. add some items!
          </li>
        )}

      </ul>
    </div>
  );
};

export default Wishlist;
