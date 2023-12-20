"use client";

import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "next/navigation";

const page = () => {
  // const navigate = useNavigate();
  // const [username,setUsername] = useState('')

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/signup");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const [userid, setUserid] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserid(uid);
        console.log(user);
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <section>
      <div>
        <button className="d-flex align-middle flex-row-reverse" onClick={handleLogout}>Logout</button>
      </div>
      <h1>GIFs World !@!</h1>

      
    </section>
  );
};

export default page;
