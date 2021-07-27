export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null, 
    // remove after finished developing"
    token: 'BQD7DOIBMME2pz9zPMNSCuBC1Y02qO0CDvbCTi1TherAzJFHEBlmxK8jH4Jk1DiS5LGOB4bdl8VuzTqhtmdNPWnKH1kY9zpzQkU2P-91eHUrS8Yc3EdsBjbrmsKYGNp0JKhhwBsOtgKKXwEIWDV0URH43iVtjSkN9akVuP5P659IaIqrHd1w'
    ,
}; 

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user,
    }; 

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

      case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };

    default: 
        return state;
  }

}

export default reducer;
