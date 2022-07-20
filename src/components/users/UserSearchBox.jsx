import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import GithubContext from "../../contex/github/GithubContext";
import { searchUsers } from "../../actions/GitHubAction";

function UserSearchBox() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(GithubContext);
  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      Swal.fire("Error", "Search Input can not be empty", "error");
    }

    if (inputText !== "") {
      dispatch({ type: "SET_LOADING_TRUE" });
      searchUsers(inputText)
        .then((data) => {
          dispatch({
            type: "GET_USERS",
            payload: { users: data },
          });
        })
        .then(() => dispatch({ type: "SET_LOADING_FALSE" }));
    }
  };
  return (
    <div className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 text-black border-2 input input-lg"
                placeholder="Search for a user"
                value={inputText}
                onChange={handleInput}
              />
              {/* {inputText} */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserSearchBox;
