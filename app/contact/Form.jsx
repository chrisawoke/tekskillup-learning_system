"use client"

import { useState, useEffect } from 'react'; 
  



const Form = () => {

      // FORM VALIDATION
        const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // State for error messages
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Form validation logic
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };

    // Example validation rules, you can modify these according to your requirements
    if (firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
      valid = false;
    }

    if (lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }

    if (email.trim() === '' || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (phone.trim() === '' || !/^\+?\d{10,}$/.test(phone)) {
      newErrors.phone = 'Valid phone number is required';
      valid = false;
    }

    if (subject.trim() === '') {
      newErrors.subject = 'Subject is required';
      valid = false;
    }

    if (message.trim() === '') {
      newErrors.message = 'Message is required';
      valid = false;
    }


    // Add more validation rules for other fields

    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
  }, [firstName, lastName, email, phone, subject, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form submitted successfully');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <main className="w-[100%] font-inter py-10">
      <div>
        <h2 className="text-2xl font-bold md:text-3xl" >Send a message</h2>
      </div>
      <form className=""  onSubmit={handleSubmit} >
        <div className="flex justify-start items-start gap-5 md:w-[100%]">
          <div className="flex flex-col mt-5 md:w-[50%]">
            <label className="">FirstName</label>
            <input
              type="text"
              style={{ backgroundColor: 'rgba(241, 241, 243, 1)'}}
              className="focus:bg-black-100 mt-2 border border-solid border-gray-400 p-2 rounded w-[100%]"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span className="text-red-500">{errors.firstName}</span>
          </div>
          <div className="flex flex-col mt-5 md:ml-5 md:w-[50%]">
            <label className="">LastName</label>
            <input
              type="text"
              style={{ backgroundColor: 'rgba(241, 241, 243, 1)'}}
              className="focus:bg-black-100 mt-2 border border-solid border-gray-400 p-2 rounded w-[100%]"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span className="text-red-500">{errors.lastName}</span>
          </div>
        </div>
        <div className="flex justify-start items-start gap-5 md:w-[100%]">
          <div className="flex flex-col mt-5 md:w-[50%]">
            <label className="">Email</label>
            <input
              type="email"
              style={{ backgroundColor: 'rgba(241, 241, 243, 1)'}}
              className="focus:bg-black-100 mt-2 border border-solid border-gray-400 p-2 rounded w-[100%]"
              placeholder="JohnDoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-red-500">{errors.email}</span>
          </div>
          <div className="flex flex-col mt-5 md:ml-5 md:w-[50%]">
            <label className="">Phone</label>
            <input
              type="number"
              style={{ backgroundColor: 'rgba(241, 241, 243, 1)'}}
              className="focus:bg-black-100 mt-2 border border-solid border-gray-400 p-2 rounded w-[100%]"
              placeholder="+234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
             <span className="text-red-500">{errors.phone}</span>
          </div>
        </div>
        <div className="mt-5">
          <label>Subject</label>
          <input
            type="text"
            style={{ backgroundColor: 'rgba(241, 241, 243, 1)'}}
            className="focus:bg-black-100 mt-2 border border-solid border-gray-400 p-2 rounded w-[100%]"
            placeholder="Enter your Subject..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <span className="text-red-500">{errors.subject}</span>
        </div>
        <div className="flex flex-col mt-5">
          <label className="">Message</label>
          <textarea
            type="text"
            placeholder="Enter your message here.."
            style={{ backgroundColor: 'rgba(241, 241, 243, 1)'}}
            className="focus:bg-black-100 mt-2 h-[100px] border border-solid border-gray-400  p-2 rounded w-[100%]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span className="text-red-500">{errors.message}</span>
        </div>
        <div className="mt-10">
        <button className="bg-primary_700 text-white sm:px-8 py-[8px] px-10 w-[100%] sm:text-base text-[12px] border border-primary_700 hover:text-primary_700 hover:bg-white rounded-[7px] transition duration-150 ease-in-out cursor-pointer">Send Your Message</button>
        </div>
      </form>
    </main>
  );
};

export default Form;
