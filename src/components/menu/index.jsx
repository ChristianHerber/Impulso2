'use client'

import Logo from '../logo'
import SubMenu from '../submenu'
import { FaChevronDown, FaChevronUp, FaGlobe, FaBars, FaXmark } from "react-icons/fa6"
import styles from './style.module.css'
import Button from '../button'
import { useState } from 'react'

const Menu = () => {

    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState(false)

    function toggleMenu() {
        setOpen(!open)
    }

    function toggleSubMenu() {
        setSubMenu(!subMenu)
    }

    const windowWidth = window.innerWidth

    function checkWindowWidth() {
        if(windowWidth <= 1200) {
            if(open){
                return <SubMenu isVisible={subMenu ? styles.submenu__show : ''} />
            } else {
                return null
            }
        }

        return <SubMenu isVisible={subMenu ? styles.submenu__show : ''} />
    }

    return (
        <>
        <div className={styles.navbar}>
            <Logo />

            <ul className={`${styles.navbar__menu} ${open ? styles.navbar__open : styles.navbar__close}`}>
                <li className={styles.navbar__item}>
                    Para Empresas 
                    <FaChevronDown className={styles.navbar__arrow} size={14}/>
                </li>
                <li className={styles.navbar__item}>
                    Para Profissionais 
                    <FaChevronDown className={styles.navbar__arrow} size={14}/>
                </li>
                <li className={styles.navbar__item}>
                    PulseCheck 
                    <FaChevronDown className={styles.navbar__arrow} size={14}/>
                </li>
                <li className={styles.navbar__item}>
                    Casos de Sucesso
                </li>
                <li className={`${styles.navbar__item} ${subMenu ? styles.item__active : ''}`} onClick={toggleSubMenu}>
                    A Impulso 
                    <FaChevronDown className={`${styles.navbar__arrow} ${subMenu ? styles.icon__rotate : ''}`} size={14}/>
                </li>
            </ul>

            <div className={styles.navbar__contact}>
                <span className={styles.navbar__language}>
                    <FaGlobe className={styles.navbar__icon}/>
                    PT
                    <FaChevronDown className={styles.navbar__arrow}/>
                </span>

                <Button caption="contrate a Impulso" />

                {open ? <FaXmark className={styles.navbar__toggle} onClick={toggleMenu} size={22}/> : <FaBars className={styles.navbar__toggle} onClick={toggleMenu} size={22}/>}
            </div>

        </div>

        { checkWindowWidth() }
        </>
    )
}

export default Menu