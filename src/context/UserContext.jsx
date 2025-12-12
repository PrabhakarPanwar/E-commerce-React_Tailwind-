import { createContext } from "react";
import { assets, header, products } from "../assets/frontend_assets/assets.js";

export const UserContext = createContext()

function UserProvider({ children }) {

    const obj = {
        assets, products, header
    }
    return (
        <UserContext.Provider value={obj}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider