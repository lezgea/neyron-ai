import React from 'react'
import { ICourse } from "@api/types/course-types";
import { ArrowGreenIcon, BookmarkIcon } from "@assets/icons";
import { RootState } from "@store/store";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";


interface ICourseProps extends ICourse {
    onClick?: (e: any) => void,
}


const CourseItem: React.FC<ICourseProps> = (props) => {
    let { id, name, description, image, onClick } = props;
    let lng = useLocale();

    const { isAuthenticated } = useSelector((state: RootState) => state.user);

    const imageUrl = React.useMemo(
        () => (
            image?.filePath
                ? `https://api.neyron.ai/v1/files/streams/${image?.filePath}`
                : "/svg/no_course.svg"
        ),
        [image]
    );



    return (
        <Link href={isAuthenticated ? `/${lng}/courses/${id}/chapters` : ''} onClick={onClick} className="h-md rounded-custom_md select-none cursor-pointer overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg group active:shadow-none bg-white">
            <div className="relative overflow-hidden">
                <Image
                    src={imageUrl}
                    height="300"
                    width="300"
                    className="w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 h-[15rem] object-cover"
                    alt="img"
                    priority={true}
                />
            </div>
            <div className="flex flex-col p-5 gap-2 text-start items-between">
                <h3 className="text-2xl font-medium leading-2xl text-custom Blue-900">{name}</h3>
                <p className="text-sm text-gray-500 truncate-text description-font">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default CourseItem;
