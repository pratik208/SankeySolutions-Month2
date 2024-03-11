document.addEventListener('DOMContentLoaded', function () {
    const englandIcon = document.getElementById('englandIcon');
  
    englandIcon.addEventListener('click', function () {
      // Navigate to the "england.html" page
      window.location.href = 'england.html';
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const changeContentButton = document.getElementById('changeContentButton');
  
    changeContentButton.addEventListener('click', function () {
      // Display a simple alert message
      alert('Your trip details are not available');
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const bookingHistoryButton = document.getElementById('bookingHistoryButton');
  
    bookingHistoryButton.addEventListener('click', function () {
      // Navigate to the new page
      window.location.href = 'booking-history.html';
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Get the checkbox and input elements
    const validationCheckbox = document.getElementById("validationCheckbox");
    const firstNameInput = document.getElementById("firstNameInput");
    const middleNameInput = document.getElementById("middleNameInput");
    const lastNameInput = document.getElementById("lastNameInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
  
    const firstNameError = document.getElementById("firstNameError");
    const middleNameError = document.getElementById("middleNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
  
    // Function to validate email format
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to validate phone number length
    function validatePhoneNumber(phone) {
      return phone.length <= 12;
    }
  
    // Function to validate a field
    function validateField(input, error, errorMessage) {
      const value = input.value.trim();
      if (value === "") {
        error.textContent = errorMessage;
        return false;
      } else {
        error.textContent = "";
        return true;
      }
    }
  
    // Event listener for checkbox change
    validationCheckbox.addEventListener("change", function () {
      if (validationCheckbox.checked) {
        // Validate all fields when checkbox is checked
        const isFirstNameValid = validateField(firstNameInput, firstNameError, "First name is required");
        const isMiddleNameValid = validateField(middleNameInput, middleNameError, "Middle name is required");
        const isLastNameValid = validateField(lastNameInput, lastNameError, "Last name is required");
        const isEmailValid = validateEmail(emailInput.value) || validateField(emailInput, emailError, "Email is required");
        const isPhoneValid = validatePhoneNumber(phoneInput.value) || validateField(phoneInput, phoneError, "Phone number is required");
      } else {
        // Clear error messages when checkbox is unchecked
        firstNameError.textContent = "";
        middleNameError.textContent = "";
        lastNameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
      }
    });
  
    // Additional event listeners for input changes
    firstNameInput.addEventListener("input", function () {
      if (validationCheckbox.checked) {
        validateField(firstNameInput, firstNameError, "First name is required");
      }
    });
  
    middleNameInput.addEventListener("input", function () {
      if (validationCheckbox.checked) {
        validateField(middleNameInput, middleNameError, "Middle name is required");
      }
    });
  
    lastNameInput.addEventListener("input", function () {
      if (validationCheckbox.checked) {
        validateField(lastNameInput, lastNameError, "Last name is required");
      }
    });
  
    emailInput.addEventListener("input", function () {
      if (validationCheckbox.checked) {
        const isEmailValid = validateEmail(emailInput.value) || validateField(emailInput, emailError, "Email is required");
        if (!isEmailValid) {
          emailError.textContent = "Email is having an invalid format";
        } else {
          emailError.textContent = "";
        }
      }
    });
  
    phoneInput.addEventListener("input", function () {
      if (validationCheckbox.checked) {
        const isPhoneValid = validatePhoneNumber(phoneInput.value) || validateField(phoneInput, phoneError, "Phone number is required");
        if (!isPhoneValid) {
          phoneError.textContent = "More than 12 digits are not allowed";
        } else {
          phoneError.textContent = "";
        }
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const fullNameInput = document.getElementById("fullNameInput");
    const cardNumberInput = document.getElementById("cardNumberInput");
    const expDateInput = document.getElementById("expDateInput");
    const cvcInput = document.getElementById("cvcInput");
  
    const fullNameError = document.getElementById("fullNameError");
    const cardNumberError = document.getElementById("cardNumberError");
    const expDateError = document.getElementById("expDateError");
    const cvcError = document.getElementById("cvcError");
  
    function validateField(input, error, errorMessage) {
      const value = input.value.trim();
      if (value === "") {
        error.textContent = errorMessage;
        return false;
      } else {
        error.textContent = "";
        return true;
      }
    }
  
    function validateExpDate() {
      const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      const value = expDateInput.value.trim();
      if (!expDateRegex.test(value)) {
        expDateError.textContent = "Invalid Format";
        return false;
      } else {
        expDateError.textContent = "";
        return true;
      }
    }
  
    function validateCVC() {
      const cvcRegex = /^\d{3}$/;
      const value = cvcInput.value.trim();
      if (!cvcRegex.test(value)) {
        cvcError.textContent = "Invalid CVC";
        return false;
      } else {
        cvcError.textContent = "";
        return true;
      }
    }
  
    function validateCardNumber() {
      const cardNumberRegex = /^\d{12}$/;
      const value = cardNumberInput.value.trim();
      
      if (value.length > 12) {
        cardNumberInput.value = value.substring(0, 12); // Trim to 12 digits
        cardNumberError.textContent = "Invalid Card Number";
        return false;
      }
  
      if (!cardNumberRegex.test(value)) {
        cardNumberError.textContent = "Invalid Card Number";
        return false;
      } else {
        cardNumberError.textContent = "";
        return true;
      }
    }
  
    function validateCardInformation() {
      const isFullNameValid = validateField(fullNameInput, fullNameError, "Field is required");
      const isCardNumberValid = validateCardNumber();
      const isExpDateValid = validateExpDate();
      const isCVCValid = validateCVC();
  
      if (isFullNameValid && isCardNumberValid && isExpDateValid && isCVCValid) {
        console.log("Successfully Proceed for payment");
      } else {
        console.log("Card information has errors. Please check and correct them.");
      }
    }
  
    fullNameInput.addEventListener("input", function () {
      validateField(fullNameInput, fullNameError, "Field is required");
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
  
    document.getElementById("paymentButton").addEventListener("click", function () {
      validateCardInformation();
    });

    
  });