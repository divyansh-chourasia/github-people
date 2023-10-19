import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { GithubContext } from "../context/context";
const Search = () => {
  const [user, setUser] = React.useState("");
  const { requests, error, searchGithubUser, isLoading } =
    React.useContext(GithubContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };
  return (
    <section className="search-container">
      <div className="search-content">
        <form onSubmit={handleSubmit}>
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search Github User"
              value={user}
              className="search-input"
              onChange={(e) => setUser(e.target.value)}
            />

            {requests > 0 && !isLoading && (
              <button type="submit" className="search-input-btn">
                <AiOutlineSearch />
              </button>
            )}
          </div>
        </form>
        <AiOutlineBell />
        <FaUserCircle />
      </div>
      <h3>requests : {requests} / 60</h3>

      {error.show && (
        <ErrorWrapper>
          <p>{error.msg}</p>
        </ErrorWrapper>
      )}
    </section>
  );
};

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
