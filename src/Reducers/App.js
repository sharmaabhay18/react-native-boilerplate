import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../Utility/Types';

const initialState = {
  fetching: 'false',
  dog: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state, fetching: true, dog: null, error: null
      };
    case API_CALL_SUCCESS:
      return {
        ...state, fetching: false, dog: action.payload, error: null
      };
    case API_CALL_FAILURE:
      return {
        ...state, fetching: false, dog: null, error: action.payload
      };
    default:
      return state;
  }
};
