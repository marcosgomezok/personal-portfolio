import React from 'react'
import './footer.css'
export const Footer = ({ translate}) => {
    return (
        <div className="footer">
            <footer>© 2021 Copyright: {translate('navbar.logo')}</footer>
        </div>
    )
}
