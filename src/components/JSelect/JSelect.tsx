import React, { useState, useRef, useLayoutEffect, useMemo } from 'react'
import { arrayBuffer } from 'stream/consumers';
import './JSelect.css'

export interface JSelectProps {
    values: string[] | number[];
    defaultValueIndex: number;
    backgroundColor: string;
    backgroundColorHover?: string;
}

function JSelect({ values, defaultValueIndex, backgroundColor, backgroundColorHover = "" }: JSelectProps) {

    const [current, setCurrent] = useState(defaultValueIndex)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    // Gets the height of the JSelect's parent container,
    // and assigns it to defaultHeight
    const jselectRef = useRef<HTMLButtonElement>(null)
    let [defaultHeight, setDefaultHeight] = useState<number>(0)
    useLayoutEffect(() => {
        if (jselectRef.current !== null) {
            setDefaultHeight(jselectRef.current.clientHeight!)
        }
    }, [])
    function determineButtonHeight() {
        // Prevents slide-down animation due to pageload defaultHeight being 0
        if (defaultHeight === 0) {
            return 'inherit'
        } else {
            if (dropdownOpen) {
                return 'fit-content'
            } else {
                return defaultHeight
            }
        }
    }


    const valuesDisplay = values.map((item, index, array) => {
        return (
            <div className="jselect__valuesitem"
                style={{
                    paddingBottom: index + 1 == array.length ? '15px' : '2'
                }}>
                {item}
            </div>
        )
    })

    // console.log(jselectRef.current?.childNodes)

    // let heightCalc = 0;
    // jselectRef.current?.childNodes.forEach(item => console.log(item))

    return (
        <>
            <button
                className="jselect"
                onClick={() => { setDropdownOpen(prev => !prev) }}
                ref={jselectRef}
                style={{
                    backgroundColor: backgroundColor,
                    height: determineButtonHeight(),
                    // borderRadius: defaultHeight * 0.5,
                    transition: defaultHeight === 0 ? '' : 'background-color 0.2s ease, height 0.4s ease, filter 0.2s ease'
                }}
            >
                <div className="jselect__current" style={{
                    height: defaultHeight
                }}>
                    {values[current]}
                </div>
                <div className="jselect__divider" />
                {valuesDisplay}
                <div className="jselect__backgroundDiv" />
            </button>
            
            



        </>
    )
}

export default JSelect