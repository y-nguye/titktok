import React, { useState } from 'react';
import { usePopper } from 'react-popper';

export default function MyComponent() {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'flip', options: { element: arrowElement } }],
    });

    const openPopper = () => {
        // Code to open the popper
    };

    const closePopper = () => {
        // Code to close the popper
    };

    return (
        <div>
            <button
                ref={setReferenceElement}
                onMouseEnter={openPopper}
                onMouseLeave={closePopper}
            >
                Toggle Popper
            </button>
            <div
                ref={setPopperElement}
                style={{
                    ...styles.popper,
                    visibility: referenceElement ? 'visible' : 'hidden',
                }}
                {...attributes.popper}
            >
                {/* Content of the popper */}
                Popper content
                <div ref={setArrowElement} style={styles.arrow} />
            </div>
        </div>
    );
}
