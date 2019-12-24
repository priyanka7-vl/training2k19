14.Write a javascript function to remove HTML?XML tags from a string.

function strip_html_tags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}
console.log(strip_html_tags('<html><head><title>Javascript Exercises</title></head></html>'));
