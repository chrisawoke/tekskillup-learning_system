import { useState, useEffect  } from 'react';
import InputIcon from "../login/Input";
import { MdPhone } from 'react-icons/md';

 const InputCheckbox = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  const [errors, setErrors] = useState({
    phone: '',
    message: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      phone: '',
      message: '',
    };

    if (phone.trim() === '' || !/^\+?\d{10,}$/.test(phone)) {
      newErrors.phone = 'Valid phone number is required';
      valid = false;
    }

    
    if (message.trim() === '') {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  useEffect(() => {
  }, [ phone,  message]);



     // track if the checkbox is checked
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

   const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    // Process the file here (e.g., upload to a server)
  };



    return(
            <form>
            <div className="mt-8 flex flex-row">
            <input type="checkbox" onChange={handleCheckboxChange} className="w-10 h-5 bg-gray-300 mt-0.5"/>
            <label className="text-lg">Apply to become an instructor</label>
        </div> 
        {isChecked && (
          <div className="border-t pt-4 mt-4 border-gray-200">
            <div className="flex-column mt-5 w-[100%]">
            <label className="font-semibold text-xl">Phone</label>
            <InputIcon
             icon={<MdPhone className="h-5 w-6 text-gray-500" />}
              type="phone"
              style={{ backgroundColor: 'rgba(241, 241, 243, 1)'}}
              className="focus:bg-black-100 mt-2 border-group w-[100%]"
              placeholder="+2341234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            
             <span className="text-red-500">{errors.phone}</span>
          </div>
      <div className="mt-5 flex-column mb-5">
        <InputIcon
          id="file-upload"
          name="file-upload"
          type="file"
          className=""
          onChange={handleFileChange}
        />
    </div>
          <div className="flex-column mt-5" >
          <label className="font-semibold text-xl mb-5">Message</label>
          <textarea
            type="text"
            placeholder="Enter your message here.."
            style={{ backgroundColor: 'rgba(241, 241, 243, 1)'}}
            className="py-3 px-3 pl-10 border text-lg  bg-gray-200 rounded-xl text-gray-700 focus:outline-none focus:shadow-outline w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span className="text-red-500">{errors.message}</span>
        </div>
          </div>
        )}
            </form>
    )
 }


 export default InputCheckbox;