
let i, j;
let count;
let n = window.prompt("enter n");
for(i=1; i<=n; i++)
{
    for(j=1; j<=n; j++)
    {
        if(j==i || (j==n - i + 1))
        {
           document.write("*");
        }
        else
        {
           document.write("&nbsp;");
        }
    }

    document.write("<br>");
}
