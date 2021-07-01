export const numFormatter = (num,digits=0) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(digits).replace(/\.0$/, '') + ' بلاين';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(digits).replace(/\.0$/, '') + ' ملاين';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(digits).replace(/\.0$/, '') + ' ألف';
     }
     return num;
  }
export const kashida = str => {
   return /* some cool regex */
}