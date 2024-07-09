import LessonsList from 'src/app/[locale]/components/core/LessonsList';


const page = () => {
    return (
        <main>
            <LessonsList mainPage={false} />
        </main>
    );
};

export default page;
