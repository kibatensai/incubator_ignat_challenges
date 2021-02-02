export type SortNamesActionType = {
    type: 'sort',
    payload: string
}

export type CheckAgeActionType = {
    type: 'check'
    payload: number
}

export type ActionsType = SortNamesActionType
                        | CheckAgeActionType

export type ObjectType = {
    _id: number,
    name: string,
    age: number
}


export const homeWorkReducer = (state: any, action: ActionsType): Array<ObjectType> => {
    switch (action.type) {
        case "sort": 
            if(action.payload === 'up') { 
                return [...state.sort((first: any, next: any) => {
                    let firstName = first.name.toLowerCase()
                    let nextName = next.name.toLowerCase()
                    if(firstName < nextName) {
                        return -1
                    } else if(firstName > nextName) {
                        return 1
                    } else {
                        return 0
                    }     
                })]
            } else if (action.payload === 'down') {
                return [...state.sort((first: any, next: any) => {
                    let firstName = first.name.toLowerCase()
                    let nextName = next.name.toLowerCase()
                    if(firstName > nextName) {
                        return -1
                    } else if(firstName < nextName) {
                        return 1
                    } else {
                        return 0
                    }
                })]
            }
        case "check": 
            return state.filter((person: any) => person.age >= action.payload)
        default: return state
    }
};

export const SortNamesAC = (payload: string): SortNamesActionType => {
    return { type: 'sort', payload }
}

export const CheckAgeAC = (payload: number): CheckAgeActionType => {
    return { type: 'check', payload }
}
