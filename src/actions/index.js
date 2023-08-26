async function fetchdata() {
    const res = await fetch('/add-streaks', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })

    if (res.status == 200) {
        const data = await res.json()
    }
}

fetchdata()

export function createStreak(data) {
    console.log(data)
    return {
        type: 'createStreak',
        data
    }
}

// export function removeStreak()
// {
//     return {
//         type : 'removeStreak',
//         data
//     }
// }