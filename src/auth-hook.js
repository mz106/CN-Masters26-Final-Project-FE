import { useState } from "react";
const useAuth = () => {
  const [userAuth, setUserAuth] = useState(false);
  return { userAuth, setUserAuth };
};
export { useAuth };