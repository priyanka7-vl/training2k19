let matrix =[];
    let nodes = [];
    let edges = [];
    for(let i=0;i<2;i++) {
        matrix[i] = new Array(2);
    }
    for(let i=0; i<2; i++) {
        for(let j=0; j<2; j++) {
         // console.log(`${i}${j}`);
          matrix[i][j] = `${i}-${j}`;
        if(i == 0 && j == 0) {
            
            nodes.push(node1=
                {
                    id:`${[i]}${[j]}`,
            });
            edges.push(node1_des1 =
                {
                    id:`${[i]}${[j]}`,
                    source:`${[i]}${[j]}`,
                    destination1:`${i}${j+1}`
            });
            edges.push(node1_des2 =
                {
                    id:`${[i]}${[j]}`,
                    source:`${[i]}${[j]}`,
                    destination2:`${i+1}${j}`
            });
        }
        if(i == 0 && j == 1) {
            nodes.push(node2=
                {
                    id:`${[i]}${[j]}`,
                });
                edges.push(node2_des1 =
                    {
                     id:`${[i]}${[j]}`,
                     source:`${[i]}${[j]}`,
                     destination1:`${i}${j-1}`
                });
                edges.push(node2_des2 =
                    {
                     id:`${[i]}${[j]}`,
                     source:`${[i]}${[j]}`,
                     destination2:`${i+1}${j}`
                });
        }
        if(i == 1 && j == 0) {
            nodes.push(node3 = 
                {
                    id:`${[i]}${[j]}`,
                });
                edges.push(node3_des1 =
                    {
                     id:`${[i]}${[j]}`,
                     source:`${[i]}${[j]}`,
                     destination1:`${i-1}${j}`
                });
                edges.push(node3_des2 =
                    {
                     id:`${[i]}${[j]}`,
                     source:`${[i]}${[j]}`,
                     destination2:`${i}${j+1}`
                });
        }
        if(i == 1 && j == 1) {
            nodes.push(node4 = 
                {
                    id:`${[i]}${[j]}`,
                });
                edges.push(node4_des1 =
                    {
                     id:`${[i]}${[j]}`,
                     source:`${[i]}${[j]}`,
                     destination1:`${i-1}${j-1}`
                });
                edges.push(node4_des2 =
                    {
                     id:`${[i]}${[j]}`,
                     source:`${[i]}${[j]}`,
                     destination2:`${i-1}${j}`
                });
        }
        }
    }
let n ={nodes,edges};
console.log(n);
