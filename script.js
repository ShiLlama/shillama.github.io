function showSection(sectionId){
    //Hide all the sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    //Show the selected section
    document.getElementById(sectionId).classList.add('active');
}