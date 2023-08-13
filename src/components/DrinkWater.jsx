import React, { useEffect, useState } from 'react'
import "../css/drinkingwater.css"
import LocalDrinkSharpIcon from '@mui/icons-material/LocalDrinkSharp';

function DrinkWater() {

    const [date, setDate] = useState(new Date())
    const [day, setDay] = useState(date.getDay().toString())

    function addStreak() {

        setDate(new Date())

        setDay(() => {
            if (date.getDay() == 1)
                return "Monday"
            else if (date.getDay() == 2)
                return "Tuesday"
            else if (date.getDay() == 3)
                return "Wednesday"
            else if (date.getDay() == 4)
                return "Thursday"
            else if (date.getDay() == 5)
                return "Friday"
            else if (date.getDay() == 6)
                return "Satruday"
            else if (date.getDay() == 7)
                return "Sunday"
        })
    }

    return (
        <div className='drink-main'>
            <div className="heading"><h1><LocalDrinkSharpIcon fontSize="20px" style={{ marginRight: "10px" }} /> Drink Water Streak</h1></div>
            <div className="drink-content drink-container">
                <h1 ><span>⬤</span> Benifits of Drinking Water</h1>
                <div >
                    <p>1. It interferes with the digestion, absorption and transport of nutrients, filters toxins, helps with weight loss, fights acne, cellulite and stretch marks.</p>
                    <p>2. Drinking water properly allows the proper functioning of cells and the body in general.</p>
                    <p>3. Improves the intestine, increases immunity, reduces inflammation, irritation and headaches.</p>
                    <p>4. Drinking water is important, but drinking mineral water in more necessary and beneficial.</p>
                    <p>5. There are countless benefits of drinking water, suffice it to say that it is vital because more than 70% of the human body is made up of water.</p>
                </div>
            </div>

            <div className="create-streak">
                <h2>Wanna make a streak ?</h2>
                <button onClick={addStreak}>Create Streak</button>
                <div className="add-streak"></div>
            </div>
        </div>
    )
}

export default DrinkWater