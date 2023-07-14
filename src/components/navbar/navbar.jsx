
import styles from '@/components/navbar/navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import Logo from '@/components/logo/logo'

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
             <Logo/> 
            <input type="text" />       
            <BsCart4 size={40} />
           
        </nav>
    )
}