3.Write a javascript program to find the most frequent item of an array.

console.log("To display most frequent element of an array:");
const arr = [7,"priyanka",10,1,0,"sweety",7,"priyanka","priyanka"];
let freq = 1;
let count = 0;
let ele;
for (let i=0; i<arr.length; i++)
{
        for (let j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                  count++;
                if (freq < count)
                {
                  freq = count; 
                  ele = arr[i];
                }
        }
        count = 0;
}
console.log(`${ele} ( ${freq} times ) `) ;
