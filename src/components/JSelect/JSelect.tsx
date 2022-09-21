import React, { useState, useRef, useEffect, useMemo } from 'react'
import './JSelect.css'

export interface JSelectProps {
    values: string[] | number[];
    defaultValueIndex: number;
}

function JSelect({ values, defaultValueIndex }: JSelectProps) {

    const [current, setCurrent] = useState(defaultValueIndex)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    // Gets the height of the JSelect's parent container,
    // and assigns it to defaultHeight
    const jselectRef = useRef<HTMLButtonElement>(null)
    const [defaultHeight, setDefaultHeight] = useState<number>(0)
    useEffect(() => {
        if (jselectRef.current !== null && jselectRef.current.offsetParent !== null) {
            setDefaultHeight(jselectRef.current.offsetParent.clientHeight!)
        }
    }, [])

    function determineButtonHeight() {
        // Prevents slide-down animation due to pageload defaultHeight being 0
        if (defaultHeight === 0) {
            return 'inherit'
        } else {
            if (dropdownOpen) {
                return defaultHeight * 10
            } else {
                return defaultHeight
            }
        }
    }

    return (
        <>
            <button
                className="jselect"
                onClick={() => { setDropdownOpen(prev => !prev) }}
                ref={jselectRef}
                style={{
                    backgroundColor: 'var(--background)',
                    height: determineButtonHeight(),
                    borderRadius: defaultHeight * 0.5,
                    transition: defaultHeight === 0 ? '' : 'background-color 0.2s ease, height 0.4s ease'
                }}
            >
                <div className="jselect__current" style={{
                    height: defaultHeight
                }}>
                    {values[current]}
                </div>
            </button>


        </>
    )
}

export default JSelect