import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { MainContext } from './context/MainContext';
import LoginView from './features/login/LoginView';
import ProfileView from './features/profile/ProfileView';
import MainContextProvider from './context/MainContextProvider';
import { DepContextProvider } from './context/DepContextProvider';
import { AuthenticationService } from './services/AuthenticationService';
import { CombinedContextProvider } from './context/CombinedContextProvider';

class App extends Component{
  render(){
    return(
      <DepContextProvider services={{
        authenticationService : AuthenticationService(),
      }}>
        <MainContextProvider>
          <CombinedContextProvider>
            <LoginView/>
            <ProfileView />
          </CombinedContextProvider>
        </MainContextProvider>
      </DepContextProvider>
    )
  }
}

export default App;
