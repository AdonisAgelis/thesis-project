const dropMidColumnReducer = (state = 'default', action) => {
  switch (action.type) {
    case 'DROP_SECOND_COLUMN':
      return 'new';
    case 'DROP_SECOND_COLUMN_LOAD':
      return 'load';
    default:
      return state;
  }
};

export default dropMidColumnReducer;
