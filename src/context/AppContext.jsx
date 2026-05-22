import { createContext, useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export const AppContext = createContext();

function AppContextProvider(props) {
  const url = import.meta.env.VITE_BACKEND_URL;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); 

  const checkVerifiedUser = async () => {
    try {
      const { data } = await axios.get(`${url}/api/user/getuser`);

      if (data.success) {
        setIsLoggedIn(true);
        setUserData(data.profile);
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkVerifiedUser();
  }, []);

  const value = {
    url,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    loading,
    checkVerifiedUser,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;