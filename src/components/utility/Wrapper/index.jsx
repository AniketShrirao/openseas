import React from 'react'

const Wrapper = ({ width, children }) => {

    const wrapperWidth = width;

    return (
        <div className="wrapper">
            {children}
        </div>
    );
};

export default Wrapper;