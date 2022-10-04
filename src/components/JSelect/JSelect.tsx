import React, { useState, useRef, useLayoutEffect } from 'react'
import './JSelect.css'

export interface JSelectProps {
    values: string[] | number[];
    defaultValueIndex: number;
    backgroundColor: string;
    backgroundColorHover?: string;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
}

function JSelect({
    values,
    defaultValueIndex,
    backgroundColor,
    backgroundColorHover = 'rgba(255,255,255,.5)',
    className,
    style
}: JSelectProps) {

    // Data states
    const [current, setCurrent] = useState(defaultValueIndex)

    // Visual states
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [hoverOverValues, setHoverOverValues] = useState<boolean[]>([])

    // Calculate height values
    const jselectRef = useRef<HTMLButtonElement>(null)
    let [defaultClosedHeight, setDefaultClosedHeight] = useState<number>(0)
    let [defaultOpenedHeight, setDefaultOpenedHeight] = useState<number>(0)
    useLayoutEffect(() => {
        if (jselectRef.current !== null) {
            setDefaultClosedHeight(jselectRef.current.clientHeight!)
            setDefaultOpenedHeight(jselectRef.current.scrollHeight + jselectRef.current.offsetHeight)
        }
    }, [])

    // Visual Objects
    const valuesDisplay = values.map((item, index, array) => {
        return (
            <div className="jselect__valuesitem"
                style={{
                    paddingBottom: index + 1 === array.length ? '15px' : '2'
                }}
            >
                {item}
            </div>
        )
    })


    function getButtonHeight() {
        // Prevents slide-down animation due to pageload defaultHeight being 0
        if (defaultClosedHeight === 0) {
            return 'inherit'
        } else {
            if (dropdownOpen) {
                return defaultOpenedHeight
            } else {
                return defaultClosedHeight
            }
        }
    }



    function lightenDivOnHover() {

    }

    const jselectStyle: React.CSSProperties = {
        backgroundColor: backgroundColor,
        height: getButtonHeight(),
        // borderRadius: defaultHeight * 0.5,
        transition: defaultClosedHeight === 0 ? '' : 'background-color 0.2s ease, height 0.4s ease, filter 0.2s ease'
    }

    const jselect__hoveroverlayStyle: React.CSSProperties = {
        backgroundColor: backgroundColorHover,
        opacity: isHovering ? '100%' : '0%'
    }

    function hoveringOverThis()

    return (
        <div className={className} style={style}>
            <button
                className="jselect"
                onClick={() => { setDropdownOpen(prev => !prev) }}
                ref={jselectRef}
                style={jselectStyle}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >

                <div className="jselect__current" style={{
                    height: defaultClosedHeight
                }}>
                    {values[current]}
                </div>
                <div className="jselect__divider" />
                {valuesDisplay}

                <div className="jselect__hoveroverlay" style={jselect__hoveroverlayStyle}>
                </div>
            </button>





        </div>
    )
}

export default JSelect