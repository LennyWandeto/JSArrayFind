// code your solution here

function superbowlWin(record){
    let gameWin = record.find(({result}) => result === "W")
   if (gameWin){
    return gameWin.year
   } else{
    return undefined
   }
    
    
}

