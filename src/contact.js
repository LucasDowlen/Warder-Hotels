import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {

        e.preventDefault();
        console.log("Test Email should have sent");

        emailjs.send("service_1t0bv3u","template_5m7a7z8",{
            email: email,
            name: name,
            message: message,
            }, 'user_qbyWWEXaRjedngC1W71GA');

        setEmail('');
        setName('');
        setMessage('');
    }

    const updateInput = (e, updateType) => {
        
        if(updateType === 0){
            setName(e.target.value);
        }

        if(updateType === 1){ 
            setEmail(e.target.value);
        }

        if(updateType === 2){
            setMessage(e.target.value);
        }


        console.log(name);
        console.log(email);
        console.log(message);
    }

    return (

        <div>
            {/* action="./contactform.php" method="post"*/}
            
            <form id="contact-form" onSubmit={sendEmail}>
                <input type="text" name="name" placeholder=" " value={name} onChange={(e) => updateInput(e, 0)}/>
                <div id="namePlaceholder">Name</div>

                <input type="text" name="mailFrom" placeholder=" " value={email} onChange={(e) => updateInput(e, 1)} />
                <div id="mailFromPlaceholder">Email</div>

                <input type="text" name="message" id="email-message" placeholder=" " value = {message} onChange={(e) => updateInput(e, 2)} />
                <div id="emailMessagePlaceholder">Message</div>

                <button type="submit" name="submitButton">Send</button>
            </form>
{/* 
            <h1>text</h1> */}
        </div>
    )
}

export default Contact