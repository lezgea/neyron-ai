"use client"

import * as React from 'react';
import classNames from 'classnames';
import { motion, useInView } from 'framer-motion';


export function TextPullUp({
    text,
    className = '',
}: {
    text: string;
    className?: string;
}) {
    const splittedText = text.split(' ');

    const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
    };
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });
    return (
        <div className="flex justify-start flex-wrap">
            {splittedText.map((current, i) => (
                <motion.div
                    key={i}
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={classNames(
                        'pr-5', // class to sperate words
                        className
                    )}
                >
                    {current == '' ? <span>&nbsp;</span> : current}
                </motion.div>
            ))}
        </div>
    );
}