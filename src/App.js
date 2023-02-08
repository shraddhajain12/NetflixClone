import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import Home from "./pages/home/Home";
import Movies from './pages/movies/Movies';
import TvSeries from './pages/tvseries/TvSeries';
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Components/userContext/UserContext";


import './app.css';


const App = () => {
  const { user } = useContext(UserContext);
  return (

    <div className="App">
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={ user ? <Home /> : <SignUp />  } />
        <Route path="/movies" element={ user ? <Movies /> : <SignIn />}/>
        <Route path="/tv" element={ user ? <TvSeries /> : <SignIn /> } />
      </Routes>
    </div>

  );
}

export default App;
