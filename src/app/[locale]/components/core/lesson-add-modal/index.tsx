import React from 'react'
import Modal from '../../partials/modal/Modal'
import { useForm } from 'react-hook-form';
import Input from '../../partials/form/Input';
import { useTranslations } from 'next-intl';
import { LayoutContext } from 'src/app/[locale]/layoutContainer';
import useNotification from '../../partials/useNotification';
import { useAddLesson } from 'src/api/lessons/mutation';


type LessonAddModalProps = {
    visible: boolean,
    width: string,
    height: string,
    setVisible: () => void,
}

type LessonAddForm = {
    chapterId: number,
    name: string,
    contentFileId: number,
    interactionFileId: number,
    lessonId: number,
    languageId: number,
}

export const LessonAddModal: React.FC<LessonAddModalProps> = (props) => {
    let { ...restProps } = props
    const t = useTranslations('lessons');
    const { selectedLanguage } = React.useContext(LayoutContext);
    const { register, handleSubmit, getValues, watch } = useForm<LessonAddForm>();
    const { showNotification } = useNotification();
    const { mutate, isLoading } = useAddLesson(selectedLanguage);


    const onSubmit = (values: LessonAddForm) => {
        mutate(
            {
                name: values?.name,
                chapterId: 0,
                languageId: 0,
                contentFileId: 0,
                interactionFileId: 0,
                lessonId: 0
            },
            {
                onSuccess: () => {
                    showNotification({ title: 'Lesson has been added!', variant: 'success' });
                },
                onError: () => {
                    showNotification({ title: 'Something went wrong!', variant: 'error' });
                },
            }
        );
    };


    return (
        <Modal style={{ padding: 0 }} {...restProps}>
            <form onSubmit={handleSubmit(onSubmit)} className="ai-form ai-form--login" style={{ width: 500 }}>
                <div className="ai-form__content">
                    <div className="ai-form__header">Add New Lesson</div>
                    <div className="ai-form__body">
                        <Input
                            name={'name'}
                            type={'text'}
                            register={register}
                            label={'Title'}
                            placeholder={'Chapter Title'}
                            variant="primary"
                        />
                    </div>
                </div>
                <div className="ai-form__footer" style={{ marginTop: 20 }}>
                    <div className="ai-form__footer__btns">
                        <button type="submit" className="ai-btn ai-btn--tertiary">
                            Add Lesson
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}