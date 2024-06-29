// useAutoLogout.js
import { useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAutoLogout = (timeout = 50) => {
  const logout = useContext(AuthContext);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(logout, timeout);
    };

    const handleActivity = () => {
      resetTimer();
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("click", handleActivity);

    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, [logout, timeout]);
};

export default useAutoLogout;
