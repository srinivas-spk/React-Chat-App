import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";

const Authcontext = React.createContext();

export const useAuth = () => useContext(Authcontext);

export const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setloading(false);
      if (user) history.push("/chats");
    });
  }, [user, history]);

  const value = { user };

  return (
    <Authcontext.Provider value={value}>
      {!loading && children}
    </Authcontext.Provider>
  );
};
