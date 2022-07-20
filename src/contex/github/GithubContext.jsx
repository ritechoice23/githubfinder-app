import { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

// this is just the function that is setting the provider
export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // clear the current user state
  const clearUsers = () => {
    if (state.users.length === 0) {
      Swal.fire("No users to be cleared", "", "error");
    } else {
      dispatch({
        type: "CLEAR_USERS",
      });
      Swal.fire("Users Cleared", "", "success");
    }
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
