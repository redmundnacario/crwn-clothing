import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import './App.css';

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  // console.log(userAuth);

  componentDidMount() {

    const { setCurrentUser } =  this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth) => {
      
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()
          });
        });

      } else {

        setCurrentUser(userAuth);
        
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/checkout" component={CheckoutPage} />
          <Route 
            exact 
            path="/signin" 
            render={() => 
              this.props.currentUser ? 
                (<Redirect to='/' />) : 
                  <SignInAndSignUp /> 
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
