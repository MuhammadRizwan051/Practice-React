import { createContext } from 'react'

    const userData = {
        name: "Rizwan",
        age: 22,
    };

    const AppContext = createContext()
    const AppProvider = ({children}) => (
        <AppContext.Provider value={userData}>{children}</AppContext.Provider>
    )


export {AppContext, AppProvider}