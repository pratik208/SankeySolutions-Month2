document.addEventListener("DOMContentLoaded", function () {
    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");
    const phoneInput = document.getElementById("phoneInput");
    const cardNumberInput = document.getElementById("cardNumberInput");
    const expDateInput = document.getElementById("expDateInput");
    const cvcInput = document.getElementById("cvcInput");
  
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const phoneNumberError = document.getElementById("phoneNumberError");
    const cardNumberError = document.getElementById("cardNumberError");
    const expDateError = document.getElementById("expDateError");
    const cvcError = document.getElementById("cvcError");
    const paymentMessage = document.getElementById("paymentMessage");
  
    function validateField(input, error, errorMessage) {
        const value = input.value.trim();
        if (value === "") {
          console.log("Error: Field is required");
          error.textContent = errorMessage;
          return false;
        } else {
          error.textContent = "";
          return true;
        }
      }
      
  
    function validatePhoneNumber() {
      const phoneRegex = /^\d{1,12}$/;
      const value = phoneInput.value.trim();
      if (!phoneRegex.test(value)) {
        phoneNumberError.textContent = "Invalid Phone Number (Max 12 digits)";
        return false;
      } else {
        phoneNumberError.textContent = "";
        return true;
      }
    }
  
    function validateCardNumber() {
      const cardNumberRegex = /^\d{12}$/;
      const value = cardNumberInput.value.trim();
  
      if (value.length > 12) {
        cardNumberInput.value = value.substring(0, 12);
        cardNumberError.textContent = "Invalid Card Number (Max 12 digits)";
        return false;
      }
  
      if (!cardNumberRegex.test(value)) {
        cardNumberError.textContent = "Invalid Card Number (Exactly 12 digits required)";
        return false;
      } else {
        cardNumberError.textContent = "";
        return true;
      }
    }
  
    function validateCVC() {
      const cvcRegex = /^\d{3}$/;
      const value = cvcInput.value.trim();
      if (!cvcRegex.test(value)) {
        cvcError.textContent = "Invalid CVC (Exactly 3 digits required)";
        return false;
      } else {
        cvcError.textContent = "";
        return true;
      }
    }
  
    function validateExpDate() {
      const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      const value = expDateInput.value.trim();
      if (!expDateRegex.test(value)) {
        expDateError.textContent = "Invalid EXP Date (MM/YY format)";
        return false;
      } else {
        expDateError.textContent = "";
        return true;
      }
    }
  
    function validateCardInformation() {
      const isFirstNameValid = validateField(firstNameInput, firstNameError, "First Name is required");
      const isLastNameValid = validateField(lastNameInput, lastNameError, "Last Name is required");
      const isPhoneNumberValid = validatePhoneNumber();
      const isCardNumberValid = validateCardNumber();
      const isExpDateValid = validateExpDate();
      const isCVCValid = validateCVC();
  
      if (isFirstNameValid && isLastNameValid && isPhoneNumberValid && isCardNumberValid && isExpDateValid && isCVCValid) {
        paymentMessage.textContent = "Successfully Proceed for payment";
      } else {
        paymentMessage.textContent = "Information has errors. Please check and correct them.";
      }
    }
  
    firstNameInput.addEventListener("input", function () {
      validateField(firstNameInput, firstNameError, "First Name is required");
    });
  
    lastNameInput.addEventListener("input", function () {
      validateField(lastNameInput, lastNameError, "Last Name is required");
    });
  
    phoneInput.addEventListener("input", function () {
      validatePhoneNumber();
    });
  
    cardNumberInput.addEventListener("input", function () {
      validateCardNumber();
    });
  
    expDateInput.addEventListener("input", function () {
      validateExpDate();
    });
  
    cvcInput.addEventListener("input", function () {
      validateCVC();
    });
  
    document.getElementById("confirmPayButton").addEventListener("click", function () {
      validateCardInformation();
    });
  });