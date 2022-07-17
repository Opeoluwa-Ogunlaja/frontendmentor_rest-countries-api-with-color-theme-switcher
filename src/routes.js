import { useEffect } from "react";
import { Routes as Switch, Route, useNavigate } from "react-router-dom"
import Country from "./pages/Country/country";
import Home from "./pages/Home/home";

const Routes = () => {
    const Reload = () => {
        const navigate = useNavigate();
        useEffect(() => {
            navigate('/');
        }, [navigate])
        return null;
    }

    return (
        <Switch>
            <Route path="/country/:countryname" exact element={<Country />}/>
            <Route path="/" exact element={<Home />}/>
            <Route path="*" element={<Reload />}/>
        </Switch>
    )
}

export default Routes;