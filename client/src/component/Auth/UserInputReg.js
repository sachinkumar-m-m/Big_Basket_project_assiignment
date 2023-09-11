import { useState } from "react";
import { omit } from "lodash";

function UserInputReg(name, value) {
  const [errors, setErrors] = useState({});

  const errPrint = (props, msg) => {
    setErrors({ ...errors, [props]: msg });
  };

  const validate = (name, value) => {
    // console.log('name =', name + ", value ="+ value)
    switch (name) {
      case "name":
        if (value.length === 0) {
          errPrint(name, "Name field must be filled");
        } else if (value.length < 4) {
          errPrint(name, "Name atleast have 4 letters");
        } else if (!new RegExp(/^[a-z A-Z\s]+$/).test(value)) {
          errPrint(name, "Invalid Name");
        } else {
          let newOb = omit(errors, name);
          setErrors(newOb);
        }
        break;
      case "email":
        if (value.length === 0) {
          errPrint(name, "email field must be filled");
        } else if (
          !new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/).test(value)
        ) {
          errPrint(name, "Invalid email Format");
        } else {
          let newOb = omit(errors, name);
          setErrors(newOb);
        }
        break;
      case "mobile":
        if (value.length === 0) {
          errPrint(name, "Mobile field must be filled");
        } else if (!new RegExp(/^[6-9]\d{9}$/).test(value)) {
          errPrint(name, "Invalid Mobile Number");
        } else {
          let newOb = omit(errors, name);
          setErrors(newOb);
        }
        break;
      case "password":
        if (value.length === 0) {
          errPrint(name, "password field must be filled");
        } else if (value.length < 6) {
          errPrint(name, "password should must 6 characters");
        } else if (!new RegExp(/^[a-z A-Z 0-9\s&*#]+$/).test(value)) {
          errPrint(name, "Invalid password Format");
        } else {
          let newOb = omit(errors, name);
          setErrors(newOb);
        }
        break;
    }
  };

  return {
    errors,
    validate,
  };
}

export default UserInputReg;
