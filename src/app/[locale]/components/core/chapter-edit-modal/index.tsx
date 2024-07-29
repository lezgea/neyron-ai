import React from 'react'
import Modal from '../../partials/modal/Modal'
import { useForm } from 'react-hook-form';
import Input from '../../partials/form/Input';
import { useTranslations } from 'next-intl';
import { useAddChapter } from 'src/api/chapters/mutation';
import { LayoutContext } from 'src/app/[locale]/layoutContainer';
import useNotification from '../../partials/useNotification';


type ChapterEditModalProps = {
    visible: boolean,
    width: string,
    height: string,
    setVisible: () => void,
}

type ChapterEditForm = {
    courseId: number | string,
    name: string,
    description: string,
    chapterId: number | string,
    languageId: number | string,
}

export const ChapterEditModal: React.FC<ChapterEditModalProps> = (props) => {
    let { ...restProps } = props
    const t = useTranslations('chapters');
    const { selectedLanguage } = React.useContext(LayoutContext);
    const { register, handleSubmit, getValues, watch } = useForm<ChapterEditForm>();
    const { showNotification } = useNotification();
    const { mutate, isLoading } = useAddChapter(selectedLanguage);


    const onSubmit = (values: ChapterEditForm) => {
        mutate(
            {
                name: values?.name,
                description: values?.description,
                courseId: 0,
                chapterId: 0,
                languageId: 0
            },
            {
                onSuccess: () => {
                    showNotification({ title: 'Chapter has been updated!', variant: 'success' });
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
                    <div className="ai-form__header">Update Chapter</div>
                    <div className="ai-form__body">
                        <Input
                            name={'name'}
                            type={'text'}
                            register={register}
                            label={'Title'}
                            placeholder={'Chapter Title'}
                            variant="primary"
                        />
                        <Input
                            name={'description'}
                            type={'text'}
                            register={register}
                            label={'Description'}
                            placeholder={'Chapter Description'}
                            variant="primary"
                        />
                    </div>
                </div>
                <div className="ai-form__footer">
                    <div className="ai-form__footer__btns">
                        <button type="submit" className="ai-btn ai-btn--tertiary">
                            Update Chapter
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}