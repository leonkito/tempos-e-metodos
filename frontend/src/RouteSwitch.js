import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Create from "./Create";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <div className="Body">
        <Header/>   
        <Routes>
            <Route path="/" element={<Create/>} />
        </Routes>
        <App/>
    </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;