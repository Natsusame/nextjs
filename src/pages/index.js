import styles from '../styles/Home.module.css';
import ButtonAppBar from './components/AppBar.jsx';
import Footer from './components/Footer.jsx';
import Title from './Title.jsx';
import Info1 from './Info1.jsx';
import Info2 from './Info2.jsx';
import Info3 from './Info3.jsx';

export default function Home() {
    return (
        <div>
            <ButtonAppBar />
            <Title />
            <main className={styles.content}>
                <Info1 />
                <Info2 />
                <Info3 />
            </main>
            <Footer />
        </div>
    );
}