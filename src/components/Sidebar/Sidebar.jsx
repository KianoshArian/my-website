import { useMediaQuery } from "@mui/material";
import './styles.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import avatar from '../../assets/avatar.jpg'

export const Sidebar = ({children}) => {
  const isMobile = useMediaQuery('(max-width:1400px)');
  const [open, setOpen] = useState(true)

  const items = [
    {name: 'Home', path: '/my-website/'},
    {name: 'Research', path: '/my-website/#/Research'},
    {name: 'Honors', path: '/my-website/#/Honors'},
    {name: 'Book Reviews', path: '/my-website/#/Book-Reviews'},
  ]
  const socials = [
    {name: 'email', path: "mailto:kianosharian3@gmail.com", logo: <EmailIcon className="icon" />},
    {name: 'Linkedin', path: 'https://www.linkedin.com/in/kianosharian/', logo: <LinkedInIcon className="icon" />},
    {name: 'Telegram', path: 'https://t.me/KianoshArian', logo: <TelegramIcon className="icon" />},
    {name: 'Github', path: 'https://github.com/KianoshArian', logo: <GitHubIcon className="icon" />},
  ]

  const toggleSidebar = () => {
    console.log(open)
    setOpen(prev=>!prev);
  };

  useEffect(()=>{
    if(isMobile)
      setOpen(false)
    else
      setOpen(true)
  }, [isMobile])

  return (
    <div class="layout">
      <div className={`sidebar ${open ? "sidebar-open" : "sidebar-closed"}`}>
        <div className="desktop">
          <img className="avatar" alt="avatar" src={avatar} />
          <h2>Kianosh Arian</h2>
          {items.map((item, index) => (
            <a 
            href={item.path} 
            key={index} 
            className="no-decoration" 
            onClick={()=>isMobile && setOpen(false)}>
              <p className='item'>{item.name}</p>
            </a>
          ))}
          <div className="socials">
            <p className='item'>Contact</p>
            <div className="icons">
              {socials.map((item, index) =>
                <a key={index} href={item.path} target="_blank" rel="noopener noreferrer">
                  {item.logo}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="content">
        <div className={`navbar  ${!open ? "navbar-closed" : ''}`}>
          {isMobile && <MenuIcon onClick={toggleSidebar} size={30} className="hamburger"/>}
          {isMobile && !open && <h2>Kianosh Arian</h2>}
        </div>
        <div className={`children ${open ? 'children-open' : ''}`}>
        {children}

        </div>
      </div>
    </div>
  );
}
