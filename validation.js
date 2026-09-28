document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let errors = [];

    const farmerName = document.getElementById('farmer-name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const village = document.getElementById('village').value.trim();
    const plotId = document.getElementById('plot-id').value.trim();
    const cropStage = document.getElementById('crop-stage').value;
    const soilType = document.getElementById('soil-type').value;
    const irrigationMethod = document.getElementById('irrigation-method').value;
    const regDate = document.getElementById('reg-date').value;
    const farmPhoto = document.getElementById('farm-photo').files[0];

    if (farmerName === "") {
        errors.push("Full Name is required.");
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        errors.push("Please enter a valid 10-digit mobile number.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (village === "") {
        errors.push("Village / Taluka district is required.");
    }

    if (plotId === "") {
        errors.push("Plot Identifier (Plot ID) is required.");
    }

    if (cropStage === "") {
        errors.push("Please select a Sugarcane Crop Stage.");
    }

    if (soilType === "") {
        errors.push("Please select a Soil Type.");
    }

    if (irrigationMethod === "") {
        errors.push("Please select your existing Irrigation Method.");
    }

    if (regDate === "") {
        errors.push("Registration / Sowing Date is required.");
    }

    if (!farmPhoto) {
        errors.push("Please upload a farm photo.");
    }

    if (errors.length > 0) {
        // Prevent form submission to the server
        event.preventDefault(); 
        
        alert("Form validation failed:\n\n" + errors.join("\n"));
    } else {
        alert("Validation successful! Registering your farm plot...");
    }
});
