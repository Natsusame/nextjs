import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import Logo from '../../../public/LogoPro.png';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Image 
                src={Logo} 
                alt="Logo" 
                style={{ width: '20vw', height: 'auto' }}
            />
        </footer>
    );
}