import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_KEY = process.env.REACT_APP_GITHUB_KEY;
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_KEY}` },
});

// get single user
export const getUser = async (login) => {
  const response = await github.get(`${GITHUB_URL}/users/${login}`);
  return response.data;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// search for a user with a particular user name
export const getUserRepos = async (login) => {
  const response = await github.get(`${GITHUB_URL}/users/${login}/repos`);
  return response.data;
};

// fetch random user from
export const fetcRandomhUsers = async () => {
  const response = await github.get(`${GITHUB_URL}/users`);
  return response.data;
};

// search for a user with a particular user name
export const searchUsers = async (text) => {
  //   dispatch({ type: "SET_LOADING_TRUE" });
  const response = await github.get(`${GITHUB_URL}/search/users?q=${text}`);
  return response.data.items;
};
