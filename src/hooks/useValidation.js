import { useEffect, useState } from "react";

const useValidation = (callbackSubmit) => {
  const [isErrorList, setIsErrorList] = useState({});
  const [finalValues, setFinalValues] = useState({});

  const checkInputs = (propertyName, rawValue) => {
    if (rawValue.length <= 0) {
      setIsErrorList((prevValues) => {
        return {
          ...prevValues,
          [propertyName]: {
            isError: true,
            msg: "Can't be empty",
          },
        };
      });
    }

    if (rawValue.length >= 1) {
      setIsErrorList((prevValues) => {
        const noError = { ...prevValues };
        delete noError[propertyName];
        return noError;
      });
      setFinalValues((prevValues) => {
        return {
          ...prevValues,
          [propertyName]: rawValue,
        };
      });
    }
  };

  const checkEmail = (propertyName, rawEmail) => {
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(rawEmail)
    ) {
      setIsErrorList((prevValues) => {
        return {
          ...prevValues,
          [propertyName]: {
            isError: true,
            msg: "Email invalid",
          },
        };
      });
    } else {
      setIsErrorList((prevValues) => {
        const noError = { ...prevValues };
        delete noError[propertyName];
        return noError;
      });
      setFinalValues((prevValues) => {
        return {
          ...prevValues,
          [propertyName]: rawEmail,
        };
      });
    }
  };

  const validation = (rawValues) => {
    const { name, email, phone, message } = rawValues;
    checkEmail("email", email?.trim());
    //
    checkInputs("message", message?.trim());
    checkInputs("name", name?.trim());
    checkInputs("phone", phone?.trim());
  };

  const submitValidatedValues = () => {
    const errorsArrayLength = Object.entries(isErrorList).length;
    const finalValuesLength = Object.entries(finalValues).length
    if (errorsArrayLength >= 1) return;
    if (errorsArrayLength <= 0 && finalValuesLength >= 4){
      callbackSubmit(finalValues)
    }
  };

  useEffect(() => {
    submitValidatedValues()
  }, [isErrorList, finalValues]);

  return {
    validation,
    isErrorList,
  };
};

export default useValidation;
