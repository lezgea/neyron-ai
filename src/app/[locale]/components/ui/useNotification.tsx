import { useSnackbar } from 'notistack';

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showNotification = ({
    title,
    variant,
  }: {
    title: string;
    variant: 'default' | 'error' | 'success' | 'warning' | 'info' | undefined;
  }) => {
    if (!title || !variant) return;
    enqueueSnackbar(title, { variant, autoHideDuration: 1500 });
  };

  return { showNotification };
};

export default useNotification;
