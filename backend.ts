// step no : 01
document.getElementById("main-div")?.addEventListener("submit" , function(event) {
     event.preventDefault();
     alert("For Generate Resume Please Click The 'OK' :)");
                                                                                                                               
    // step no : 02  Type Assersion

    const FullnameElement = document.getElementById("name-input") as HTMLInputElement;
    const emailElement = document.getElementById("mail-input") as HTMLInputElement;
    const phoneElement = document.getElementById("number-input") as HTMLInputElement;
    const educationElement = document.getElementById("study-input") as HTMLInputElement;
    const workElement = document.getElementById("work-box") as HTMLInputElement;
    const skillsElement = document.getElementById("skills-box") as HTMLInputElement;
    const achievementsElement = document.getElementById("award-input") as HTMLInputElement;
    const summaryElement = document.getElementById("summary-txtarea") as HTMLInputElement;

    // condition
    if(
        FullnameElement && 
        emailElement && 
        phoneElement && 
        educationElement && 
        workElement && 
        skillsElement && 
        achievementsElement && 
        summaryElement){

            const name = FullnameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const education = educationElement.value;
            const workExeprience = workElement.value;
            const skills = skillsElement.value;
            const achievements = achievementsElement.value;
            const summary = summaryElement.value;       
            
            //step no :03 Resume Output
            const resumeOutput = `
            <h2><u>DYNAMIC RESUME:</u></h2>
            <h3><u>CONTACT INFORMATION:</u></h3>           
            <p><strong>Full Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Phone Number</strong> ${phone}</p>


            <h3><u>EDUCATION:</u></h3>
            <p>${education}</p>

            <h3><u>WORK EXPERIENCE:</u></h3>
            <p>${workExeprience}</p>

            <h3><u>Skills:</u></h3>
            <p>${skills}</p>

            <h3><u>ACHIEVEMENTS/PROJECTS:</u></h3>
            <p>${achievements}</p>

            <h3><u>Summary:</u></h3>
            <p>${summary}</p>

            `;

            const outputResume = document .getElementById("resumeOutput");
            if(outputResume){
                outputResume .innerHTML = resumeOutput
            }
            else {
                console.error("Please fill this fields");
            }
    }
    else{
        console.error("please fill all the fields of form");
    }
});


