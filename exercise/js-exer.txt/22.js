let arrays = [1,[2,3,null,4],[null],5 ,[1,2,3,3,undefined, null , ' ',9,0,[3,4,5,6,7,[0,9,2,3]]]];
let flattened = [];
function flatten(a, i) {
    if(a.length > i) {
        if(Array.isArray(a[i]))
            flatten(a[i], 0);
        else
            flattened.push(a[i]);
        flatten(a, i + 1);
    }
}

flatten(arrays, 0);
let d = flattened;

let final = d.filter(val=> {
return val!=null && val!=undefined && val!= " ";
});
let output = [...new Set(final)];
console.log(output);
