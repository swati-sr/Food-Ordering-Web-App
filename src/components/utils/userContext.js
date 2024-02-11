import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Anonymous",
    email: "anonmous@gmai.com",
  },
});

userContext.displayName = "userContext";
export default userContext;
