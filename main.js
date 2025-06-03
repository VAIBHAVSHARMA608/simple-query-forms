const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submission
app.post('/submitForm', (req, res) => {
  const { firstName, lastName, email, comment } = req.body;

  // Display the submitted data
  res.send(`
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <h1>Form Submitted Successfully</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

ConstantSourceNode
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form data
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  // Check if localStorage is available
  if (typeof localStorage !== 'undefined') {
    // Store data in localStorage
    const formData = {
      firstName,
      lastName,
      email,
      comment,
    };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Display the submitted data in main.html
    document.getElementById('displayFirstName').textContent = firstName;
    document.getElementById('displayLastName').textContent = lastName;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayComment').textContent = comment;

    // Log the stored data to the console for debugging
    console.log('Stored Data:', formData);
  } else {
    console.error('localStorage is not supported in this environment.');
  }
});
