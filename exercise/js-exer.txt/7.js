7.Write a javascript funciton to get the month name from a paticular date.

let month_name = function(dt){
    months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return months[dt.getMonth()];
    };
    console.log(month_name(new Date("12/23/2019")));
    console.log(month_name(new Date("04/24/1996")));
