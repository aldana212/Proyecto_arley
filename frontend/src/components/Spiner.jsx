import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import Style from '../cssComponents/Spinner.module.css'


export function Spiner() {
    return (
        <div className={Style.Spinner}>
            <FaSpinner className={Style.sipinning} size={90}></FaSpinner>
        </div>
    )
}
