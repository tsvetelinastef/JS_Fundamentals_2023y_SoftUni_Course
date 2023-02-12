function formatGrade(grade) {
    if (grade < 3.00) {
        console.log("Fail (2)");
    } else if (grade < 3.5) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

formatGrade(3.33); // Poor (3.33)
formatGrade(4.50); // Very good (4.50)
formatGrade(2.99); // Fail (2)

/*
function formatGrade(grade) {
    let gradeText = " ";

    if (grade < 3.00) {
        gradeText = "Fail";
    } else if (grade < 3.50) {
        gradeText = "Poor"
    } else if (grade < 4.50) {
        gradeText = "Good";
    } else if (grade < 5.50) {
        gradeText = "Very good";
    } else if (grade <= 5.50) {
        gradeText = "Excellent";
    }
    let gradeValueText = grade < 3 ? '2' : grade.toFixed(2);
    return (`${gradeText} (${gradeValueText})`);
}
*/