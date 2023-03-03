function strToDate(s) {
    const [day, month, year] = s.split('/');
    const date = new Date(year, month - 1, day);
  
    return date;
  }
  
  console.log(strToDate('12/30/2021')); // Output: Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
  console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date  
