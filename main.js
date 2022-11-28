/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
let doors = ['closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed','closed'];
for(let i=0;i<doors.length;i++){
    for(let j=0+i;j<doors.length;j+=i+1){
       if(doors[j] == 'closed'){
           doors[j] = 'open';
       } else doors[j] = 'closed';
    }
    
}

for(let i=0;i<100;i){
    if(doors[i]=='open'){
        i++;
        console.log("Door "+i+" is open");
    }else i++;
}




