import React from "react";
import PropTypes from "prop-types";

let ConfirmPrompt = ({title, description, promptResponse, data, closeResponse}) => {
    
    return (
        <div className="import-overlay">
            <div className="confirm-container">
                <div className="header">
                    <h2><b>{title}</b></h2>
                </div>
                <div className="confirm__description">
                    <span>{description}</span>
                </div>
                <div className="confirm__buttons">
                    <button className="cancel" onClick={() => closeResponse(false)}>Cancel</button>
                    <button className="confirm" onClick={() => promptResponse(data)}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

ConfirmPrompt.defaultProps = {
    title: "Delete",
    description: "Are you sure to delete this item? This action is irrevocable."
}

ConfirmPrompt.propTypes = {
    promptResponse: PropTypes.func,
    closeResponse: PropTypes.func
}

export default ConfirmPrompt;
