const appReducer = (state =
                     {visibleMassLength:10,loaderSpin:false,moreButton:false}, action) => {
    switch (action.type) {
        case 'VISIBLE-MASS-LENGTH': {
            const prevVisibleMassLength = state.visibleMassLength
            return {...state, visibleMassLength: prevVisibleMassLength+5}
        };

        case 'LOADER-SPIN': {
            return {...state,loaderSpin: !state.loaderSpin};
        }
        case 'MORE-BUTTON':
            return {...state,moreButton: !state.moreButton}
        case 'INITIAL-STATE':
            return {...state,visibleMassLength: 10}
        default:
            return state;
    }

};

export default appReducer;