const obj = 
    {
        0:[1,2,3,4,5],
        1:[6,7,8,9],
        2:[0,10,11,15],
        3:[0,0,33,50]
    }

let res = Object.keys(obj).reduce((acc,cur) => {
    return acc.concat(Number(cur),obj[cur]);
},[]).filter((v,i,self)=>{
    return i === self.indexOf(v);
});
console.log(res);
