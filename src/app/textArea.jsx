import React from 'react';

export default (properties) => {
        const {className, update, value, ...props} = properties;
        return (<div className={className} >
                    <textarea {...props} onChange={update} value={value}></textarea>
                </div>
        );
}