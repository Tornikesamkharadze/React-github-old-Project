import React, { useState } from "react";
import styled from "styled-components";
import searchSvg from "../assets/icon-search.svg";
import { useGithubContext } from "../context/context";

const Search = () => {
  const [gitUser, setGitUser] = useState("");
  const { getGithubUsers, error } = useGithubContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    getGithubUsers(gitUser);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <img src={searchSvg} alt="searchicon" />
        <input
          type="text"
          value={gitUser}
          onChange={(e) => setGitUser(e.target.value)}
          placeholder="Search Github username..."
        ></input>
        {error && <p className="error">{error}</p>}
        <button
          disabled={!gitUser}
          className={`${!gitUser ? "disableColor" : null}`}
          type="button"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  form {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    position: relative;
    background: var(--clr-search);
    box-shadow: var(--clr-boxShadow);
    border-radius: 15px;
    height: 60px;
    width: 327px;
    .error {
      position: absolute;
      color: #f74646;
      font-size: 11px;
      right: 155px;
      top: 40px;
    }
    img {
      margin: 0px 11px 0px 16px;
      cursor: pointer;
    }
    input,
    input::placeholder {
      width: 169px;
      color: var(--clr-icon);
    }
    button {
      width: 84px;
      height: 46px;
      margin-left: 10px;
      background: #0079ff;
      border-radius: 10px;
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      color: #ffffff;
      cursor: pointer;
    }
    .disableColor {
      opacity: 0.5;
    }
  }
  @media screen and (min-width: 975px) {
    form {
      width: 730px;
      img {
        margin: 0px 32px 0px 27px;
        cursor: pointer;
      }
      button {
        margin-left: 380px;
      }
      .error {
        font-size: 18px;
        right: 112px;
        top: 16px;
      }
    }
  }
`;
export default Search;
