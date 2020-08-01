import React from 'react';

export default props => {
    return (
        <a className={props.class} href={props.href}>
            {props.children}
        </a>
    )
}