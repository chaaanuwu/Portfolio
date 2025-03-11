// Function to handle smooth scrolling without showing hash in URL
export const smoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  // Function to handle link clicks with prevention of default behavior
  export const handleLinkClick = (e, sectionId, callback = null) => {
    e.preventDefault();
    smoothScroll(sectionId);
    
    // Execute optional callback function (e.g., for closing mobile menu)
    if (callback && typeof callback === 'function') {
      callback();
    }
  };
  
  // Function to detect which section is currently visible
  export const detectActiveSection = () => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    let currentSection = "";
  
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = id;
        }
      }
    });
  
    return currentSection;
  };