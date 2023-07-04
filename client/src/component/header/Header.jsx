import {useState ,useEffect} from 'react'
import Logo from '../../assets/healthyLogo.png'
import "./header.css"
import { useNavigate } from 'react-router-dom'
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header() {
  const [requestCount, setRequestCount] = useState(0)

  useEffect(() => {
    async function fetchRequestCount() {
      try {
        const response = await fetch('https://monster-creator.onrender.com/api/users/count', {
          headers: {
            Accept: 'application/json'
          }
        })
    const data =await response.json()
    console.log(data)
    setRequestCount(data.count -1)
      } catch (error) {
      console.log(error)
      }
    }

    fetchRequestCount()
  }, [])

  const navigateHome = ()=>{
    naviagte('/')
  }
  const naviagte =useNavigate()
  return (
  <div className="header">
<img style={{cursor:'pointer'}}  className='Logo' src={Logo} alt="Logo" onClick={navigateHome} />
<div className="contactInfo">
  <div className="userShown">


<FontAwesomeIcon icon={faUser} />
<span className='usersStat'>{requestCount}</span>
  </div>
  <a  className='whatsapp' href="https://api.whatsapp.com/send?phone=01019394803">   <FontAwesomeIcon icon={faWhatsapp} /></a>
</div>
  </div>
  )
}

export default Header