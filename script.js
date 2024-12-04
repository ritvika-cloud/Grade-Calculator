// Event listener for the "Calculate GPA" button
document.getElementById('calculate-btn').addEventListener('click', function () {
    let sub = document.getElementById('num-subjects').value;
    sub = parseInt(sub);  // Convert to integer

    if (isNaN(sub) || sub <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let totalPoints = 0, totalCredits = 0;
    let subjectsDetails = [];

    // Loop to get credits and grades for each subject
    for (let i = 1; i <= sub; i++) {
        let credit = prompt(`Enter the number of credits for subject ${i}:`);
        credit = parseInt(credit);

        let grade = prompt(`Enter your grade for subject ${i} :`);

        let points = 0;
        if (grade === "A" || grade === "a") points = 10;
        else if (grade === "A-" || grade === "a-") points = 9;
        else if (grade === "B" || grade === "b") points = 8;
        else if (grade === "B-" || grade === "b-") points = 7;
        else if (grade === "C" || grade === "c") points = 6;
        else if (grade === "C-" || grade === "c-") points = 5;
        else if (grade === "D" || grade === "d") points = 4;
        else if (grade === "F" || grade === "f") {
            points = 0; // Fail does not contribute to GPA
            alert("You have failed this course, it will not contribute to your GPA.");
        } else {
            alert("Invalid grade entered. Exiting...");
            return;
        }

        // Store subject, credit, and grade information
        subjectsDetails.push({
            subject: `Subject ${i}`,
            credit: credit,
            grade: grade
        });

        totalPoints += points * credit;
        totalCredits += credit;
    }

    // Calculate GPA
    let gpa = totalPoints / totalCredits;

    // Display the result
    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;

    // Create the table dynamically
    let tableHtml = '<table border="1"><tr><th>Subject</th><th>Credit</th><th>Grade</th></tr>';
    for (let i = 0; i < subjectsDetails.length; i++) {
        tableHtml += `<tr>
                        <td>${subjectsDetails[i].subject}</td>
                        <td>${subjectsDetails[i].credit}</td>
                        <td>${subjectsDetails[i].grade}</td>
                      </tr>`;
    }
    tableHtml += '</table>';

    // Display the table below the GPA result
    document.getElementById('table-container').innerHTML = tableHtml;
});
