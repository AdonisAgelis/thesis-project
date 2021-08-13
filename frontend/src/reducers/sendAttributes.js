const initialState = {
    typeOfGroup:[],
    numberOfPeopleInGroup:[]
  };
  
  const sendAttributesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_ATTRIBUTES':
        state.typeOfGroup.push(action.payloadX);
        state.numberOfPeopleInGroup.push(action.payloadY);
        return state;
      default:
        return { ...state };
    }
  };
  
  export default sendAttributesReducer;
  