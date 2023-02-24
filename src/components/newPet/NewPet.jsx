import { useState, useEffect } from 'react'

function NewPet() {




    return(
        <body>
        <div>
            <section class="section container">
            <form name="contact" id="contact-form">
            <h1 class="title" id="contact">Create A New Pet Profile</h1>
            <div class="field">
                <label class="label" for="name">Pet Name</label>
                <div class="control">
                    <input
                    required
                    class="input"
                    type="text"
                    placeholder="name"
                    name="name"
                    />
                </div>
            </div>

            <div class="field">
                <label class="label" for="Birthdate">Date of Birth</label>
                <div class="control has-icons-left">
                    <input
                    class="input"
                    type="date"
                    required
                    placeholder="Birthday input"
                    name="Birthdate"
                    />
                </div>
            </div>

            <div class="field">
                <label class="label" for="healthIssues">Health Issues?</label>
                <div class="healthIssues">
                    <input
                    class="input"
                    type="text"
                    required
                    placeholder="Email input"
                    name="healthIssues"
                    />
                </div>
            </div>

            <div class="field">
                <label class="label" for="comments">Anything we should know?</label>
                <div class="comments">
                    <input
                    class="input"
                    type="text"
                    required
                    placeholder="Extra Information"
                    name="comments"
                    />
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </section>
        </div>
        </body>
    )}



export default NewPet