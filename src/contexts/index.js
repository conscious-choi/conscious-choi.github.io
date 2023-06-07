import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const [showMain, setShowMain] = useState(window.history.length <= 2 && window.location.pathname == "/" ? false : true)
    const [goMain, setGoMain] = useState(window.history.length <= 2 && window.location.pathname == "/" ? false : true);
    return (
        <GlobalContext.Provider
            value={{
                theme: theme, 
                setTheme: setTheme,
                showMain: showMain,
                setShowMain: setShowMain,
                goMain: goMain,
                setGoMain: setGoMain
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const ThemeEvent = () => {
    const {theme, setTheme} = useContext(GlobalContext);
    return {theme, setTheme};
}

export const MainEvent = () => {
    const {goMain, setGoMain, showMain, setShowMain} = useContext(GlobalContext);
    return {goMain, setGoMain, showMain, setShowMain};
}

export default GlobalProvider;