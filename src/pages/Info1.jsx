import React from 'react';
import Image from 'next/image';
import PlayImage from '../../public/PlayImg.png';
import styles from '../styles/Info1.module.css';

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
                            新たな４レーン音ゲー
                        </h3>
                        <p className={styles.description}>
                            落ちてくるノーツをタイミングに合わせて
                            <br />
                            D,F,J,K のキーを押して叩くリズムゲーム
                            <br />
                            連続で正確に叩くとコンボが続き、高いスコアが狙える
                        </p>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Info;