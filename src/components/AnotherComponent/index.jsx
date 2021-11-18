import React from 'react';
import { container, clutchprepTitle } from '../../styles/modules/pages/home.module.scss';
import { anotherCard } from '../../styles/modules/pages/another.module.scss';

const AnotherComponent = () => (
  <div className={container}>
    <div className={anotherCard}>
      <h1 className={clutchprepTitle}>Hello World 2</h1>
    </div>
  </div>
);

export default AnotherComponent;
