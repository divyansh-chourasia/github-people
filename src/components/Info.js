import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoRepo } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { VscGist } from "react-icons/vsc";
const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <VscGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem 3rem;
  // margin : 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  .item {
    border: 2px solid grey;
    border-radius: 10px;

    padding: 1rem;
    // background: var(--clr-white);
    background-color: white;

    display: grid;
    grid-template-columns: 1fr;
    // column-gap: 1rem;
    align-items: center;

    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: #7fffd4;
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
