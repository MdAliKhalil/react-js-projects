import React, { useState } from 'react'
import { toast } from 'react-toastify'

const NewsletterForm = () => {
    const [result, setResult] = useState("");

    const emailHandler = async (event) => {
        event.preventDefault();
        setResult("Subscribing...");
        const formData = new FormData(event.target);

        formData.append("access_key", "036cdeb3-a482-4bd5-8850-63e64e4af808");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Subscribed Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("");
            toast.error(data.message);
        }
    };

    return (
        <form onSubmit={emailHandler}>
            <div className='flex gap-2'>
                <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' type="email" placeholder='Enter your email' name="Email" required />
                <button className='py-2 px-4 rounded bg-blue-500 text-white border border-blue-500'>{result ? result : 'Subscribe'}</button>
            </div>
        </form>
    )
}

export default NewsletterForm