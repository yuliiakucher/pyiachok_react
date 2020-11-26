import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Stars = ({rating}) => {
    let rate_arr = []
    for (let i = 1; i <= rating; i++) {
        rate_arr.push(i)
    }
    return (
        <>
            {rate_arr.map(i => (
                <FontAwesomeIcon style={{color: '#4bbf74'}} key={i} icon={faStar}/>
            ))}
        </>
    )
}

export default Stars
