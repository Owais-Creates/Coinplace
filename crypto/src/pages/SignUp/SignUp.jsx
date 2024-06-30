import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";
import woman from "../../assets/woman.png";
import tick from "../../assets/tick.png";
import { MdArrowOutward } from "react-icons/md";


const SignUp = () => {

  const navigate = useNavigate();

  const inputs = [
    {
      label: "your first name ?",
      name: "First Name",
      type: "text",
      placeholder: "Enter your first name...",
      btn: "Next",
      error: "Your first name should be more than 5 characters long",
      validate: (value) => value.length > 3,
    },
    {
      label: "your last name ?",
      name: "Last Name",
      type: "text",
      placeholder: "Enter your last name...",
      btn: "Next",
      error: "Your last name should be more than 2 characters long",
      backBtn: "Back",
      validate: (value) => value.length > 2,
    },
    {
      label: "your email ?",
      name: "Email",
      type: "email",
      placeholder: "Enter your email...",
      btn: "Next",
      error: "Please enter a valid email address",
      backBtn: "Back",
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    },
    {
      label: "your password ?",
      name: "Password",
      type: "password",
      placeholder: "Enter your password...",
      btn: "Submit",
      backBtn: "Back",
      error: "Password should be longer than 6 characters",
      validate: (value) => value.length > 6,
    }
  ];

  const [current, setCurrent] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [count, setCount] = useState(10);
  const [login, setLogin] = useState({
    "First Name": "",
    "Last Name": "",
    "Email": "",
    "Password": ""
  });

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs[current].validate(inputValue)) {
      setLogin(prev => ({ ...prev, [inputs[current].name]: inputValue }));
      setCurrent(prev => prev + 1);
      setInputValue("");
    } else {
      setError(true);
    }
  };

  const handleBack = (e) => {
    e.preventDefault()
    setCurrent(prev => prev - 1);
    setInputValue(login[inputs[current - 1].name]);
  };

  useEffect(() => {
    if (current < inputs.length) {
      setInputValue(login[inputs[current].name]);
    }
  }, [current]);

  useEffect(() => {
    let timer;

    if (current === inputs.length) {
      timer = setInterval(() => {
        setCount(prevCount => {
          if (prevCount > 0) {
            return prevCount - 1;
          } else {
            clearInterval(timer);
            return prevCount;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [current]);

  useEffect(() => {
    if (count === 0) {
      navigate("/");
    }
  }, [count, navigate]);

  return (
    <>
      {current < inputs.length ? (
        <div className='div'>
          <div className='form-container'>
            <form>
              <label className='label'>What is <br /><span>{inputs[current].label}</span></label>
              <input
                onChange={handleInput}
                value={inputValue}
                type={inputs[current].type}
                placeholder={inputs[current].placeholder}
              />
              <p className='error'>{error && inputs[current].error}</p>
              <button
                onClick={handleSubmit}
                className='signup-btn'
              >
                {inputs[current].btn} <MdArrowOutward className='arrow' />
              </button>

              {current > 0 && (
                <button onClick={(e) => handleBack(e)} className='back-btn'>
                  <MdArrowOutward className='back-arrow' /> {inputs[current].backBtn}
                </button>
              )}
            </form>
            <div className="form-image">
              <img src={woman} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className='login-credentials-container'>
          <h1>Signup successful <img src={tick} alt="" /> </h1>
          <div className='value-container-div'>
            {Object.entries(login).map(([key, value], index) => (
              <p className='login-p' key={index}>
                <span>{key}:</span> &nbsp; {key === "Password" ? "Shh...🤫🤫" : value}
              </p>
            ))}
          </div>
          <p className='redirect-p'>Success... Taking you to the homepage in {count} ...</p>
        </div>
      )}
    </>
  );
};

export default SignUp;
