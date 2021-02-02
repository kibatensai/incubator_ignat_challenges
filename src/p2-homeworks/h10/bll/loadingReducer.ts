const LOADING = 'LOADING'

type LoadingActionType = {
    type: typeof LOADING
    isLoading: boolean
}

const initState = {
    isLoading: false
};

type InitStateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {...state,
                isLoading: action.isLoading};
        }
        default: return state;
    }
};


export const loadingAC = (isLoading: boolean): LoadingActionType => ({type: LOADING, isLoading}); // fix any