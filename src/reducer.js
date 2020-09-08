export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // Remove after development
    // token: "BQBPOYgX3rhUQEjmyeLl0-V2fFf5dNBUMz6ptkMXHI3wJCpU8VhdAR5Gt757I85zmavSNCOs4FwmfhBh-IJQTZG_qg_FCxPyyv0m9RS3bnHPG1HpJbNG7SxbT1Kzj-WnwQ7SVKmCowxZR5bsejwBYCyQwfWfTRRETSk7c7uf6HEtVVr-"
};

const reducer = (state, action) => {

    // console.log("ACTION>>>",action);
    
    // action-> type, [payload]

    switch(action.type){
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
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default: return state;
    }
}

export default reducer;