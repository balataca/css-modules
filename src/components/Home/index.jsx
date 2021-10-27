import React from 'react';
import { container, card, title } from './index.module.scss';

const Home = () => (
  <div className={container}>
    <div className={card}>
      <h1 className={title}>Hello World</h1>
    </div>
  </div>
);

export default Home;
