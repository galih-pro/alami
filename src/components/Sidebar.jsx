import React from 'react'
import './Sidebar.css'

const Sidebar = (props) => {
  const sidebarClass = props.isShow ? "__sidebar __show" : "__sidebar";
  return (
    <div className={sidebarClass} id='sidebar'>
        <nav className='__sidebar-nav'>
            <ul className='__sidebar-nav-list'>
                <li className='__nav-link-list'><a className='__nav-link' href="#"><span className="material-symbols-outlined">chat_bubble</span></a></li>
                <li className='__nav-link-list'><a className='__nav-link' href="#"><span className="material-symbols-outlined">support</span></a></li>
                <li className='__nav-link-list'><a className='__nav-link' href="#"><span className="material-symbols-outlined">description</span></a></li>
                <li className='__nav-link-list'><a className='__nav-link' href="#"><span className="material-symbols-outlined">videocam</span></a></li>
                <li className='__nav-link-list'><a className='__nav-link' href="#"><span className="material-symbols-outlined">group</span></a></li>
                <li className='__nav-link-list'><a className='__nav-link' href="#"><span className="material-symbols-outlined">shopping_cart</span></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar