import { useState, useEffect } from 'react'

function NewPet() {




    return(
        <div>
            <h1>Create A New Pet Profile</h1>
            <form>
                <label for="name">
                    Name of pet:
                    <input type="text" name="name" />
                </label>
                <label for="birth_date">
                    BirthDate of pet:
                    <input type="date" name="birth_date" />
                </label>
                <label for="health_issues">
                    Any Health issues?
                    <input type="text" name="health_issues" />
                </label>
                <label>
                    Comments:
                    <input type="text" name="comments" />
                </label>
            </form>
        </div>
    )
}

export default NewPet