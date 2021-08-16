import React from 'react'
import PropTypes from 'prop-types'

const FormImg = (handleSubmit) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> {" "}Buscar <input className="w-100" name="inputText" type="text" placeholder="Ingrese un texto"/> {" "}</label>
                <button className="btn-success m-2" type="submit">
                Buscar
                </button>
            </form>
        </>
    )
}

FormImg.propTypes = {
    handleSubmit: PropTypes.func, 
}

export default FormImg
