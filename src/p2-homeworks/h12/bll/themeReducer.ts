const APPLY_THEME = 'APPLY-THEME'

type ApplyThemeActionType = {
    type: typeof APPLY_THEME
    theme: string
}

const initState = {
    theme: 'some'
};

type InitStateType = typeof initState

export const themeReducer = (state = initState, action: ApplyThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case APPLY_THEME: {
            return {...state,
                    theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): ApplyThemeActionType => ({type: APPLY_THEME, theme}); // fix any