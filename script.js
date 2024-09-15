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

