import React from 'react';
import Image from 'next/Image';
import backgroundImage from '../../public/mie-Summit_Park_in_Mt.Gozaisho-s.jpg';
import Logo from '../../public/RainerLogo.png';
import styles from '../styles/Title.module.css';

export default function Title() {
    return (
        <div>
            <Image
                src={backgroundImage} 
                alt="Find47" 
                layout={`fill`} objectFit={`cover`}
                fill 
                sizes="100vw"   
                quality={100} 
                style={{ objectFit: 'cover' }}    
                className={styles.background}
            />
            <Image 
                src={Logo} 
                alt="Logo" 
                className={styles.logo}
                style={{ width: '80%', height: 'auto' }}
            />
            <h3 className={styles.text}>
                The new RhythmGame for the Scratch3.0
            </h3>
        </div>
    );
}