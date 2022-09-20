import React from 'react'
import './JSelect.css'

export interface JSelectProps {
    values: string[];
}

function JSelect(props: JSelectProps) {

    const valuesDisplay = props.values.map((value, index) => {
        return (
            <option className="jselect__option" value={index} key={index}>{value}</option>
        )
    })

    return (
        <select className="jselect">
            {valuesDisplay}
        </select>
    )
}

export default JSelect