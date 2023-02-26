import "./styles.css"


function NewPet() {
    return(
        <body>
        <div>
            <section class="section container">
            <form name="contact" id="contact-form">
            <h1 class="title" id="contact">Create A New Pet Patient Profile</h1>
         
            <div class="field" >
                <label class="label" className='Name-Input' for="firstName">First Name</label>
                <div class="control">
                    <input
                    required
                    class="input"
                    type="text"
                    autoFocus placeholder="First Name"
                    name="firstName"
                    />
                <label class="label"  className='Name-Input' for="lastName">Last Name</label>
                <div class="control">
                    <input
                    required
                    class="input"
                    type="text"
                    autoFocus placeholder="Last Name"
                    name="lastName"
                    />
                </div>
                </div>

            </div>

            <div class="field">
                <label class="label" for="name">Pet Name</label>
                <div class="control">
                    <input 
                    required
                    class="input"
                    type="text"
                    autoFocus placeholder="Pet's Name"
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
                    autoFocus placeholder="Birthday input"
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
                    autoFocus placeholder="Health Input"
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
                    autoFocus placeholder="Extra Information"
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