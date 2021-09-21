const { db } = require('../models/room.model');

exports.simulation = (req, res) => {
  const transferedData = {
    typeOfGroup: req.body.typeOfGroup,
    numberOfPeopleInGroup: req.body.numberOfPeopleInGroup,
    userID: req.body.userID,
    nameOfTemplate: req.body.nameOfTemplate,
    noSimSquares: req.body.noSimSquares,
    leftSideWallArray: req.body.leftSideWallArray,
    rightSideWallArray: req.body.rightSideWallArray,
    topSideWallArray: req.body.topSideWallArray,
    botSideWallArray: req.body.botSideWallArray,
  };

  const dataToSim = db
    .collection('rooms')
    .find({
      userId: transferedData.userID,
      nameOfTemplate: transferedData.nameOfTemplate,
    })
    .toArray()
    .then(results => {
      return results;
    })
    .catch(error => console.error.name(error));

  const runSimulationRoom = async () => {
    // This array will get filled with the following object
    // "simulationDataOfGroup" that contains information
    // for each independent group that enters the room
    let arrayOfGroups = [];

    // We receive all roomData that we posted from frontend
    const [roomData] = await dataToSim;
    console.log(roomData);

    // The items that have been dragged and dropped
    const allPositions = roomData.allPositions;

    // These squares are disabled for simulation
    let noSimSquares = transferedData.noSimSquares.concat(allPositions);
    noSimSquares = [...new Set(noSimSquares)];

    // These are all 1000 squares of Template
    let allSquares = [];

    for (let i = 0; i < 1000; i++) {
      allSquares.push(i);
    }

    // These are all the available squares for simulation
    const simSquares = allSquares.filter(
      value => !noSimSquares.includes(value)
    );

    // User movements
    const userMoveDirection = {
      left: -1,
      right: 1,
      up: -40,
      down: 40,
    };

    // Exhibit range for users to visit
    let exhibitRange = [];

    let exhibitsArrayLength = roomData.exhibit.length;

    for (let i = 0; i < exhibitsArrayLength; i++) {
      exhibitRange[i] = [
        roomData.exhibit[i] - 41,
        roomData.exhibit[i] - 40,
        roomData.exhibit[i] - 39,
        roomData.exhibit[i] + 1,
        roomData.exhibit[i] + 41,
        roomData.exhibit[i] + 40,
        roomData.exhibit[i] + 39,
        roomData.exhibit[i] - 1,
        roomData.exhibit[i] - 82,
        roomData.exhibit[i] - 81,
        roomData.exhibit[i] - 80,
        roomData.exhibit[i] - 79,
        roomData.exhibit[i] - 78,
        roomData.exhibit[i] - 38,
        roomData.exhibit[i] + 2,
        roomData.exhibit[i] + 42,
        roomData.exhibit[i] + 82,
        roomData.exhibit[i] + 81,
        roomData.exhibit[i] + 80,
        roomData.exhibit[i] + 79,
        roomData.exhibit[i] + 78,
        roomData.exhibit[i] + 38,
        roomData.exhibit[i] - 2,
        roomData.exhibit[i] - 42,
      ];
    }

    // User entering room square / First user move
    let firstMove;

    if (transferedData.leftSideWallArray.includes(roomData.entrance)) {
      firstMove = userMoveDirection.right + roomData.entrance;
      console.log('Left Entrance');
    } else if (transferedData.rightSideWallArray.includes(roomData.entrance)) {
      firstMove = userMoveDirection.left + roomData.entrance;
      console.log('Right entrance');
    } else if (transferedData.topSideWallArray.includes(roomData.entrance)) {
      firstMove = userMoveDirection.down + roomData.entrance;
      console.log('Top Entrance');
    } else {
      firstMove = userMoveDirection.up + roomData.entrance;
      console.log('Bot Entrance');
    }

    console.log(`User's first move is: ${firstMove}`);

    // Squares for users exiting the room
    let exitSquares = [];
    if (transferedData.leftSideWallArray.includes(roomData.exit)) {
      exitSquares = [
        roomData.exit + 1,
        roomData.exit + 2,
        roomData.exit - 38,
        roomData.exit - 39,
        roomData.exit + 41,
        roomData.exit + 42,
      ];
      console.log('Left exit');
    } else if (transferedData.rightSideWallArray.includes(roomData.exit)) {
      exitSquares = [
        roomData.exit - 1,
        roomData.exit - 2,
        roomData.exit + 38,
        roomData.exit + 39,
        roomData.exit - 41,
        roomData.exit - 42,
      ];
      console.log('Right exit');
    } else if (transferedData.topSideWallArray.includes(roomData.exit)) {
      exitSquares = [
        roomData.exit + 39,
        roomData.exit + 40,
        roomData.exit + 41,
        roomData.exit + 79,
        roomData.exit + 80,
        roomData.exit + 81,
      ];
      console.log('Top exit');
    } else {
      exitSquares = [
        roomData.exit - 39,
        roomData.exit - 40,
        roomData.exit - 41,
        roomData.exit - 79,
        roomData.exit - 80,
        roomData.exit - 81,
      ];
      console.log('Bot exit');
    }

    console.log(`Entrance is: ${roomData.entrance}`);
    console.log(`Exit is: ${roomData.exit}`);
    console.log(`The exit squares are: ${exitSquares}`);

    let groupsLength = transferedData.typeOfGroup.length;

    // Number of groups that enter the room
    for (let i = 0; i < groupsLength; i++) {
      // Logic
      const simulationDataOfGroup = {
        accessPointConnected: null,
        groupMovement: [],
        exhibitsVisited: [],
      };

      // Manually push users towards the exit
      let lastMove1 =
        exitSquares[Math.floor(Math.random() * exitSquares.length)];
      let lastMove2 =
        exitSquares[Math.floor(Math.random() * exitSquares.length)];
      // Maximum movements of a user
      const numberOfMoves = Math.floor(Math.random() * (40 - 20 + 1) + 20);
      console.log(`Number of moves: ${numberOfMoves}`);

      arrayOfGroups[i] = new Object(simulationDataOfGroup);
      arrayOfGroups[i].groupMovement[0] = firstMove;

      for (let j = 0; j < numberOfMoves; j++) {
        let stepX = 2;
        let stepY = 80;
        // Check possible next move
        let previousMove = arrayOfGroups[i].groupMovement[j];

        let leftMove, rightMove, upMove, botMove;

        // Navigate user throughout the room
        do {
          leftMove = previousMove - stepX;
          rightMove = previousMove + stepX;
          upMove = previousMove - stepY;
          botMove = previousMove + stepY;

          stepX = stepX + 2;
          stepY = stepY + 80;
        } while (
          !simSquares.includes(leftMove) &&
          !simSquares.includes(rightMove) &&
          !simSquares.includes(upMove) &&
          !simSquares.includes(botMove)
        );

        // Check for the next possible move
        // according to existing exhibits, accessPoints and walls
        let possibleMoves = [];
        if (simSquares.includes(leftMove)) {
          possibleMoves.push(leftMove);
        }
        if (simSquares.includes(rightMove)) {
          possibleMoves.push(rightMove);
        }
        if (simSquares.includes(upMove)) {
          possibleMoves.push(upMove);
        }
        if (simSquares.includes(botMove)) {
          possibleMoves.push(botMove);
        }

        // Randomly select the next move
        let possibleNextMove;
        do {
          possibleNextMove =
            possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        } while (!simSquares.includes(possibleNextMove));

        // Executing user's next move
        let nextMove = possibleNextMove;
        arrayOfGroups[i].groupMovement[j + 1] = nextMove;

        // Check if an exhibit got visited and push it in the
        // object
        for (let z = 0; z < exhibitsArrayLength; z++) {
          if (exhibitRange[z].includes(nextMove)) {
            arrayOfGroups[i].exhibitsVisited.push(roomData.exhibit[z]);
          }
        }
        arrayOfGroups[i].exhibitsVisited = [
          ...new Set(arrayOfGroups[i].exhibitsVisited),
        ];
      }
      arrayOfGroups[i].groupMovement.push(lastMove1);
      arrayOfGroups[i].groupMovement.push(lastMove2);

      // Check if the user visits an exhibit while exiting the room
      for (let z = 0; z < exhibitsArrayLength; z++) {
        if (exhibitRange[z].includes(lastMove1)) {
          arrayOfGroups[i].exhibitsVisited.push(roomData.exhibit[z]);
        }

        if (exhibitRange[z].includes(lastMove2)) {
          arrayOfGroups[i].exhibitsVisited.push(roomData.exhibit[z]);
        }
      }
      
      // Create a set for all unique exhibits that got visited
      arrayOfGroups[i].exhibitsVisited = [
        ...new Set(arrayOfGroups[i].exhibitsVisited),
      ];

      console.log(arrayOfGroups);

      //Find deez nigga Pythagoras
      
      //Find in x axis what is the max range of the line

      let tempX=2;
      let rangeX;
      
      
        
      for(let b=38; b>=22; b--){
          rangeX = b-tempX;  

          if(b===roomData.width){
            break;
          }
          tempX = tempX+1;
  
      }

      //Find in y axis what is the max range of the line

      let tempY=2;
      let rangeY;
      
        
      for(let b=23; b>=14; b--){
          rangeY = b-tempY;  

          if(b===roomData.height){
            break;
          }
          tempY = tempY+1;
  
      }
      
      

      
      //Find in which iteration of x axis we find the position of Access Point or Group of users

      let foundAccessPoint=[];
      for(let o=0; o<roomData.accessPoint.length; o++){
        foundAccessPoint[0]=false;
        
      }
      
      let firstSquare = simSquares[0];
      let xOfAccessPoint= [];

      for(let o=0; o<roomData.accessPoint.length; o++){
        do{

         
          let numberOfIterations = 0;
          
          for(; firstSquare<firstSquare + rangeX ; firstSquare++){
            numberOfIterations++;  
            
            
            
            if(roomData.accessPoint[o] === firstSquare){
              foundAccessPoint[o] = true;
              xOfAccessPoint[o]= numberOfIterations;
  
              break;
            }
            console.log(firstSquare);
            
          }
          firstSquare = firstSquare + 40;
          console.log(firstSquare);
          numberOfIterations=0;
          
        }while(foundAccessPoint[o] === false);
        
      }


      console.log(xOfAccessPoint);
      
      
      //Find in which iteration of y axis we find the position of Access Point or Group of users

      //Two Times Nibba

      //(Distance between Access Point and Group of Users) = (x2−x1)2+(y2−y1) με ρίζες και κόλπα


    }
  };

  runSimulationRoom();
};
