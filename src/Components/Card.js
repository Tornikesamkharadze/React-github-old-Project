import React from "react";
import styled from "styled-components";
import { useGithubContext } from "../context/context";
import locationSvg from "../assets/icon-location.svg";
import twitterSvg from "../assets/icon-twitter.svg";
import websiteSvg from "../assets/icon-website.svg";
import companySvg from "../assets/icon-company.svg";

import moment from "moment";
const Card = () => {
  const { githubUser } = useGithubContext();

  const {
    avatar_url,
    followers,
    following,
    location,
    twitter_username,
    created_at,
    login,
    name,
    bio,
    public_repos,
    company,
    blog,
  } = githubUser;

  return (
    <HeaderWrapper>
      <header>
        <div className="user_info">
          <img src={avatar_url} alt={login}></img>
          <div className="info">
            <h1>{name}</h1>
            <h4 style={{ color: "#0079FF" }}>@{login}</h4>
            <p>Joined {moment(created_at).format("D MMM YYYY")}</p>
          </div>
        </div>
        <p className="bio">{`${bio || "This profile has no bio"}`}</p>
        <div className="followers-container">
          <p>
            Repos
            <br /> <span className="span">{public_repos}</span>
          </p>
          <p>
            Followers <br />
            <span className="span">{followers}</span>
          </p>
          <p>
            Following
            <br />
            <span className="span">{following}</span>
          </p>
        </div>
        <div className="user-workplace">
          <p className={`${location ? "istrue" : "isfalse"}`}>
            <img src={locationSvg} alt="locationSvg"></img>
            {location || "Not Available"}
          </p>
          <p className={`${blog ? "istrue" : "isfalse"}`}>
            <img src={websiteSvg} alt="websiteSvg"></img>
            {blog ? (
              <a className="blog" href={`https://${blog}`} target="_blank">
                {blog}
              </a>
            ) : (
              "Not Available"
            )}
          </p>
          <p className={`${twitter_username ? "istrue" : "isfalse"}`}>
            <img src={twitterSvg} alt="twitterSvg"></img>
            {twitter_username || "Not Available"}
          </p>
          <p className={`${company ? "istrue" : "isfalse"}`}>
            <img src={companySvg} alt="companySvg"></img>
            {company || "Not Available"}
          </p>
        </div>
      </header>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.article`
  @media screen and (min-width: 375px) {
    .istrue {
      color: var(--clr-icon);
    }
    .isfalse {
      color: var(--clr-isfalse);
    }
    header {
      p {
        color: var(--clr-date);
      }
      .span {
        color: var(--clr-logo);
        font-size: 16px;
      }
    }
    height: 517px;
    width: 327px;
    background-color: var(--clr-search);
    box-shadow: var(--clr-boxShadow);
    border-radius: 15px;
    header {
      margin-left: 24px;
    }
    .user_info {
      display: flex;
      padding: 32px 0px 33px 0px;
      .info {
        margin-left: 19.5px;
        p {
          color: var(--clr-date);
        }
      }
      img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
      }
      h1 {
        font-size: 16px;
        color: var(--clr-icon);
      }
      h4 {
        font-size: 13px;
        margin: 6px 0px 6px 0px;
      }
      p {
        font-size: 13px;
        font-weight: 400;
        color: var(--clr-par);
      }
    }
    .followers-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      border-radius: 10px;
      margin-top: 23px;
      height: 85px;
      width: 279px;
      background-color: var(--clr-followersbg);
      box-shadow: var(--clr-boxShadow);
    }
    p {
      font-size: 11px;
    }
    .user-workplace {
      .blog {
        color: var(--clr-icon);
      }
      p {
        display: flex;
        align-items: center;
        margin: 27px 0px 17px 0px;
        gap: 19px;
        font-size: 13px;
      }
    }
  }
  @media screen and (min-width: 975px) {
    height: 517px;
    width: 730px;
    .bio {
      text-align: center;
    }
    .followers-container {
      height: 85px;
      width: 480px;
      margin: 32px auto;
    }
    .user-workplace {
      margin-left: 116px;
    }
    .user_info {
      margin-left: 106px;
    }
  }
`;

export default Card;
