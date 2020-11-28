import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : ''
    };
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth) => {
      // this.setState({ currentUser: user});
      // console.log(user);
      
      if (userAuth){
        const userRef = createUserProfileDocument(userAuth);
        
        (await userRef).onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          })
        });

      } else {

        this.setState({ currentUser: userAuth });
        
      }
    });
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
    this.unsubscribeFromAuth();
  }

  render (){
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
      </div>
    );
  }
}

export default App;
