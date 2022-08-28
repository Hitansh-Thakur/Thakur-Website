const headings = document.querySelectorAll(".dropdown-heading");

headings.forEach(heading =>{
    heading.addEventListener('click',ToggleActive,false);
});


function ToggleActive(){
    const currentContentEle = this.nextElementSibling;

    const isCollapsed = currentContentEle.classList.contains('dropdown-content-collasped');
    headings.forEach(heading => {
        const content = heading.nextElementSibling;
        if(!content.classList.contains('dropdown-content-collasped')){
            content.classList.add('dropdown-content-collasped');
        }
    });
    if (isCollapsed) {
        currentContentEle.classList.remove('dropdown-content-collasped')
    }
}   










headings.forEach(heading =>{
    heading.addEventListener('click',() => {
        const content = heading.nextElementSibling;
        content.classList.toggle('dropdown-content-active');
    });
    
 
});