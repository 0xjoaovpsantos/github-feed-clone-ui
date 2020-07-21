import React from 'react';

import { GoMarkGithub, GoTriangleDown } from 'react-icons/go';
import { BsBell } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div>
      <GoMarkGithub />
      <input />
      <ul>
        <li>Pull requests</li>
        <li>Issues</li>
        <li>Marketpalce</li>
        <li>Explore</li>
      </ul>
    </div>
    <div>
      <BsBell />
      <AiOutlinePlus />
      <GoTriangleDown />
      <img
        src="https://avatars2.githubusercontent.com/u/31141391?s=60&v=4"
        alt="Profile avatar"
      />
      <GoTriangleDown />
    </div>
  </Container>
);

export default Header;
