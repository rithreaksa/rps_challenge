import initialState from '../store/initialState';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_NAME':
      return {
        ...state,
        name: action.payload,
      };

    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
