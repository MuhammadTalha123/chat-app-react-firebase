import React from 'react';

const button = ({text}) => {
    return (
        <div>
            <div>
                <button style={{marginTop: "10px"}}>{text}</button>
            </div>
        </div>
    );
};

export default button;