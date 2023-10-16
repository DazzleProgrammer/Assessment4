function createAccordion() {
    const accordionSections = document.querySelectorAll('.accordion-section');
   
    accordionSections.forEach(section => {
       const header = section.querySelector('.accordion-section-header');
       const content = section.querySelector('.accordion-section-content');
   
       header.addEventListener('click', () => {
         content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
       });
    });
   }



   document.addEventListener('DOMContentLoaded', createAccordion);