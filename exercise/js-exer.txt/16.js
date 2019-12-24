16.Write a javascript function to print an integer with commas as thousands separators.

function thousands_separators(num)
  {
    let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));
