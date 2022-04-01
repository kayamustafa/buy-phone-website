import React, { Component } from 'react';
import '../css/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <form action="action_page.php">

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="country">Country</label>
                    <select id="country" name="country">
                        <option value="turkey">Turkey</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                    </select>

                    <label for="subject">Subject</label>
                    <textarea placeholder='Text area'>

                    </textarea>

                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}

export default Contact;