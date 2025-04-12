import React from 'react'
import { useDarkMode } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa6';

function DarkModeToggler() {
    const {darkMode, setDarkMode}= useDarkMode();
  return (
    <button onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer '>
      {darkMode ? <FaSun size={25}/>: <FaMoon size={25}/>}
    </button>
  )
}

export default DarkModeToggler
