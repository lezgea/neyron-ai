import Notification from 'src/app/[locale]/components/ui/notification';

export const useNotification = ({ text, type }: { text: string; type: string }) => {
  return <Notification text={text} type={type} />;
};
