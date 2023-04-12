import React from "react"
import Availablemeals from "./AvailableMeals"
import Summary from "./Summary"

const Meals = () => {
    return <React.Fragment>
        <Summary />
        <Availablemeals />
    </React.Fragment>
}

export default Meals