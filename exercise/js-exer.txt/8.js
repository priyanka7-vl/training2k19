8.Write a javascript function to get difference between two dates,from maximum unit to minimum unit.

let date_diff = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(date_diff('04/02/2019','12/04/2019'));
   // console.log(date_diff('11/04/2014', '11/02/2014'));
    console.log(date_diff('08/19/2007','08/19/2007'));
