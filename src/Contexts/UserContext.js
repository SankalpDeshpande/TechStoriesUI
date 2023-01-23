import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("");

    return <UserContext.Provider value={{ userName, setUserName }}>
        {children}
    </UserContext.Provider>
}
export default UserContextProvider;