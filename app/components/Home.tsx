import React from 'react';
// import routes from '../constants/routes.json';
import styles from './Home.css';
// import { Sidebar } from './Sidebar';
import Logo from '../../resources/logo.png';

export default function Home() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <img alt="logo" src={Logo} height={60} />
      </div>
      <div className={styles.body}>
        <div className={styles.content}>Content</div>
      </div>
    </div>
  );
}
