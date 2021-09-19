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
    const simulationDataOfGroup = {
      accessPointConnected: null,
      groupMovement: [],
      exhibitsVisited: [],
    };

    let arrayOfGroups = [];

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

    // Number of groups that enter the room
    for (let i = 0; i < 1; i++) {
      // Logic
      // Maximum movements of a user
      const numberOfMoves = Math.floor(Math.random() * (20 - 5 + 1) + 5);
      console.log(`Number of moves: ${numberOfMoves}`);

      arrayOfGroups[i] = new Object(simulationDataOfGroup);
      arrayOfGroups[i].groupMovement[0] = firstMove;

      console.log(`First move: ${arrayOfGroups[i].groupMovement[0]}`);

      for (let j = 0; j < numberOfMoves; j++) {
        const x = 2;
        const y = 80;
        // Check possible next move
        let previousMove = arrayOfGroups[i].groupMovement[j];

        let leftMove = previousMove - x;
        let rightMove = previousMove + x;
        let upMove = previousMove - y;
        let botMove = previousMove + y;

        do {} while (
          simSquares.includes(leftMove) ||
          simSquares.includes(rightMove) ||
          simSquares.includes(upMove) ||
          simSquares.includes(botMove)
        );

        let possibleMoves = [leftMove, rightMove, upMove, botMove];

        // Randomly select the next move
        let nextMove =
          possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

        console.log(`Next move is: ${nextMove}`);
      }
    }
  };

  runSimulationRoom();
};
