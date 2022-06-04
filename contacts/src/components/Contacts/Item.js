import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { Link } from "react-router-dom";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(id));
    }
  };
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.number}</span>
      <div className="edit">
        <span>
          <Link to={`/edit/${item.id}`}>Edit</Link>
        </span>
        <span className="deleteBtn" onClick={() => handleClick(item.id)}>
          x
        </span>
      </div>
    </li>
  );
}

export default Item;
