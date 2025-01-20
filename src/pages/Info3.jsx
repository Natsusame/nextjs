import React from 'react';
import Image from 'next/image';
import PlayImage from '../../public/PlayImg.png';
import styles from '../styles/Info3.module.css';

const Info = () => {
    return (
        <div className={styles.container}>
            <>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={PlayImage} 
                            alt="Find47" 
                            layout="fill" 
                            objectFit="cover"
                            quality={100} 
                            className={styles.background}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <h3 className={styles.title}>
                            Scratch初 オンライン対戦機能搭載
                        </h3>
                        <p className={styles.description}>
                            Scratchアカウントと連携し、リアルタイムで対戦可能
                            <br />
                            ランキング機能で世界中の人と力比べ
                        </p>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Info;