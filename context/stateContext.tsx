"use client"
import { useState, useContext, createContext, ReactNode, SetStateAction } from "react"

type Props = {
    children: ReactNode
}

type ContextType = {
    activeNav: string | null,
    setActiveNav: React.Dispatch<SetStateAction<string | null>>
}

const GlobalContextDefaultValues = {
    activeNav: null,
    setActiveNav: () => {}
}

const  GlobalContextProvider = createContext<ContextType>(GlobalContextDefaultValues)

export const GlobalContext = ({children}: Props) => {

    const [activeNav, setActiveNav] = useState<string | null>(null)

    const values: ContextType = {
        activeNav, setActiveNav
    }

    return (
        <GlobalContextProvider.Provider value={values}>
            {children}
        </GlobalContextProvider.Provider>
    )

}

export default GlobalContextProvider