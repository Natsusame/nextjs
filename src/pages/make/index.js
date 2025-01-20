import React from 'react';
import AppBar from '../components/AppBar.jsx';
import styles from '../../styles/Make.module.css';

export default function make() {
    return (
        <div>
            <AppBar />
            <header className={styles.header}></header>
            <h1>aaaa</h1>
        </div>
    );
}