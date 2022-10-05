import { getEventListeners } from 'events';
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import './JSelect.css'

export interface JSelectProps {
    options: string[] | number[];
    defaultValueIndex?: number;
    backgroundColor?: string;
    backgroundColorHover?: string;
    textColor?: string;
    textColorHover?: string;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
}

function JSelect({
    options,
    defaultValueIndex = 0,
    backgroundColor = '#3bd6a0',
    backgroundColorHover = 'rgba(255,255,255,.5)',
    textColor = '#171448',
    textColorHover = '#aaa7e7',
    className = "jselect-default",
    style
}: JSelectProps) {

    const [current, setCurrent] = useState(defaultValueIndex)

    const [dropdownIsHovering, setDropdownIsHovering] = useState(false)

    // Dropdown Size & Action
    const jselectRef = useRef<HTMLButtonElement>(null)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [defaultClosedHeight, setDefaultClosedHeight] = useState<number>(0)
    const [defaultOpenedHeight, setDefaultOpenedHeight] = useState<number>(0)

    useLayoutEffect(() => {
        if (jselectRef.current !== null) {
            setDefaultClosedHeight(jselectRef.current.clientHeight!)
            setDefaultOpenedHeight(jselectRef.current.scrollHeight + jselectRef.current.offsetHeight)
        }
    }, [])

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


    // Options
    const optionsDisplay = options.map((item, index, array) => {
        return (
            <div className="jselect__valuesitem"
                key={index}
                style={{
                    paddingBottom: index + 1 === array.length ? '15px' : '2',
                    color: textColor

                }}
                onMouseEnter={optionIsHovered}
                onMouseLeave={optionIsNotHovered}
            >
                {item}
            </div>
        )
    })

    const jselect__hoveroverlayStyle: React.CSSProperties = {
        backgroundColor: backgroundColorHover,
        opacity: dropdownIsHovering ? '100%' : '0%'
    }

    function optionIsHovered(e: any) {
        e.currentTarget.style.color = textColorHover
    }

    function optionIsNotHovered(e: any) {
        e.currentTarget.style.color = textColor
    }


    const jselectStyle: React.CSSProperties = {
        backgroundColor: backgroundColor,
        height: getButtonHeight(),
        transition: defaultClosedHeight === 0 ? '' : 'background-color 0.2s ease, height 0.4s ease, filter 0.2s ease',
        zIndex: dropdownOpen ? '300' : ''
    }

    useEffect(() => {
        const test = () => {
            console.log('Window click detected!')
        }

        if (dropdownOpen) {
            window.addEventListener('click', test, true)
            console.log('dropdownOpen is', dropdownOpen)
        }
        return () => {
            window.removeEventListener('click', test, true)
            console.log('dropdownOpen is', dropdownOpen)
        }

    })






    return (
        <div className={className} style={style}>
            <button
                className="jselect"
                onClick={() => { setDropdownOpen(prev => !prev) }}
                ref={jselectRef}
                style={jselectStyle}
                onMouseEnter={() => setDropdownIsHovering(true)}
                onMouseLeave={() => setDropdownIsHovering(false)}
            >

                <div className="jselect__current" style={{
                    height: defaultClosedHeight,
                    color: textColor
                }}>
                    {options[current]}
                </div>
                <div className="jselect__divider" />
                {optionsDisplay}

                <div className="jselect__hoveroverlay" style={jselect__hoveroverlayStyle}>
                </div>
            </button>
        </div>
    )
}

export default JSelect