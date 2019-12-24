2.Write a javascript program which accepts a number as input and insert the  dashes (-) between even numbers.

	
<html>
<body>
<script>
  let num = prompt("Enter a number:");
  let str = num.toString();
  let result = [str[0]];
  for (let x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
      result.push('-', str[x]);
    } else {
      result.push(str[x]);
    }
  }
  console.log("To insert '-' between even numbers:");
  console.log(result.join(''));
</script>
</body>
</html>
