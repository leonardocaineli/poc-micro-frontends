import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <header className="app">
      <h1>{props.name}</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li>
              <Link exact to="/counter">
                Counter
              </Link>
            </li>
            <li>
              <Link exact to="/tasks">
                Tasks
              </Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </header>
  );
}
