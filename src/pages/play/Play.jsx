import Image from 'next/image';
import styles from '../../styles/PlayComp.module.css';
import Play1Img from '../../../public/PlayImg.png';
import Play2Img from '../../../public/Title.png';

export default function Play() {
    return (
        <div className={styles.contents}>
            <>
            <Image src={Play1Img} style={{ width:'30vw', height:'auto'}} className={styles.Play1Img}/>
            <Image src={Play2Img} style={{ width:'30vw', height:'auto'}} className={styles.Play2Img}/>
            </>
        </div>
    );
}