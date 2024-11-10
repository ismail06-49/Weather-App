import { useContext } from "react";
import City from "./header-components/City";
import Search from "./header-components/Search";
import Settings from "./header-components/Settings";
import { ThemeContext } from "../context/ThemeContetxt";

export default function Header() {

    const {dark} = useContext(ThemeContext)

    return (
        <div className={`header p-3 ${dark ? 'dark-header' : 'light-header'}`}>
            <div className="container d-flex flex-row justify-content-between align-items-center">
                <div className="row">
                    <City />
                    <Search />
                    <Settings />
                </div>
            </div>
        </div>
    )
}