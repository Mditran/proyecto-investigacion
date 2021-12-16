import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <p>Copyrigth &copy; Proyecto investigacion {new Date().getFullYear()}</p>
            </div>
        </footer>
        </div>
    )
}
