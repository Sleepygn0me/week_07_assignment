//TODO: set up routes
//- all componnets are rendered here
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

export default function App() {
  //js goes here

  return (
    <BrowserRouter>
      <Routes>
        {/* Home is the root route */}
        <Route path="/" element={<Home />}>
          {/* Form is nested inside Home */}
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
