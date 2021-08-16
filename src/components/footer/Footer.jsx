import React from 'react'

function Footer() {
    return (
        <>
            <nav className="navbar navbar-dark text-center bg-primary">   
                <div className="container-fluid">
                    <p className="navbar-brand h1">
                      {" "}Galeria App creada por Juan Herrera para aprender React - &copy; {new Date().getFullYear}{" "}
                    </p>
                </div>       
            </nav>
        </>
    )
}

export default Footer
