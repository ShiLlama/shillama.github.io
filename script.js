function showSection(sectionId){
    //Hide all the sections
    let section = document.getElementById(sectionId);
    if(!section)
    {
        console.error("Section not find:", sectionId);
        return;
    }

    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });

    section.classList.add('active');
}