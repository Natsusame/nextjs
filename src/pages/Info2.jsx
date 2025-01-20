import React from 'react';
import Image from 'next/image';
import Img from '../../public/Title.png';
import styles from '../styles/Info1.module.css';

const Info = () => {
    return (
        <div className={styles.container}>
            <>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <h3 className={styles.title}>
                            こだわり尽くしたUI
                        </h3>
                        <p className={styles.description}>
                            透明感あふれるデザイン
                            <br />
                            引っ掛かりのないスムーズな動き
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={Img} 
                            alt="Find47" 
                            layout="fill" 
                            objectFit="cover"
                            quality={100} 
                            className={styles.background}
                        />
                    </div>
                </div>
            </>
        </div>
    );
}

export default Info;