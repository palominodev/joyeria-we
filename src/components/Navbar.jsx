import { useRef, useState, useEffect } from 'react';
import '../styles/Navbar.css';
export const Navbar = ({links}) => {
  const [showMenu, setShowMenu] = useState(false)
  const onShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>

      <ul className='nav_ul'>
          {
              links.map(({text,url},i) => <li key={i}> <a href={url}>{text}</a> </li> )
          }
      </ul>
      <svg
        onClick={onShowMenu}
        viewBox="0 0 700 1000"
        fill="currentColor"
        height="3rem"
        width="3rem"
      >
          <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
      </svg>
      {
        showMenu && 
        <div className='menu'>
          <ul>
          {
              links.map(({text,url},i) => <li key={i}> <a onClick={onShowMenu} href={url}>{text}</a> </li> )
          }
          </ul>
        </div>
      }
    </>
  )
}