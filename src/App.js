import './styles/App.css';
import React from "react";
import DBConnection from "./features/DBConnection";

function App() {
  return (
    <div className="h-100">
        <DBConnection/>
    </div>
  );
}

export default App;
