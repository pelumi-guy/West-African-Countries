import React from 'react';

const Loader = () => {
    return (
        <div
            className="col-12"
            style={{
                textAlign: "center", color: "rgba(0, 0, 0, 1)", position: "relative",
            }}
        >
            <i className="pi pi-spin pi-spinner loader">
            </i>
        </div>
  )
}

export default Loader