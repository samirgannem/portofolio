const DOMElements = {
    projectsForm: document.querySelector('.tittle-projects'),
  };
const DOMElements1 = {
    skillsForm: document.querySelector('.line-footer'),
  };
const DOMElements2 = {
    contactForm: document.querySelector('.images-footer'),
  };

window.addEventListener('click', (e) => {
  const eventTarget = e.target;

  if (eventTarget.matches('.btn-projects')) {
    scrollToContact(DOMElements);
  }
  
  if (eventTarget.matches('.btn-skills')) {
    scrollToContact1(DOMElements1);
  }  
  
  if (eventTarget.matches('.btn-contact')) {
    scrollToContact2(DOMElements2);
  }
});

window.addEventListener('scroll', (e) => {
  wAppAndNavStyling(DOMElements);
  handleProgressBar(DOMElements);
});


  function scrollToContact(DOMElements) {
    const { projectsForm} = DOMElements;
    projectsForm.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function scrollToContact1(DOMElements1) {
    const { skillsForm} = DOMElements1;
    skillsForm.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function scrollToContact2(DOMElements2) {
    const { contactForm} = DOMElements2;
    contactForm.scrollIntoView({
      behavior: 'smooth',
    });
  }

