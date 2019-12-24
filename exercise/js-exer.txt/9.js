9.Write a javascript function to convert a unix timestamp to time.

function Unix_timestamp(t)
{
const dt = new Date(t*1000);
const hr = dt.getHours();
const m = "0" + dt.getMinutes();
const s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}
console.log(Unix_timestamp(70935643));
