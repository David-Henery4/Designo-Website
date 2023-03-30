import { useState } from "react"
import checkIfInputLabelActive from "../../functions/checkIfInputLabelActive"
import useValidation from "../../hooks/useValidation";
import {ErrorMsg} from "../../components/contactComps"

const ContactForm = () => {
  const [name, setName] = useState("");
  const [isNameInputFull, setIsNameInputFull] = useState(false);
  //
  const [email, setEmail] = useState("");
  const [isEmailInputFull, setIsEmailInputFull] = useState(false);
  //
  const [phone, setPhone] = useState("");
  const [isPhoneInputFull, setIsPhoneInputFull] = useState(false);
  //
  const [message, setMessage] = useState("");
  const [isMessageInputFull, setIsMessageInputFull] = useState(false);
  //
  const handleSubmit = (validatedValues) => {
    // console.log(validatedValues)
    console.log("Form values submitted")
    setEmail("")
    setName("")
    setMessage("")
    setPhone("")
    setIsNameInputFull(false)
    setIsEmailInputFull(false)
    setIsPhoneInputFull(false)
    setIsMessageInputFull(false)
  }
  //
  const {validation, isErrorList} = useValidation(handleSubmit)
  //
  const handleValuesCheck = () => {
    validation({
      name,
      email,
      phone,
      message
    })
  }
  //
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 sm:gap-6 sm:items-end smDesk:flex-[1]">
      <form
        className="w-full grid gap-6 text-bodyMob leading-body font-medium text-left"
        action=""
      >
        {/* INPUTS */}
        <div className="relative w-full">
          <label
            htmlFor="name"
            className={`absolute bottom-3 left-4 opacity-50 ${
              isNameInputFull && "hidden"
            }`}
          >
            Name
          </label>
          {/* Error label */}
          {isErrorList?.name?.isError && (
            <ErrorMsg msg={isErrorList?.name?.msg} />
          )}
          <input
            id="name"
            name="name"
            className={`w-full px-4 pb-3 outline-none bg-[transparent] border-b-white transition-all ${
              isNameInputFull ? "border-b-[3px]" : "border-b"
            }`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setIsNameInputFull(true)}
            onBlur={() => checkIfInputLabelActive(name, setIsNameInputFull)}
          />
        </div>
        <div className="relative w-full">
          <label
            htmlFor="email"
            className={`absolute bottom-3 left-4 opacity-50 ${
              isEmailInputFull && "hidden"
            }`}
          >
            Email
          </label>
          {/* Error label */}
          {isErrorList?.email?.isError && (
            <ErrorMsg msg={isErrorList?.email?.msg} />
          )}
          <input
            id="email"
            name="email"
            className={`w-full px-4 pb-3 outline-none bg-[transparent] border-b-white transition-all ${
              isEmailInputFull ? "border-b-[3px]" : "border-b"
            }`}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsEmailInputFull(true)}
            onBlur={() => checkIfInputLabelActive(email, setIsEmailInputFull)}
          />
        </div>
        <div className="relative w-full">
          <label
            htmlFor="Phone"
            className={`absolute bottom-3 left-4 opacity-50 ${
              isPhoneInputFull && "hidden"
            }`}
          >
            Phone
          </label>
          {/* Error label */}
          {isErrorList?.phone?.isError && (
            <ErrorMsg msg={isErrorList?.phone?.msg} />
          )}
          <input
            id="Phone"
            name="Phone"
            className={`w-full px-4 pb-3 outline-none bg-[transparent] border-b-white transition-all ${
              isPhoneInputFull ? "border-b-[3px]" : "border-b"
            }`}
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => setIsPhoneInputFull(true)}
            onBlur={() => checkIfInputLabelActive(phone, setIsPhoneInputFull)}
          />
        </div>
        <div className="relative w-full">
          <label
            htmlFor="message"
            className={`absolute top-3 left-4 opacity-50 ${
              isMessageInputFull && "hidden"
            }`}
          >
            Your Message
          </label>
          {/* Error label */}
          {isErrorList?.message?.isError && (
            <ErrorMsg isMessageInput={true} msg={isErrorList?.message?.msg} />
          )}
          <textarea
            name="message"
            id="message"
            className={`w-full min-h-[100px] px-4 pb-3 outline-none border-b-white bg-[transparent] resize-none transition-all ${
              isMessageInputFull ? "border-b-[3px]" : "border-b"
            }`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsMessageInputFull(true)}
            onBlur={() =>
              checkIfInputLabelActive(message, setIsMessageInputFull)
            }
          ></textarea>
        </div>
      </form>
      {/* SUBMIT */}
      <button
        className="w-40 h-14 bg-white text-black rounded-lg tracking-btn font-medium justify-self-center hover:bg-lightPeach hover:text-white active:text-black active:bg-white"
        onClick={(e) => {
          e.preventDefault();
          handleValuesCheck();
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default ContactForm;
