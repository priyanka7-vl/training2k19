13.Write a javascript function to chop a string into chunks of a given length.

let string_chop =  function(str, size){
    if (str == null) return [];
    str = String(str);
    size = ~~size;
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('Rapidops'));
console.log(string_chop('Rapidops',2));
console.log(string_chop('Rapidops',3));
