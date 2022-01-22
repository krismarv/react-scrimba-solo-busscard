import React from 'react';

export default function Photo(props) {
    return (
        <>
            <img className='intro-photo' src={props.src}></img>
        </>
    )
}