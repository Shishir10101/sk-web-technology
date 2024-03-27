function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

function downloadCV() {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Your CV content goes here", 10, 10);

    // Save the PDF with filename 'cv.pdf'
    doc.save('cv.pdf');
}

