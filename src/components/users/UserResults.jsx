import React, { useEffect, useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../contex/github/GithubContext";
import { fetcRandomhUsers } from "../../actions/GitHubAction";
function UserResults() {
  const { users, loading, dispatch } = useContext(GithubContext);
  useEffect(() => {
    dispatch({ type: "SET_LOADING_TRUE" });
    dispatch({ type: "CLEAR_USERS" });
    fetcRandomhUsers().then((data) => {
      dispatch({
        type: "GET_USERS",
        payload: { users: data },
      });
      dispatch({ type: "SET_LOADING_FALSE" });
    });

    // const getUserData = async () => {
    //   const data = await fetcRandomhUsers();
    //   dispatch({
    //     type: "GET_USERS",
    //     payload: { users: data },
    //   });
    // };
    // getUserData();
    // dispatch({ type: "SET_LOADING_FALSE" });
  }, []);

  // not loading
  if (loading) {
    return <h1 className="text-3xl">Loading...</h1>;
  }

  if (!loading && users.length === 0) {
    return <h1 className="my-5 text-3xl">No record found.</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {/* {console.log(loading)} */}
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResults;
