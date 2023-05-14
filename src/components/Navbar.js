import React, {useState } from 'react'
import './Navbar.css'
import logo from './logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const [showLinks, setLinks] = useState(false)
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        navigate(`/search?query=${input}`);
        setInput('')
    }

    function toggleLinks() {
        setLinks(prev => !prev)
    }

    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`

    return (
        <nav className='navbar'>
            <div className="title">
                <Link className="logoLink" to="/"> 
                    <img className="logo" src={logo} alt="logo" />
                    <h3 className='newsChannel'>NewsNinja</h3>
                </Link>
                <p className='date'>{date}</p>
            </div>

            <form className="search" onSubmit={handleSubmit}>
                <input type="text" placeholder="search for latest news" value={input} onChange={e => setInput(e.target.value)}/>
                <img className="searchIcon" src="https://img.icons8.com/?size=512&id=111487&format=png" alt="icon" onClick={handleSubmit}/>
            </form>

            <div className="categories">
                <h4 onClick={toggleLinks}>Categories</h4>
                <div className={`sideBar ${showLinks ? 'show' : ''}`}>
                    <div className="sidebarTop">
                        <h2>Categories</h2>
                        <img onClick={toggleLinks} className="cross" src="https://img.icons8.com/?size=512&id=9433&format=png" alt="cross" />
                    </div>

                    <ul className="links">
                        <li> <Link className="navLink" to="/">home</Link> </li>
                        <li> <Link className="navLink" to="/business">business</Link> </li>
                        <li> <Link className="navLink" to="/health">health</Link> </li>
                        <li> <Link className="navLink" to="/science">science</Link> </li>
                        <li> <Link className="navLink" to="/sports">sports</Link> </li>
                        <li> <Link className="navLink" to="/technology">technology</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar