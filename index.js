document.getElementById('data').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Collect form data with the correct field names
  const formData = {
    name: this.querySelector('input[name="name"]').value,
    email: this.querySelector('input[name="email"]').value,
    phone: this.querySelector('input[name="number"]').value, // Use 'phone' instead of 'number'
    courses: this.querySelector('select[name="courses"]').value,
    gender: this.querySelector('input[name="gender"]:checked').value,
  };

  // Send form data as JSON to the server
  fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Check the response status and show appropriate messages
      if (data.message === 'You are already registered.') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User is already registered!',
        });
      } else if (data.message === 'You are registered successfully.') {
        Swal.fire({
          title: 'Good job!',
          text: 'You have registered successfully!',
          icon: 'success',
        });
        this.reset(); // Clear the form after successful submission
      }
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred. Please try again.',
      });
    });
});
