const numFormatter = (num,digits=0) => {
    let temp, numUnitInWords = ''; 
    if (num >= 1000000000) {
        temp = num / 1000000000  
        
        if(temp %100 > 10 || digits > 0) numUnitInWords = 'بليون' 
        else numUnitInWords = 'بلاين'
        
        return temp.toFixed(digits).replace(/\.0$/, '') +" "+ numUnitInWords;
      }
      if (num >= 1000000) {
        temp = num / 1000000  
        
        if(temp %100 > 10 || digits > 0) numUnitInWords = 'مليون'
        else numUnitInWords = 'ملاين'

        return temp.toFixed(digits).replace(/\.0$/, '')+ " "  + numUnitInWords;
      }
      if (num >= 1000) {
        temp = num / 1000 
        return temp.toFixed(digits).replace(/\.0$/, '') + ' ألف';
      }
      return num;
   }


numFormatter(7000000)