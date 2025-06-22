const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    const glowX = ((x - centerX) / centerX) * 50;
    const glowY = ((y - centerY) / centerY) * 50;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-glowX}px ${-glowY}px 30px rgba(0,255,255,0.2),
                             ${glowX}px ${glowY}px 30px rgba(255,0,255,0.2)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.3)`;
  });
});
