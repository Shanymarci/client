import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Search from "../../Pages/Search/Search";
import Signin from "../../Pages/Signin/Signin";
import SignUp from "../../Pages/Signup/Signup";
import Page404 from "../../Pages/Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="signin" element={<Signin />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
