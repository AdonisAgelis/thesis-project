const dropMidColumnReducer = (state = 'default', action) => {
  switch (action.type) {
    case 'DROP_SECOND_COLUMN':
      return 'new';
    case 'DROP_SECOND_COLUMN_LOAD':
      return 'load';
    case 'DROP_SECOND_COLUMN_LOAD_SIM':
      return 'load_sim';
    default:
      return state;
  }
};

export default dropMidColumnReducer;
