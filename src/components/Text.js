import React from "react";

export default function Text(props) {
    return (
        <>
        <h2 className="textTitle">
            {props.textTitle}
        </h2>
        <p className="text">
            {props.text}
        </p>
        </>
    )
}