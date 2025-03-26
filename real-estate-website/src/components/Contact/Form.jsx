import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = () => {
    const [result, setResult] = useState("");

    const formHandler = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "036cdeb3-a482-4bd5-8850-63e64e4af808");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("");
            toast.error(data.message);
        }
    };

    return (
        <div>
            <form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={formHandler}>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4 my-6 md:my-0'>
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                    </div>
                </div>
                <div className='w-full my-0 md:my-6 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder='Message' required></textarea>
                </div>
                <div className='text-center'>
                    <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded mt-6 md:mt-0'>{result ? result : 'Send Message'}</button>
                </div>
            </form>
        </div>
    )
}

export default Form