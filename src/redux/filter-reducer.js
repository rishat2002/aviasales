
const reducer = (state = {select:'optimal'}, action) => {
    switch (action.type) {
      case 'SELECT_CHEAP':
        return {select:'cheap'};
  
      case 'SELECT_FASTER':
        return {select:'faster'};
      
      case 'SELECT_OPTIMAL':  
        return {select:'optimal'}

      default:
        return state;
    }

  };
  
  export default reducer;