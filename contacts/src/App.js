import "./App.css";
import Contacts from "./components/Contacts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Contacts/Edit";
import Error from "./components/Contacts/Error";

function App() {
  return (
    <div className="App">
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
