// Function to handle form submission
function submitOrder(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Retrieve form field values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let postalCode = document.getElementById("postal-code").value;
    let cardNumber = document.getElementById("card-number").value;
    let expiryDate = document.getElementById("expiry-date").value;
    let cvv = document.getElementById("cvv").value;

    // Validate form fields (this is basic validation, you can expand it as needed)
    if (name && email && address && city && postalCode && cardNumber && expiryDate && cvv) {
        // Calculate delivery date (5 days from the current date)
        let deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 5);
        let formattedDate = deliveryDate.toDateString(); // Convert to a readable format

        // Show confirmation message with delivery date
        let confirmationMessage = document.getElementById("confirmation-message");
        confirmationMessage.style.display = "block";
        confirmationMessage.innerHTML = `Thank you for your purchase, ${name}! Your order will be delivered by ${formattedDate}.`;
       

        // Optionally, clear the form after submission
        document.getElementById("checkout-form").reset();
    } else {
        alert("Please fill in all fields before submitting the form.");
    }
}
