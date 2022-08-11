import React, {useState} from 'react'
import './Navbar.css'
import Sidebar from './Sidebar'

const Navbar = () => {
    const[isShow, setIsShow] = useState(false);

    const handleClick = event => {
        setIsShow(current => !current);
        console.log(isShow)
      };
  return (
    <>
    <header className='__header __container'>
        <nav className='__nav'>
            <div className='__nav-left'>
                <ul className='__nav-left-list'>
                    <li className='__nav-link-list'><div className='__nav-brand'></div></li>
                    <li className='__nav-link-list'>
                        <a href="#" className='__nav-link'>Demos<span className="material-symbols-outlined">expand_more</span></a>
                    </li>
                    <li className='__nav-link-list'>
                        <a href="#" className='__nav-link'>Pages<span className="material-symbols-outlined">expand_more</span></a>
                    </li>
                    <li className='__nav-link-list'>
                        <a href="#" className='__nav-link'>Portfolio<span className="material-symbols-outlined">expand_more</span></a>
                    </li>
                </ul>
            </div>
            <div className='__nav-right'>
                <ul className='__nav-right-list'>
                    <li className='__nav-link-list'>
                        <button className='__btn __nav-burger __not-show' id='burger' onClick={handleClick}>
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </li>
                    <li className='__nav-link-list'><a href="#"><span className="material-symbols-outlined">shopping_cart</span></a></li>
                    <li className='__nav-link-list'>
                        <form action="" className='__nav-form'>
                            <button type='submit' className='__btn __btn-search'><span className="material-symbols-outlined">search</span></button>
                            <input type="search" aria-label="Search through site content" id='search' autoComplete='off' required/>
                            <button type='reset' className='__btn __btn-search'></button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    {isShow && <Show />}
    </>
  ) 
}

export default Navbar

function Show() {
    return <Sidebar />
}