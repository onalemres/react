import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

function Item({ item }) {
  return (
    <div className="quoteItem">
      <Link to={`${item.quote_id}`}>
        <q>{item.quote}</q>
      </Link>
      <strong>{item.author}</strong>
    </div>
  );
}

export default Item;
