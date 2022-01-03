import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostsWithFetch from "./PostsWithFetch";
import PostsWithAxios from "./PostsWithAxios";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home (Default with Fetch API Example) </Link>
            </li>
            <li>
              <Link to="/axios">Click Here - Posts with Axios Example</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/fetchapi" element={<PostsWithFetch />}></Route>
          <Route path="/axios" element={<PostsWithAxios />}></Route>
          <Route path="/" element={<PostsWithFetch />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
