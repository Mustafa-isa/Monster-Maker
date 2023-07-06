import { React, useState ,useEffect } from "react";
import { motion } from "framer-motion";
import "./start.css";
import {  PayPalButtons } from "@paypal/react-paypal-js";
import Header from "../../component/header/Header";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
function Start() {
  // count user

  // 
  const [form, setForm] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    activityLevel: "",
    goal: "",
    routine: "",
    foodPreference: "",
    note: "",
  });
  const [appContext, SetContext] = useState({
    userPaid: false,
    popupResponse: false,
    isLoading: false,
    response: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitRequest = () => {
    const {
      age,
      gender,
      weight,
      height,
      activityLevel,
      goal,
      routine,
      foodPreference,
      note,
    } = form;
    if (
      age === "" ||
      gender === "" ||
      weight === "" ||
      height === "" ||
      activityLevel === "" ||
      goal === "" ||
      routine === "" ||
      foodPreference === "" ||
      foodPreference === "" ||
      note === ""
    ) {
      toast.warn("🦄 please enter inputs Correctely!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      SetContext((state) => {
        return {
          ...state,
          isLoading: true,
        };
      });
      // send request to open ai api
      // const prompt = `Generate a diet plan for a 20-year-old male
      // who is 175 cm tall, weighs 80 kilogram,
      //  has an activity level of
      //  modatery active, and has the following food
      //   preferences: steak.
      //  They have the following health conditions: good.
      //   Their goal is loss
      //  and their routine is morning routine.
      //  1-after writing the diet for me write all calories and grams of carbs, fats and protein existed in the whole diet plan
      //  2-after writing the diet for me write notes to follow like (drink water or vitamns i should take
      //   Please make a hard advanced exercise plan suitable to the diet to help me achieve my goal
      //  `;
      const prompt = `Generate a diet plan for a 20-year-old male who is 175
       cm tall, weighs 80 kilogram, has an activity level of moderately active, 
       and has the following food preferences: steak. They have the following health 
       conditions: good. Their goal is weight loss and their routine is morning routine and give me response in arabic.`;
    

  const payload = {
    prompt
  };
  
  const config = {
    headers: {
      "Authorization": "Bearer YOUR_API_KEY_HERE",
      "Content-Type": "application/json",
    }
  };
  const apiUrl ='https://monster-creator.onrender.com/monster';

  
  axios
    .post(apiUrl,payload,config)
    .then((response) => {
      const data = response.data;
      SetContext(state =>{
      return{
        ...state,
        popupResponse: true,
        isLoading: false,
        response: data.monster,
      }
    })
      // Handle the response data
    })
    .catch((error) => {
      console.error(error);
      SetContext(state=>{
        return{
          ...state,
          isLoading:false
        }
        

      })
      toast.warn("🦄 there is error has happen ", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  
  
    }
  };
  return (
    <motion.div
      className="containerStart"
      initial={{
        x: "-100%",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        y: "-100vh",
      }}
    >
      {appContext.isLoading && (
        <div className="spinnerLoader">
          <BeatLoader color="#000" size={50} loading={true} />
        </div>
      )}
      {appContext.popupResponse && (
        <motion.div
          initial={{ y: "-100&" }}
          animate={{ y: 0 }}
          className="popUpResponse"
        >
          <div className="popContainer">
            <h2 className="popuptitle">
              Healthy Plann To Make You <span className="monster">Monster</span>
            </h2>
            <div className="reponse_text">{appContext.response}</div>
            <button
              className="glow-on-hover"
              onClick={() => {
                SetContext((state) => {
                  return {
                    ...state,
                    popupResponse: false,
                  };
                });
              }}
            >
              {" "}
              Close !
            </button>
          </div>
        </motion.div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          top: "20%",
        }}
      />
      <Header  />
      <div className="contentFormAndPayment">
        <div className="Payment_container" id="paypal">
          
        
          
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "0.1",
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                  alert(
                    "Transaction completed by " +
                      details.payer.name.given_name +
                      "!"
                  );
                });
              }}
              onError={(err) => {
                alert("error", err);
              }}
            />
      
        </div>
        <div className="formContainer">
          <div className="form">
            <div className="form_contgainer_flex">
              <div className="child_flex">
                <label>
                  Age:
                  <input type="number" name="age" onChange={handleChange} />
                </label>
                <label>
                  Gender:
                  <select name="gender" onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
                <label>
                  Weight:
                  <input type="number" name="weight" onChange={handleChange} />
                </label>
                <label>
                  Height:
                  <input type="number" name="height" onChange={handleChange} />
                </label>
              </div>
              <div className="child_flex">
                <label>
                  Activity Level:
                  <select name="activityLevel" onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="sedentary">Sedentary</option>
                    <option value="moderately">Moderately Active</option>
                    <option value="highly">Highly Active</option>
                  </select>
                </label>
                <label>
                  Goal:
                  <input type="text" name="goal" onChange={handleChange} />
                </label>
                <label>
                  Routine:
                  <input type="text" name="routine" onChange={handleChange} />
                </label>
                <label>
                  Food Preference:
                  <input
                    type="text"
                    name="foodPreference"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <label>
              Note:
              <textarea name="note" onChange={handleChange} />
            </label>
            <button
              className="glow-on-hover"
              type="click"
              onClick={submitRequest}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Start;
