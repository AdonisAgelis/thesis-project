import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useSelector, useDispatch } from 'react-redux';
import {
  dropSecondColumn,
  sendRoomDataFromLoad,
  resetRoom,
  resetTypeOfDraggable,
  roomIsLoaded,
} from '../actions/workstation';

import axios from 'axios';

import '../styles/workstation.css';

const SimPagination = () => {
  const rooms = useSelector(state => state.messageReducer.data);

  const dispatch = useDispatch();

  // const getJSONData = axios
  //   .get('http://localhost:8082/api/auth/simulation')
  //   .then(response => {
  //     const data = response.data;
  //     return data;
  //   })
  //   .catch(() => {
  //     console.log('Data NOT here bro');
  //   });

  // const getMongoData = async () => {
  //   const simulations = await getJSONData;
  //   console.log(simulations);
  // };

  // getMongoData();

  // useEffect(() => {
  //   dispatch(resetRoom());
  //   dispatch(resetTypeOfDraggable());
  // });

  let names = rooms?.map(room => room.nameOfTemplate);

  let heights = rooms?.map(room => room.height);

  let widths = rooms?.map(room => room.width);

  let accessPoints = rooms?.map(room => room.accessPointBadge);

  let exhibits = rooms?.map(room => room.exhibitBadge);

  const handleRowClick = roomId => {
    const {
      entrance,
      exit,
      accessPoint,
      exhibit,
      wall,
      positionThatWillUndo,
      counterAccessPoint,
      counterExhibit,
      counterWall,
      counterAllPositions,
      allPositions,
      entranceBadge,
      exitBadge,
      accessPointBadge,
      exhibitBadge,
      height,
      width,
      isResized,
      counterAPFromSquareComponent,
      counterExhibitFromSquareComponent,
      counterWallFromSquareComponent,
      accessPointPositionArrayFromSquareComponent,
      exhibitPositionArrayFromSquareComponent,
      wallPositionArrayFromSquareComponent,
      nameOfTemplate,
      userId,
    } = rooms[roomId];

    dispatch(
      sendRoomDataFromLoad(
        entrance,
        exit,
        accessPoint,
        exhibit,
        wall,
        positionThatWillUndo,
        counterAccessPoint,
        counterExhibit,
        counterWall,
        counterAllPositions,
        allPositions,
        entranceBadge,
        exitBadge,
        accessPointBadge,
        exhibitBadge,
        height,
        width,
        isResized,
        counterAPFromSquareComponent,
        counterExhibitFromSquareComponent,
        counterWallFromSquareComponent,
        accessPointPositionArrayFromSquareComponent,
        exhibitPositionArrayFromSquareComponent,
        wallPositionArrayFromSquareComponent,
        nameOfTemplate,
        userId
      )
    );
    dispatch(dropSecondColumn());
    dispatch(roomIsLoaded());
  };

  let data = [];
  for (let roomId = 0; roomId < names?.length; roomId++) {
    data[roomId] = {
      name: names[roomId],
      height: heights[roomId],
      width: widths[roomId],
      accessPoints: accessPoints[roomId],
      exhibits: exhibits[roomId],
      clickEvent: () => handleRowClick(roomId),
    };
  }

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,

        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Height',
        field: 'height',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Width',
        field: 'width',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Access Points (Num)',
        field: 'accessPoints',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Exhibits (Num)',
        field: 'exhibits',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: data,
  });

  return (
    <MDBDataTableV5
      striped
      hover
      entriesOptions={[5]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      fullPagination
      theadTextWhite
      tbodyTextWhite
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0)',
      }}
    />
  );
};

export default SimPagination;
