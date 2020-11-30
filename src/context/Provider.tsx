import React, { useReducer } from "react"
import { initState, reducer } from "../reducers/reducer"

const defautlValueType: ContextType = {
    state: initState,
    dispatch: () => null
}

type Props = {
    children : React.ReactChild
}

export interface ContextType {
    state: { revenu: number, imgProfil: string },
    dispatch: any
}

export const Context = React.createContext<ContextType>(defautlValueType) 

const Provider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <Context.Provider value={{state, dispatch}}>
            { children }
        </Context.Provider>
    )
}

export default Provider
