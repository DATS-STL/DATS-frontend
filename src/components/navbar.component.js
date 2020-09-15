import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.component.css'
import { render } from '@testing-library/react'

export const NavbarComponent = (props) => {
    const [loading, setLoading] = useState(true)
    const [toolLinks, setToolLinks] = useState({})

    useEffect(() => {
        //grabToolLinks()
        console.log('hey, i got this far')
        return
    })
}