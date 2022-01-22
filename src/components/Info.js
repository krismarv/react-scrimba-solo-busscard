import React from 'react';

export default function Info (props) {
    return (
        <div class="info-container">
            <h1>{props.name}</h1>
            <p class="info-subtitle">{props.role}</p>
            <p class="info-web">{props.web}</p>
        </div>
    )
}