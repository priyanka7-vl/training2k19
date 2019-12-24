10.write a javascript function to get time differnces in years,months,weeks,days,hours and minutes between two dates.

console.log("Time difference in years:");
function diff_years(dt2, dt1) 
 {

  let diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
   
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_years(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2));
////////////////////////////
console.log("Time difference in months:");
function diff_months(dt2, dt1) 
 {

  let diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_months(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));
/////////////////////
console.log("Time difference between weeks:");
function diff_weeks(dt2, dt1) 
 {

  let diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_weeks(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));
/////////////////////////
console.log("Time difference between days:");
function diff_days(dt2, dt1) 
 {

  let diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,6);
console.log(diff_days(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));
///////////////////////
console.log("Time difference between hours:");
function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));

 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_hours(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));
///////////////////////
console.log("Time difference between minutes:");
function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff)); 
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_minutes(dt1, dt2));
