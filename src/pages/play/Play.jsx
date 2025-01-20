import Image from 'next/image';
import styles from '../../styles/PlayComp.module.css';
import Play1Img from '../../../public/Title.png';
import Play2Img from '../../../public/PlayImg.png';
import Link from 'next/link';

export default function Play() {
    return (
        <div className={styles.contents}>
            <Image src={Play1Img} style={{ width:'30vw', height:'auto'}} className={`${styles.Play1Img} ${styles.content}`}/>
            <Image src={Play2Img} style={{ width:'30vw', height:'auto'}} className={`${styles.Play2Img} ${styles.content}`}/>
            <h2 className={`${styles.Title} ${styles.content}`}>インストールまたはウェブサイト</h2>
            
        </div>
    );
}