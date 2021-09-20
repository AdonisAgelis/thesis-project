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

    const simulationDataOfGroup = {
      accessPointConnected: null,
      groupMovement: [],
      exhibitsVisited: [],
    };

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

    // Exhibit visited range
    let visitedExhibitSquares = [];

    let exhibitsArrayLength = roomData.exhibit.length;

    for (let i = 0; i < exhibitsArrayLength; i++) {
      visitedExhibitSquares[i] = [
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

      console.log(
        `Exhibit number ${i + 1} visited range: ${visitedExhibitSquares[i]}`
      );
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

    let lastMove1 = exitSquares[Math.floor(Math.random() * exitSquares.length)];
    let lastMove2 = exitSquares[Math.floor(Math.random() * exitSquares.length)];

    // Number of groups that enter the room
    for (let i = 0; i < transferedData.typeOfGroup.length; i++) {
      // Logic
      // Maximum movements of a user
      const numberOfMoves = Math.floor(Math.random() * (20 - 5 + 1) + 5);
      console.log(`Number of moves: ${numberOfMoves}`);

      arrayOfGroups[i] = new Object(simulationDataOfGroup);
      arrayOfGroups[i].groupMovement[0] = firstMove;

      let arrayOfNextMoves = [];

      for (let j = 0; j < numberOfMoves; j++) {
        let stepY = 2;
        let stepX = 80;
        // Check possible next move
        let previousMove = arrayOfGroups[i].groupMovement[j];

        let leftMove, rightMove, upMove, botMove;

        do {
          leftMove = previousMove - stepY;
          rightMove = previousMove + stepY;
          upMove = previousMove - stepX;
          botMove = previousMove + stepX;
          // console.log(leftMove);
          // console.log(rightMove);
          // console.log(upMove);
          // console.log(botMove);r

          stepY = stepY + 2;
          stepX = stepX + 80;
        } while (
          !simSquares.includes(leftMove) &&
          !simSquares.includes(rightMove) &&
          !simSquares.includes(upMove) &&
          !simSquares.includes(botMove)
        );

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
          // console.log(`Possible Next Move is: ${possibleNextMove}`);
        } while (!simSquares.includes(possibleNextMove));

        let nextMove = possibleNextMove;
        // console.log(`Next move is: ${nextMove}`);
        arrayOfGroups[i].groupMovement[j + 1] = nextMove;

        for (let z = 0; z < exhibitsArrayLength; z++) {
          if (visitedExhibitSquares[z].includes(nextMove)) {
            arrayOfGroups[i].exhibitsVisited.push(roomData.exhibit[z]);
          }
        }
      }
      console.log(`Exhibits visited: ${simulationDataOfGroup.exhibitsVisited}`);
      arrayOfGroups[i].groupMovement.push(lastMove1);
      arrayOfGroups[i].groupMovement.push(lastMove2);
      console.log(arrayOfGroups);
    }
    // console.log(
    //   `last consola loga ${Object.values(arrayOfGroups.groupMovement)}`
    // );
  };

  runSimulationRoom();
};
