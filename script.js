document.getElementById("menubtn").addEventListener("click", function() {
    const menu = document.getElementById("megamenu");
    menu.style.display = "flex";  // Show the menu
  });
  
  document.getElementById("closeBtn").addEventListener("click", function() {
    const menu = document.getElementById("megamenu");
    menu.style.display = "none";  // Hide the menu
  });
  
  window.addEventListener("scroll", function() {
    const workslide = document.getElementById("workslide");
    const scrollPosition = window.scrollY; // Get the current scroll position
    const viewportHeight = window.innerHeight; // Get the height of the viewport
    const maxScroll = document.body.scrollHeight - viewportHeight; // Max scrollable distance

    const scrollFactor = (scrollPosition / maxScroll) * 150; // Calculate percentage of scroll
    const translateX = Math.min(100, 100 - scrollFactor * 2); // Dynamically adjust the translation

    // Apply the translation based on scroll position
    workslide.style.transform = `translateX(${translateX}%)`;
});

gsap.from("#intro-div",{
  opactity:0,
  y:"-100%",
  duration:1,
  opactity:100,
  delay:.2,
  stager:1


})

fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("includefooter").innerHTML = data;
        });


// Fetch JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Populate Skills
    const skillP1 = document.querySelector('.skill-p1');
    const skillP2 = document.querySelector('.skill-p2');
    data.skills[0].forEach(skill => {
      let skillDiv = document.createElement('div');
      skillDiv.classList.add('skillwrapper');
      skillDiv.innerHTML = `
        <i class="ri-arrow-right-down-line"></i>
        <h4>${skill}</h4>
      `;
      skillP1.appendChild(skillDiv);
    });
    data.skills[1].forEach(skill => {
      let skillDiv = document.createElement('div');
      skillDiv.classList.add('skillwrapper');
      skillDiv.innerHTML = `
        <i class="ri-arrow-right-down-line"></i>
        <h4>${skill}</h4>
      `;
      skillP2.appendChild(skillDiv);
    });

    // Populate Certifications
    const certContainer = document.getElementById('certificationholder');
    data.certifications.forEach(cert => {
      let certDiv = document.createElement('div');
      certDiv.classList.add('certificateswithdate');
      certDiv.innerHTML = `
        <h4>${cert.title}</h4>
        <h4>(${cert.date})</h4>
      `;
      certContainer.appendChild(certDiv);
    });

    // Populate Education
    const eduContainer = document.querySelector('#education');
    data.education.forEach(edu => {
      let eduDiv = document.createElement('div');
      eduDiv.classList.add('certificateswithdate');
      eduDiv.innerHTML = `
        <h4>${edu.degree}</h4>
        <h4>(${edu.year})</h4>
      `;
      eduContainer.appendChild(eduDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


