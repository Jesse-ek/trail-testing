// document.querySelectorAll('.time-stop').forEach((stopInput) => {
//     stopInput.addEventListener('change', () => {
//     console.log('Stop time changed:', stopInput.value); // Debug: Confirm the event is firing
   
//     const row = stopInput.closest('tr');
//     if (!row) {
//     console.error('Row not found for stopInput:', stopInput);
//     return;
//     }
   
//     const startInputs = row.querySelectorAll('.time-start');
//     const stopInputs = row.querySelectorAll('.time-stop');
//     const totalHoursInput = row.querySelector('.total-hours');
   
//     // Debug: Verify DOM elements are found
//     console.log('Start inputs:', startInputs);
//     console.log('Stop inputs:', stopInputs);
//     console.log('Total hours input:', totalHoursInput);
   
//     if (!totalHoursInput) {
//     console.error('Total hours input not found in row:', row);
//     return;
//     }
   
//     let totalHours = 0;
   
//     // Calculate for both sets of start/stop times
//     for (let i = 0; i < startInputs.length; i++) {
//     const startTime = startInputs[i].value; // e.g., "07:30"
//     const stopTime = stopInputs[i].value; // e.g., "15:45"
   
//     console.log(`Set ${i + 1} - Start time: ${startTime}, Stop time: ${stopTime}`); // Debug: Log time values
   
//     if (startTime && stopTime) {
//     // Parse the time strings manually
//     const [startHours, startMinutes] = startTime.split(':').map(Number);
//     const [stopHours, stopMinutes] = stopTime.split(':').map(Number);
   
//     // Create Date objects for the same day
//     const start = new Date(1970, 0, 1, startHours, startMinutes);
//     const stop = new Date(1970, 0, 1, stopHours, stopMinutes);
   
//     // Debug: Verify Date objects
//     console.log(`Set ${i + 1} - Start Date: ${start}, Stop Date: ${stop}`);
   
//     if (isNaN(start) || isNaN(stop)) {
//     console.error(`Invalid Date for set ${i + 1}: Start=${startTime}, Stop=${stopTime}`);
//     continue;
//     }
   
//     // Calculate the difference in hours
//     let diff = (stop - start) / (1000 * 60 * 60); // Convert milliseconds to hours
//     if (diff < 0) diff += 24; // Handle overnight shifts (e.g., 22:00 to 02:00)
   
//     console.log(`Set ${i + 1} - Hours difference: ${diff}`); // Debug: Log the difference
   
//     totalHours += diff;
//     }
//     }
   
//     console.log('Total hours calculated:', totalHours); // Debug: Log the final total
   
//     // Update the read-only "Total Hours" field
//     totalHoursInput.value = totalHours.toFixed(2);
//     });
//    });


//    const days = ['thurs', 'fri', 'sat', 'sun', 'mon', 'tues', 'wed'];
//    const tasks = [
//        'personalHygiene',
//        'Toileting',
//        'Dressing',
//        'Mobility',
//        'Eating',
//        'Medications',
//        'lightHousekeeping',
//        'Errands'
//    ];

//    // Ensure all task fields are included, even if empty
//    days.forEach(day => {
//        tasks.forEach(task => {
//            const fieldName = `${day}_${task}`;
//            if (!formData.has(fieldName)) {
//                formData.append(fieldName, '');
//            }
//        });
//    });

//    // Ensure comment fields are included
//    tasks.forEach(task => {
//        const commentField = `comment_${task}`;
//        if (!formData.has(commentField)) {
//            formData.append(commentField, '');
//        }
//    });


   
//             // // Ensure all task fields are included, even if empty
//             // const tasks = ['personal Hygiene', 'Toileting','Dressing & changing Clothes','Mobility & Transfers', 
//             //     'Eating & Drinking', 'Medications', 'Light Housekeeping (e.g. laundry)', 'Errands']; // Match the tasks in the script
//             // days.forEach(day => {
//             //     tasks.forEach(task => {
//             //         const fieldName = `${day}_${task}`;
//             //         if (!formData.has(fieldName)) {
//             //             formData.append(fieldName, '');
//             //         }
//             //     });
//             // });


// document.querySelector('form').addEventListener('submit', (e) => {
//     alert('Form submitted successfully! You will receive a confirmation email shortly.');
// });


    // 1. Calculate Total Hours
    document.querySelectorAll('.time-stop').forEach((stopInput) => {
        stopInput.addEventListener('change', () => {
            console.log('Stop time changed:', stopInput.value); // Debug: Confirm the event is firing

            const row = stopInput.closest('tr');
            if (!row) {
                console.error('Row not found for stopInput:', stopInput);
                return;
            }

            const startInputs = row.querySelectorAll('.time-start');
            const stopInputs = row.querySelectorAll('.time-stop');
            const totalHoursInput = row.querySelector('.total-hours');

            // Debug: Verify DOM elements are found
            console.log('Start inputs:', startInputs);
            console.log('Stop inputs:', stopInputs);
            console.log('Total hours input:', totalHoursInput);

            if (!totalHoursInput) {
                console.error('Total hours input not found in row:', row);
                return;
            }

            let totalHours = 0;

            // Calculate for both sets of start/stop times
            for (let i = 0; i < startInputs.length; i++) {
                const startTime = startInputs[i].value; // e.g., "07:30"
                const stopTime = stopInputs[i].value; // e.g., "15:45"

                console.log(`Set ${i + 1} - Start time: ${startTime}, Stop time: ${stopTime}`); // Debug: Log time values

                if (startTime && stopTime) {
                    // Parse the time strings manually
                    const [startHours, startMinutes] = startTime.split(':').map(Number);
                    const [stopHours, stopMinutes] = stopTime.split(':').map(Number);

                    // Create Date objects for the same day
                    const start = new Date(1970, 0, 1, startHours, startMinutes);
                    const stop = new Date(1970, 0, 1, stopHours, stopMinutes);

                    // Debug: Verify Date objects
                    console.log(`Set ${i + 1} - Start Date: ${start}, Stop Date: ${stop}`);

                    if (isNaN(start) || isNaN(stop)) {
                        console.error(`Invalid Date for set ${i + 1}: Start=${startTime}, Stop=${stopTime}`);
                        continue;
                    }

                    // Calculate the difference in hours
                    let diff = (stop - start) / (1000 * 60 * 60); // Convert milliseconds to hours
                    if (diff < 0) diff += 24; // Handle overnight shifts (e.g., 22:00 to 02:00)

                    console.log(`Set ${i + 1} - Hours difference: ${diff}`); // Debug: Log the difference

                    totalHours += diff;
                }
            }

            console.log('Total hours calculated:', totalHours); // Debug: Log the final total

            // Update the read-only "Total Hours" field
            totalHoursInput.value = totalHours.toFixed(2);
        });
        

    });

    // Initialize Signature Pad for Caregiver Signature
const caregiverCanvas = document.getElementById('caregiverSignatureCanvas');
const caregiverSignaturePad = new SignaturePad(caregiverCanvas, {
    backgroundColor: 'rgb(255, 255, 255)', // White background
    penColor: 'rgb(0, 0, 0)' // Black pen
});

// Initialize Signature Pad for Participant Signature
const participantCanvas = document.getElementById('participantSignatureCanvas');
const participantSignaturePad = new SignaturePad(participantCanvas, {
    backgroundColor: 'rgb(255, 255, 255)', // White background
    penColor: 'rgb(0, 0, 0)' // Black pen
});

// Function to clear a signature
function clearSignature(canvasId) {
    const canvas = document.getElementById(canvasId);
    const signaturePad = canvasId === 'caregiverSignatureCanvas' ? caregiverSignaturePad : participantSignaturePad;
    signaturePad.clear();
}

    // 2. Form Submission with Task Field Handling and Success Message
    document.getElementById('timeSlipForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from redirecting

        const form = this;
        const formData = new FormData(form);


            // Add caregiver signature to form data
        const caregiverSignatureData = caregiverSignaturePad.isEmpty() ? '' : caregiverSignaturePad.toDataURL('image/png');
        document.getElementById('caregiverSignatureInput').value = caregiverSignatureData;
        formData.set('caregiverSignature', caregiverSignatureData);

            // Add participant signature to form data
        const participantSignatureData = participantSignaturePad.isEmpty() ? '' : participantSignaturePad.toDataURL('image/png');
        document.getElementById('participantSignatureInput').value = participantSignatureData;
        formData.set('participantSignature', participantSignatureData);

            // Validate that signatures are provided
        // if (!caregiverSignatureData || !participantSignatureData) {
        //     alert('Please provide both Caregiver and Participant signatures.');
        //     loadingIndicator.style.display = 'none';
        //     submitButton.disabled = false;
        //     return;
        // }


        // Ensure all task fields are included, even if empty
        const days = ['thurs', 'fri', 'sat', 'sun', 'mon', 'tues', 'wed'];
        const tasks = [
            'personalHygiene',
            'Toileting',
            'Dressing',
            'Mobility',
            'Eating',
            'Medications',
            'lightHousekeeping',
            'Errands'
        ];

        days.forEach(day => {
            tasks.forEach(task => {
                const fieldName = `${day}_${task}`;
                if (!formData.has(fieldName)) {
                    formData.append(fieldName, '');
                }
            });
        });

        // Ensure comment fields are included
        tasks.forEach(task => {
            const commentField = `comment_${task}`;
            if (!formData.has(commentField)) {
                formData.append(commentField, '');
            }
        });

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbyFJkVaV-Vlby2UKiGRtKk1pP4EHAC-JOumigwhKBTgmvd6mKkLVhz2_jv4TqKkbySF/exec';
        

        fetch(scriptUrl, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Show success message
                const successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';

                // Hide the message after 2 seconds and reload the page
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    window.location.reload();
                }, 2000);
            } else {
                alert('Error submitting form: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        });
    });
