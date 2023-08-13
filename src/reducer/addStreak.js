const initialState = []

export default function streaks(state = initialState, action)
{
    switch(action.type)
    {
        case 'createStreak':
            // console.log("reducer : ", state)
            return [...state, action.data]

        default:
            return state
    }
}