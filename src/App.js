
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from "./components/Header";
import UserProfile from './components/UserProfile';



function App() {

  const isAuth = useSelector(state => state.authReducer.isAuthenticated)
  return (
    <Fragment>
      <Header/>
       {!isAuth && <Auth/> }
       {isAuth && <UserProfile/> }
       {isAuth && <Counter /> }
    </Fragment>
    
  );
}

export default App;
