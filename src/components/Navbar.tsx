import { Link, NavLink } from 'react-router-dom'
import ReactLogo from '../assets/react.svg'
import { FC } from 'react';

interface menuItem {
    name: string;
    link: string;
}

const Navbar: FC = () => {
    const menus: menuItem[] = [
        { name: 'Counter', link: '/' },
        { name: 'Todo', link: '/todo' },

    ];
    return (
        <header className='shadow-md px-4 py-2 flex justify-between'>
            <Link to="/" className="flex items-center gap-1 cursor-pointer">
                <img src={ReactLogo} alt="logo" />
                <h1 className='text-xl font-semibold hover:text-[#00D8FF]'>TypeScript</h1>
            </Link>
            <nav >
                <ul className='flex justify-between items-center space-x-2 divide-x-2'>
                    {menus.map((menu, index) => (
                        <li key={index} className='font-medium hover:text-[#00D8FF] pl-2'>
                            <NavLink style={({ isActive }) => (
                                isActive ? { color: '#00D8FF' } : { color: '#000' }
                            )} to={menu.link}>{menu.name}</NavLink>
                        </li>
                    ))}

                </ul>
            </nav>

            <div className="hidden sm:block">
                <a href=""
                    className="px-2 py-1 flex justify-center items-center gap-1 hover:text-[#00d8ff]  font-semibold">
                    Github
                    <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" >
                        <path fill="currentColor"
                            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0, 0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z ">
                        </path>
                        <polygon fill="currentColor"
                            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8, 14.9 62.8,22.9 71.5,22.9 ">
                        </polygon>
                    </svg>
                </a>
            </div>
        </header>
    )
}

export default Navbar
