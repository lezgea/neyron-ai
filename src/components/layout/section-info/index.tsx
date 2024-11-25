import React from 'react';
import { Button } from '@components/shared/buttons';
import * as motion from "framer-motion/client";
import { DescriptionPullUp, TextFade, TextPullUp } from '@components/shared';
import { TextBlurIn } from '@components/shared/text-blur-in';
import { LettersPullUp } from '@components/shared/letters-pull-up';


interface ISectionInfoProps {
    title: string,
    description?: string,
    position?: "start" | "end",
    btnLabel?: string,
    onClick?: () => void,
    children?: React.ReactNode,
}

export const SectionInfo: React.FC<ISectionInfoProps> = (props) => {
    let { title, btnLabel, position = "start", description, children, onClick } = props;

    let items_position = position === "start" ? 'items-start' : 'items-end'

    return (
        <div className='w-full'>
            <div className={`container w-full h-screen flex flex-col ${items_position} justify-center mx-auto gap-8 px-6 md:px-0`}>
                <div className='lg:min-w-[50%] lg:max-w-[50%] z-20 space-y-3 md:space-y-6 items-start'>
                    <h2 className='text-4xl font-semi leading-[3rem] tracking-tighter md:text-6xl md:leading-[4.5rem]'>
                        <TextPullUp text={title} />
                    </h2>
                    {
                        !!description &&
                        <h3 className='text-xl font-light leading-normal md:text-2xl'>
                            <DescriptionPullUp text={description} />
                        </h3>
                    }
                    {
                        !!btnLabel &&
                        <Button size="large" label={btnLabel} onClick={onClick} />
                    }
                    {children}
                </div>
            </div>
        </div>
    )
}