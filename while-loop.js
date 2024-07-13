// while
var marks = [41 , 63 , 23 , 76 , 54]
var i = 0 ;
// while(condition){
//     // statement
//     // increedemnt , decreement ;
// }

while( i < marks.length ){
    if(80 < marks[i]){
        
        console.log( " index of i = " , i , " result = A+")
    }
    else if(70 < marks[i]){
        
        console.log(" index of i = " , i ," result =  A")
    }
    else if(60 < marks[i]){
        
        console.log(" index of i = " , i ," result =  A-")
    }
    else if(50 < marks[i]){
        
        console.log(" index of i = " , i ,"result =  B")
    }
    else if (40 < marks[i]){
        
        console.log(" index of i = " , i , " result =  C")
    }
    else {
        
        console.log(" index of i = " , i ,"result =  fail")
    }
    i++ ;
}