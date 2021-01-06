import React from 'react'

export function Error({msg}) {
    if (msg !== "") {
        return (
            <div className="error-msg">
                <p>Error: {msg}</p>
            </div>
        )
    } else {
        return ""
    }
}