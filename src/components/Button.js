import React from "react";

import '../css/Button.css';

export default function Button(props) {
    return (
        <div className={'button '+ props.color}>
            <i className={props.fontawesome}></i> {props.text}
        </div>
    )
}