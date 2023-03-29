
const checkIfInputLabelActive = (inputName,setValue) => {
  inputName.trim().length <= 0
    ? setValue(false)
    : setValue(true);
}

export default checkIfInputLabelActive