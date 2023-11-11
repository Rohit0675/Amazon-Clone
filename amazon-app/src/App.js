// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Home from './Home';
// import Checkout from './Checkout';
// // import login from './login'

// function App() {
//   return (
//     <Routes>
//     <Router>
//     <div className="App">

//           <Route path='/checkout'>
//             <Header/>
//             <Checkout/>
//           </Route>
//           <Route path='/login'>
//           {/* <login/> */}
//           </Route>
//           <Route path='/'>
//             <Header/>
//             <Home/>
//           </Route>

//     </div>
//     </Router>
//     </Routes>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
// import Home from "./Home";
// import Checkout from "./Checkout";
// import login from "./login";
import AllRoutes from "./AllRoutes";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  console.log(user);

  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/checkout">
    //         <Checkout />
    //         <Header />
    //       </Route>
    //       <Route path="/login">
    //         <login />
    //       </Route>
    //       <Route path="/">
    //         <Header />
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <div className="App">
      <Router>
        
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
