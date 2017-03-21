import React from 'react';

export default (properties) => {
        const {className, children, ...props} = properties;
        return (<div className={className}>
                    <div {...props} dangerouslySetInnerHTML={{__html: children}}/>
                </div>
        );
}