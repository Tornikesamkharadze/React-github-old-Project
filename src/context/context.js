import axios from "axios";
import React, { useContext, useState } from "react";
import defaultUser from "./mockData/defaultUser";
const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();
const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(defaultUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getGithubUsers = async (user) => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(`${rootUrl}/users/${user}`);
      if (data) {
        setGithubUser(data);
      }
    } catch (error) {
      console.log(error);
      setError("No results");
    }
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{ githubUser, setGithubUser, getGithubUsers, error, loading }}
    >
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => {
  return useContext(GithubContext);
};

export { GithubContext, GithubProvider, useGithubContext };
