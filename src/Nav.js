import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let prop=useContext(Ct)
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart<button style={{"color":"red"}}>{prop.ct}</button></Link>
    </div>
  )
}

export default Nav