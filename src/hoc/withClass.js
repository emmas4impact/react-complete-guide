import React from 'react';

const withClass = (WrappedComponent, className) =>{
    return props =>{
        // eslint-disable-next-line no-unused-expressions
        <div className= {className}>
            <WrappedComponent {...props} />
        </div>
    };
    
};

export default withClass;