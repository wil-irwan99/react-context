import { CombinedContext } from "./CombinedContext"
import { DepContext } from "./DepedencyContext"
import { MainContext } from "./MainContext"

export const CombinedContextProvider = (props) =>{
    return (
        <DepContext.Consumer>
                {deps => (
                    <MainContext.Consumer>
                    {ctx => {
                        return(
                            <CombinedContext.Provider value={{ctx,deps}}>
                                {props.children}
                            </CombinedContext.Provider>
                        )
                    }}
                </MainContext.Consumer>
                )}
            </DepContext.Consumer>
    )
}