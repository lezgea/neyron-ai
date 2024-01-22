import moment from 'moment';

export const convertDate = (dateString: string) =>
  dateString ? moment(dateString).format('YYYY-MM-DD') : '';
