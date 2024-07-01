import CoursesList from 'src/app/[locale]/components/core/CoursesList';

const page = () => {
    return (
        <main>
            <CoursesList mainPage={false} />
        </main>
    );
};

export default page;
