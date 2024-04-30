import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/Navbar.css"

const Navbar = () => {
const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className='text-center fixed top-0 font-bold w-full text-lg background-custom'>
        <ul className='flex flex-col justify-between sm:flex-row'>
            <div>
            {
                isAuthenticated && <li className='sm:py-4 sm:pl-6 pl-2 py-0'>{user.nickname}</li>
            }
            </div>
            <div className='flex mx-auto'>
            <li className='sm:py-4 sm:pl-6 pl-0 py-0'>
                <Link to="/" className='pl-6 pr-8 cursor-pointer'> Home</Link>
            </li>
            <li className='sm:py-4 sm:pl-6 pl-0 py-0'>
                <Link to="/about" className='pl-6 pr-8 cursor-pointer'> About</Link>
            </li>
            <li className='sm:py-4 sm:pl-6 pl-0 py-0'>
                <Link to="/articles-list" className='pl-6 pr-8 cursor-pointer'> Articles</Link>
            </li>
            </div>
            <div>
            {
                isAuthenticated ? <li className='sm:py-4 sm:pl-6 pl-0 py-0 sm:pr-6 pr-2'><button className='cursor-pointer' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li> : <li className='sm:py-4 sm:pl-6 pl-0 py-0 sm:pr-6 pr-2 cursor-pointer'> <button className='cursor-pointer' onClick={() => loginWithRedirect()}>Log In</button> </li>
            }
            </div>
        </ul>
    </nav>
  )
}

export default Navbar