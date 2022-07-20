import React, { useContext } from "react";
import UserResults from "../components/users/UserResults";
import UserSearchBox from "../components/users/UserSearchBox";
import GithubContext from "../contex/github/GithubContext";
import AlertContext from "../contex/alert/AlertContext";
import { fetcRandomhUsers } from "../actions/GitHubAction";

function Home() {
  const { clearUsers, users } = useContext(GithubContext);
  const { name, state } = useContext(AlertContext);

  return (
    <>
      <h1 className="mb-4 text-6xl">Welcome {state}</h1>
      <UserSearchBox />
      <div className="flex space-x-2">
        <button
          onClick={() => fetcRandomhUsers()}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Load Random Users
        </button>

        {users.length > 0 && (
          <button
            onClick={() => clearUsers()}
            type="button"
            className="btn btn-primary btn-lg"
          >
            Clear Users
          </button>
        )}
      </div>
      <UserResults />
    </>
  );
}

export default Home;
