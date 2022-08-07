import { Component } from "react";
import { CombinedContext } from "../../context/CombinedContext";
import { DepContext } from "../../context/DepedencyContext";
import { MainContext } from "../../context/MainContext";

class LoginView extends Component{
    // static contextType = MainContext;
    static contextType = CombinedContext;

    onLogin = async (mainCtx, depCtx) => {
        const {ctx, deps} = this.context;
        try {
            const response = await deps.services.authenticationService.authenticate('Rofik');
            if (response){
                ctx.setProfile({name: response})
            }
        } catch (error) {
            
        }
    }

    render(){
        // const {setProfile} = this.context;
        return(
            <div>
                <button onClick={this.onLogin}>Login</button>
            </div>
        )
    }
}

// alternatif tanpa menggunakan static contextType
// LoginView.contextType = MainContext;

export default LoginView;