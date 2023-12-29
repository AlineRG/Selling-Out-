function checkHour() {
    const currentHour = new Date().getHours();
    const openingHour = 8; 
    const closingHour = 18; 

    const message = currentHour >= openingHour && currentHour < closingHour
        ? 'WE ARE OPEN!'
        : 'SORRY, WE ARE CLOSE.';

    let msg = document.getElementById("welcome-msg");
    msg.innerText = message;
}

// Call the function when the page loads
checkHour();