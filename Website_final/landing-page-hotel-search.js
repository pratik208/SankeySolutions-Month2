function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  
  function selectOption(option) {
    // Add your logic to handle the selected option
    console.log('Selected Option:', option);
  
    // You can close the dropdown after selecting an option
    var dropdown = document.getElementById('roomConditionDropdown');
    dropdown.style.display = 'none';
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.iconseditdrop-down-list3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  };

  $(function() {
    $("#startDate").datepicker({
      onClose: function(selectedDate) {
        $("#endDate").datepicker("option", "minDate", selectedDate);
      }
    });
  
    $("#endDate").datepicker({
      onClose: function(selectedDate) {
        $("#startDate").datepicker("option", "maxDate", selectedDate);
      }
    });
  
    $("#startCalendarIcon").click(function() {
      $("#startDate").datepicker("show");
    });
  
    $("#endCalendarIcon").click(function() {
      $("#endDate").datepicker("show");
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const helpButton = document.getElementById('helpButton');
  
    helpButton.addEventListener('click', function () {
      // Open a new page or display a message here
      window.location.href = 'help_page.html'; // Change the URL to your help_page.html
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const phoneIcon = document.getElementById('phoneIcon');
  
    phoneIcon.addEventListener('click', function () {
      alert('Contact on 1234567890 for more information!');
      // Alternatively, you can display the message in a modal or another way
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const englandButton = document.getElementById('englandButton');
  
    englandButton.addEventListener('click', function () {
      window.location.href = 'england.html'; // Change the URL to your england.html
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const dollarButton = document.getElementById('dollarButton');
  
    dollarButton.addEventListener('click', function () {
      // Navigate to a new HTML page
      window.location.href = 'currency-converter.html'; // Change the URL as needed
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('likeButton');
    let wishlistMessage;
  
    likeButton.addEventListener('click', function () {
      // Check if a message already exists
      if (!wishlistMessage) {
        // Display the text after clicking the like icon
        wishlistMessage = document.createElement('div');
        wishlistMessage.textContent = 'Added to your wishlist';
        wishlistMessage.classList.add('wishlist-message');
  
        // Append the message to the parent container
        likeButton.appendChild(wishlistMessage);
  
        // Optional: Remove the message after a certain duration (e.g., 3 seconds)
        setTimeout(function () {
          wishlistMessage.remove();
          wishlistMessage = null; // Reset the variable
        }, 3000);
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
  
    searchButton.addEventListener('click', function () {
      console.log('Search button clicked');
  
      // Create and display the message
      const messageElement = document.createElement('div');
      messageElement.textContent = 'Here are your details';
      messageElement.classList.add('search-message');
  
      // Append the message to the body or another appropriate container
      document.body.appendChild(messageElement);
  
      // Optional: Remove the message after a certain duration (e.g., 3 seconds)
      setTimeout(function () {
        messageElement.remove();
      }, 3000);
    });
  });
      