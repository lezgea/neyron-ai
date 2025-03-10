import { FC, memo } from 'react';


interface ISectionLayout {
    title?: string,
    description?: string,
    noYPadding?: boolean,
    noXPadding?: boolean,
    scrollId?: string,
    children: React.ReactNode,
}

const SectionLayout: FC<ISectionLayout> = ({
    children,
    title,
    description,
    noYPadding,
    noXPadding,
    scrollId,
}) => {

    return (
        <section id={scrollId} className={`w-full ${noYPadding ? '' : 'pt-20 md:py-20'} ${noXPadding ? '' : 'px-5 md:px-10'}`}>
            <div className={`relative w-full flex flex-col ${noXPadding ? '' : 'container mx-auto max-w-[1200px]'} space-y-10`}>
                {
                    (!!title || !!description) &&
                    <div className='space-y-2'>
                        {!!title && (
                            <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[4rem] text-center font-semibold text-primaryDark">
                                {title}
                            </h2>
                        )}
                        {
                            !!description &&
                            <p className="text-sm font-light text-center text-gray-500 md:px-20">{description}</p>
                        }
                    </div>
                }
                {children}
            </div>
        </section>
    );
};

export default memo(SectionLayout);
