var _a;
// step no : 01
(_a = document.getElementById("main-div")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("For Generate Resume Please Click The 'OK' :)");
    // step no : 02  Type Assersion
    var FullnameElement = document.getElementById("name-input");
    var emailElement = document.getElementById("mail-input");
    var phoneElement = document.getElementById("number-input");
    var educationElement = document.getElementById("study-input");
    var workElement = document.getElementById("work-box");
    var skillsElement = document.getElementById("skills-box");
    var achievementsElement = document.getElementById("award-input");
    var summaryElement = document.getElementById("summary-txtarea");
    // condition
    if (FullnameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        workElement &&
        skillsElement &&
        achievementsElement &&
        summaryElement) {
        var name_1 = FullnameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var workExeprience = workElement.value;
        var skills = skillsElement.value;
        var achievements = achievementsElement.value;
        var summary = summaryElement.value;
        //step no :03 Resume Output
        var resumeOutput = "\n            <h2><u>DYNAMIC RESUME:</u></h2>\n            <h3><u>CONTACT INFORMATION:</u></h3>           \n            <p><strong>Full Name: </strong> ".concat(name_1, "</p>\n            <p><strong>Email: </strong> ").concat(email, "</p>\n            <p><strong>Phone Number</strong> ").concat(phone, "</p>\n\n\n            <h3><u>EDUCATION:</u></h3>\n            <p>").concat(education, "</p>\n\n            <h3><u>WORK EXPERIENCE:</u></h3>\n            <p>").concat(workExeprience, "</p>\n\n            <h3><u>Skills:</u></h3>\n            <p>").concat(skills, "</p>\n\n            <h3><u>ACHIEVEMENTS/PROJECTS:</u></h3>\n            <p>").concat(achievements, "</p>\n\n            <h3><u>Summary:</u></h3>\n            <p>").concat(summary, "</p>\n\n            ");
        var outputResume = document.getElementById("resumeOutput");
        if (outputResume) {
            outputResume.innerHTML = resumeOutput;
        }
        else {
            console.error("Please fill this fields");
        }
    }
    else {
        console.error("please fill all the fields of form");
    }
});
