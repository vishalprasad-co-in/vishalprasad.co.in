function toggleMenu() {
    let navOverlay = document.getElementsByClassName("nav-overlay");
    console.log("inside else 1"+navOverlay[0].style);
    if (navOverlay[0].style.display === "block") {
        console.log("inside if");       
        navOverlay[0].style.display = "none";   
    } else {
        console.log("inside else2");    
        navOverlay[0].style.display = "block"; 
             
    }
  }