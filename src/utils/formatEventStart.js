import { format } from 'date-fns';
// import { uk } from 'date-fns/locale'; /* Змінює мову відображення місяця */

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};

// export const formatEventStart = start => {
//   return format(Date.parse(start), 'dd MMMM yyyy, HH:mm', { locale: uk });
// };