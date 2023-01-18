import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Theme = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Wrapper>
      <nav>
        <h1>Devfinder</h1>
        <div>
          <p>{theme === "light-theme" ? "DARK" : "LIGHT"}</p>
          <button onClick={() => toggleTheme()}>
            {theme === "light-theme" ? (
              <BsSunFill className="faicon" />
            ) : (
              <BsFillMoonFill className="faicon" />
            )}
          </button>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  margin: 31px 0px 35px 0px;
  width: 327px;
  .faicon {
    height: 20px;
    width: 20px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    h1 {
      font-weight: 700;
      font-size: 26px;
      line-height: 39px;
      color: var(--clr-logo);
    }
    button {
      cursor: pointer;
      color: var(--clr-icon);
      height: 20px;
      width: 20px;
    }
    p {
      font-weight: 700;
      font-size: 13px;
      line-height: 19px;
      text-align: right;
      letter-spacing: 2.5px;
      color: var(--clr-icon);
    }
  }
  @media screen and (min-width: 975px) {
    width: 730px;
  }
`;
export default Theme;
