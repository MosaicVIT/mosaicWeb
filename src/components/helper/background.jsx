import React from 'react'
import styled from 'styled-components'


export const Background = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    background-image: url('${p=> process.env.PUBLIC_URL + '/bg.png'}');
    background-size: cover;
    background-position: center;
    z-index: -1;
    /* filter: blur(5px); */
    opacity: 0.5;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    animation: fadeIn 1s ease-in-out forwards;
    @keyframes fadeIn {
        0% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`
