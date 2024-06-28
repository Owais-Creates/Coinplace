import React, { useState, useEffect } from 'react';
import "./SignUp.css";
import woman from "../../assets/woman.png";
import { MdArrowOutward } from "react-icons/md";

const SignUp = () => {
  const inputs = [
    {
      label: "your first name",
      type: "text",
      placeholder: "Enter your first name...",
      btn: "Next",
      error: "Your first name should be more than 5 characters long",
      validate: (value) => value.length > 3,
    },
    {
      label: "your last name",
      type: "text",
      placeholder: "Enter your last name...",
      btn: "Next",
      error: "Your last name should be more than 2 characters long",
      validate: (value) => value.length > 2,
    },
    {
      label: "your email",
      type: "email",
      placeholder: "Enter your email...",
      btn: "Next",
      error: "Please enter a valid email address",
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    },
    {
      label: "your password",
      type: "password",
      placeholder: "Enter your password...",
      btn: "Submit",
      error: "Passowrd should be longer than 6 words",
      validate: (value) => value.length > 6,
    }
  ];

  const [current, setCurrent] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [login, setLogin] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs[current].validate(inputValue)) {
      setLogin((prev) => [...prev, inputValue]);
      setCurrent((prev) => prev + 1);
      setInputValue("");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <>
      {current < inputs.length ? (
        <div className='div'>
          <div className='form-container'>
            <form>
              <label>What is <br />{inputs[current].label}</label>
              <input
                onChange={handleInput}
                value={inputValue}
                type={inputs[current].type}
                placeholder={inputs[current].placeholder}
                required
              />
              <p className='error'>{error && inputs[current].error}</p>
              <button
                onClick={handleSubmit}
                className='signup-btn'
              >
                {inputs[current].btn} <MdArrowOutward className='arrow' />
              </button>
            </form>
            <div className="form-image">
              <img src={woman} alt="" />
            </div>
          </div>
        </div>
      ) : (

        <>
          <h1>Signup successfull</h1>
          <div>
            {login.map((item, index) => (
              <p key={index} >{item}</p>
            ))}
          </div>
          <p>Password: Shh...🤫🤫</p>
        </>

      )}
    </>
  );
};

export default SignUp;
