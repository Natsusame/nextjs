import ButtonAppBar from '../components/AppBar.jsx';
import styles from '../../styles/Play.module.css';
import Footer from '../components/Footer.jsx';
import Play from './Play.jsx';

export default function play() {
    return (
        <div>
            <ButtonAppBar />
            <header className={styles.header}></header>
            <main>
                <Play />
            </main>
            <Footer />
        </div>
    );
}