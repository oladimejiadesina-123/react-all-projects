import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {AiFillCaretDown} from 'react-icons/ai'
import './TopNav.css';


function TopNav() {
    return (
        <div>
            <div className="topW">
                <ul className="top_Wrapper">
                    <div className="left">
                        <li className="border_line"><a href="/"> <span>Mirrors</span>  <span className="caretDown"><AiFillCaretDown/></span> 
                        </a></li>
                        <li className="border_line"><a href="/">Heavy-duty grille gaurds <span className="caretDown"><AiFillCaretDown/></span>
                        </a></li>
                        <li className="border_line"><a href="/">Accessories <span className="caretDown"><AiFillCaretDown/></span> </a></li>
                        <li className="border_line"><a href="/">Application guides </a></li>
                    </div>
                    <div className="right">
                        <input type="text" placeholder="Search" className="search_input"/>
                        <a href="/" className="search_icon"><FaSearch/></a>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default TopNav;
