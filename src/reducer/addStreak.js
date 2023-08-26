const initialState = []

export default function streaks(state = initialState, action)
{
    switch(action.type)
    {
        case 'createStreak':
            console.log('reducer : ' + state)
            // state = state.filter((val) => {
            //     if(action.data.id == val.id)
            //         return null
            //     else
            //         return action.data
            // })
            return [...action.data]

        default:
            return state
    }
}