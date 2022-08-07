import { DepContext } from "./DepedencyContext";

export function DepContextProvider({children, ...services}){
    return(
        <DepContext.Provider value={services}>
            {children}
        </DepContext.Provider>
    )
}