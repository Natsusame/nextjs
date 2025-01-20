import * as React from 'react';
import Image from 'next/image'
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "../../styles/AppBar.module.css";
import logo from "../../../public/Logo.png"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '65px' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div className={styles.header}>
          <Image src={logo} alt="Logo" width={140} height={30} className={styles.image}/>
            <Link href={{pathname: "/",}}>
            <div className={styles.button}>Home</div>
            </Link>
            <Link href="/play">
            <div className={styles.button}>Play</div>
            </Link>
            <Link href="/make">
            <div className={styles.button}>Make</div>
            </Link>
          </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}