import React, { createContext, useState } from 'react'
import { tempEmailList } from '../service/data';
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [emailList, setEmailList] = useState(tempEmailList);
    const [sentEmailList, setSentEmailList] = useState([]);

    const contextValue = {
        userInfo,
        setUserInfo,
        emailList,
        setEmailList,
        sentEmailList, 
        setSentEmailList
    }
    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>;
}


export default AppContextProvider;