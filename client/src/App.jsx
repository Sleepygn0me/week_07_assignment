//TODO: set up routes
//- all componnets are rendered here
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

export default function App() {
  //js goes here

  return (
    <>
      <div className="form-container">
        <Form />
      </div>
    </>
  );
}
