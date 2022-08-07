import { Component } from 'react';
import { MainContext } from './MainContext'

class MainContextProvider extends Component{
  state = {
    profile : {}
  }

  setProfile = (profile) => {
    console.log(profile);
    this.setState({
      profile : profile
    })
  }

  render(){
    const {profile} = this.state;
    return(
      <MainContext.Provider value={{
        profile : profile,
        setProfile : this.setProfile,
      }}>
        {this.props.children}
      </MainContext.Provider>
    )
  }
}

export default MainContextProvider;