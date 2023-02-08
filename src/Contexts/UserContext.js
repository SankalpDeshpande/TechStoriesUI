import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");

    return <UserContext.Provider value={{ userName, setUserName, error, setError}}>
        {children}
    </UserContext.Provider>
}
export default UserContextProvider;