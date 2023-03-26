import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import Signup from "pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>L:o</div>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./firebase/config";
import { doc, getDoc } from "@firebase/firestore";
import { login, signOut, signUp } from "api/auth";
import { updateUserData } from "api/profile";

function App() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    (async () => {
      console.log("test");
      const docSnap = await getDoc(doc(db, "email", "jcsMut0LAVFz6yKcliHq"));
      const user = await docSnap.data();
      setUser(user);
      console.log(user);
    })();
  }, []);

  const buttonLogin = async () => {
    console.log("logging in...");
    const userCredential = await login({
      email: "dummy@email.com",
      password: "lala1234",
    });
    console.log("done");
  };

  const buttonSignup = async () => {
    console.log("Signing up...");
    const userCredential = await signUp({
      name: "oh noo",
      email: "dummy@email.com",
      password: "lala1234",
      subcomms: "Tech",
      contactNum: "???",
    });
    console.log("Done");
  };

  const buttonSignout = async () => {
    console.log("signing out...");
    await signOut();
    console.log("done");
  };

  const onUpdate = async () => {
    console.log("updating...");
    updateUserData({
      profile: {
        name: "ohlala",
      },
    });
    console.log("done");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={buttonLogin}>Log me in</button>
        <button onClick={buttonSignup}>Sign me up</button>
        <button onClick={buttonSignout}>Log me out</button>
        <button onClick={onUpdate}>Update</button>
      </header>
    </div>
  );
}

export default App;
*/
