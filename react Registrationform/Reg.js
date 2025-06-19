function Register() {
    function validateForm() {
        let isValid = true;

        const phno = document.getElementById("phno").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const phnoError = document.getElementById("phnoError");
        const emailError = document.getElementById("emailError");
        const passError = document.getElementById("passError");

        phnoError.innerText = "";
        emailError.innerText = "";
        passError.innerText = "";

        // Phone number validation (10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phno)) {
            phnoError.innerText = "Enter a valid 10-digit phone number";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!emailPattern.test(email)) {
            emailError.innerText = "Enter a valid email address";
            isValid = false;
        }

        // Password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/;
        if (!passwordPattern.test(password)) {
            passError.innerText = "Password must include uppercase, lowercase, number & special character";
            isValid = false;
        }

        return isValid;
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); validateForm(); }}>
            <fieldset style={{backgroundColor:'blue'}} ><b>
                <div>
                <legend align="center"><b>REGISTRATION FORM</b></legend><br />
                <label >Name <span style={{ color: 'red' }}>*</span>:</label>
                <input type="text" placeholder="First name" autoFocus required /><br /><br /></div>

                <div>
                <label>Number <span style={{ color: 'red' }}>*</span>:</label>
                <input type="text" id="phno" placeholder="Phone number" />
                <span id="phnoError" style={{ color: 'red' }}></span><br /><br /></div>

                <div>
                <label>E-mail <span style={{ color: 'red' }}>*</span>:</label>
                <input type="email" id="email" placeholder="Mail id" />
                <span id="emailError" style={{ color: 'red' }}></span><br /><br /></div>

                <div>
                <label>Password :</label>
                <input type="password" id="password" placeholder="Password" />
                <span id="passError" style={{ color: 'red' }}></span><br /><br /></div>

                <div>
                <label>Gender :</label>
                <label>Male</label>
                <input type="radio" name="h" />
                <label>Female</label>
                <input type="radio" name="h" />
                <label>Other</label>
                <input type="radio" name="h" /><br /><br /></div>

                <div>
                <label>Date of Birth :</label>
                <input type="date" /><br /><br /></div>

                <div>
                <label>Address <span style={{ color: 'red' }}>*</span>:</label>
                <textarea id="Address" name="Address" cols="50" rows="2" required></textarea><br /><br/></div>

                <label>Person's Role :</label>
                <select>
                    <option value="Customer">Customer</option>
                    <option value="Staff">Staff</option>
                    <option value="Chef">Chef</option>
                </select><br /><br />

                <label><input type="checkbox" /> Terms and Conditions</label><br /><br />

                <p align="center"><button type="submit">Submit</button></p>
                </b>
            </fieldset>
        </form>
    );
}
export default Register;
