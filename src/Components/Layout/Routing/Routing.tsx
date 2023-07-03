import { Route, Routes } from "react-router-dom";

import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Signin from "../../Pages/Signin/Signin";
import SignUp from "../../Pages/Signup/Signup";
import SignOut from "../../Pages/signOut/signOut";
import Page404 from "../../Pages/Page404/Page404";
import Developer from "../../Pages/developers/developer";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element = {<Home />} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="developer" element={<Developer />} />
                <Route path="signin" element={<Signin />} />
                <Route path="signout" element={<SignOut />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
