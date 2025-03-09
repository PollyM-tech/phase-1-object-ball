function gameObject(){
    let obj ={
        home:{
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white' ],
            players: {
                'Alan Anderson' :{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                'Reggie Evans' : {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                'Brook Lopez' :{
                        number: 11,
                        shoe: 17,
                        points: 17,
                        rebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 1,
                        slamDunks:15,  
                },
                'Mason Plumlee' : {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks:5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },

            }
        },


        away:{
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien' : {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,

                },
                'Bismak Biyombo' :{
                    number: 0,
                    shoe: 16,
                    points:12,
                    rebounds:4 ,
                    assists: 7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },
                'DeSagna Diop' :{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks:5,
                },
                'Ben Gordon' :{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks:0,
                },
                'Brendan Haywood':{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks:12,
                },

            }
        }
    }
    return obj;

}
console.log(gameObject())

function numPointsScored(playersName){
    let object = gameObject()
    //checking if player is in the home team
    if(object.home.players[playersName]){
        return object.home.players[playersName].points;
        //checking if player is in the away team
    }else if(object.away.players[playersName]){
        return object.away.players[playersName].points;
        //case where the player is not found
    }else{
        return 'Value for player not Found';
    }
}//testing the function
console.log('Points: ', numPointsScored('DeSagna Diop'));
console.log('Points: ', numPointsScored('Jason Terry'));


function shoeSize(playersName){
    let object = gameObject()
    if(object.home.players[playersName]){
        return object.home.players[playersName].shoe;
    }else if(object.away.players[playersName]){
        return object.away.players[playersName].shoe
    }else{
        return 'shoe for player not found'
    }
}
console.log('Shoe: ', shoeSize('Alan Anderson'));
console.log('Shoe: ', shoeSize('Bismak Biyombo'));


function teamColors(teamName){
let object = gameObject()
//checking if the teamName matches home team
if(object.home.teamName ===teamName){
    return object.home.colors;
//checking if the teamName matches away team
}else if(object.away.teamName === teamName){
    return object.away.colors;
}else{
    return null;
}
}
//testing results
console.log('Team Colors: ', teamColors('Brooklyn Nets'));
console.log('Team Colors: ', teamColors('Charlotte Hornets'));

//return an array of the team names.
function teamNames(){
 let object = gameObject()
return [object.home.teamName, object.away.teamName]
 
}
//testing to check if it will return both teamNames
console.log('Team Names: ', teamNames());


function playerNumbers(teamName){
    let object = gameObject();
    let team;
    if(object.home.teamName === teamName){
        team = object.home.players
    }else if(object.away.teamName === teamName){
        team = object.away.players
    }else{
        return null;
    }

    let jerseyNumbers = []
    for(const playersName in team){
        jerseyNumbers.push(team[playersName].number)
    }
    return jerseyNumbers;
}
console.log('Players Numbers: ', playerNumbers('Brooklyn Nets'));
console.log('Players Numbers: ', playerNumbers('Charlotte Hornets'));

function playerStats(playersName) {
    let object = gameObject()
    if (object.home.players[playersName]) {
        return object.home.players[playersName];
    }
    else if (object.away.players[playersName]) {
        return object.away.players[playersName];
    }
    else {
        return null;
}
}
console.log('Player Stats: ', playerStats('Alan Anderson'));


function bigShoeRebounds(){
    const object = gameObject();
    //initializing variables
    let largestShoeSize = 0;
    let rebounds = 0;
    //we have to iterate through players 
    // using looping, for ...in statement
    //hometeam
    for (const playerName in object.home.players){
        const player = object.home.players[playerName];
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            rebounds = player.rebounds;
          }
        }
          //awayteam
    for (const playerName in object.away.players){
        const player = object.away.players[playerName];
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            rebounds = player.rebounds;
          }
    }
    return rebounds;
}
console.log('Rebounds: ', bigShoeRebounds());

//player with most points
function mostPointsScored(){
    let object = gameObject()
    let highestpoints=0
    let playerWithMostPoints = '';
    for (const playerName in object.home.players) {
        const player = object.home.players[playerName]
        if (player.points> highestpoints){
            highestpoints = player.points
            playerWithMostPoints= playerName
        }
    }
    for (const playerName in object.away.players) {
        const player = object.away.players[playerName]
        if (player.points> highestpoints){
            highestpoints = player.points
            playerWithMostPoints= playerName
       
       }
    }
    return playerWithMostPoints;
}
      console.log('playerWithMostPoints; ', mostPointsScored());
        
function winningTeam(){
   let  object = gameObject();
   const homeTeamPoints = Object.values(object.home.players).reduce(
    (total, player) => total + player.points
   );
   const awayTeamPoints = Object.values(object.away.players).reduce(
    (total, player) => total + player.points
  );
  if (homeTeamPoints > awayTeamPoints) {
    return object.home.teamName; 
  } else if (awayTeamPoints > homeTeamPoints) {
    return object.away.teamName; 
  } else {
    return 'It\'s a tie!';
}

}
console.log('Winning Team: ', winningTeam());

function playerWithLongestName() {
    let object = gameObject();
    let longestName = '';
    //chech through homw and away 
    for (const team in object) {
      const players = object[team].players;
      for (const playerName in players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
    return longestName;
  }
  console.log(playerWithLongestName());


function doesLongNameStealATon() {
  let object = gameObject();
  let longestNamePlayer = playerWithLongestName(); // Call your existing function
  let mostStealsPlayer = '';
  let mostSteals = 0;

  for (const team in object) {
    const players = object[team].players;
    for (const playerName in players) {
      const player = players[playerName];
      if (player.steals > mostSteals) {
        mostSteals = player.steals;
        mostStealsPlayer = playerName;
      }
    }
  }
  // Compare the player 
  return longestNamePlayer === mostStealsPlayer;
}
console.log(doesLongNameStealATon()); 