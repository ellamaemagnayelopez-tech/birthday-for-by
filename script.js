document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     CHAPTER NAVIGATION
  ===================================================== */

  const chapters = document.querySelectorAll(".chapter");

  function goToChapter(id) {
    chapters.forEach(chapter => {
      chapter.classList.remove("active");
    });

    const nextChapter = document.getElementById(id);

    if (nextChapter) {
      nextChapter.classList.add("active");
    }
  }

  document.querySelectorAll("[data-next]").forEach(button => {
    button.addEventListener("click", () => {
      const next = button.dataset.next;

      if (next) {
        goToChapter(next);
      }
    });
  });


  /* =====================================================
     NO BUTTON — JUST A LITTLE TEASE 😂
  ===================================================== */

  const noBtn = document.getElementById("noBtn");

  if (noBtn) {
    noBtn.addEventListener("mouseenter", () => {

      const moves = [
        { x: 70, y: 0 },
        { x: -60, y: 20 },
        { x: 40, y: -25 },
        { x: -30, y: 30 }
      ];

      const move = moves[Math.floor(Math.random() * moves.length)];

      noBtn.style.transform =
        `translate(${move.x}px, ${move.y}px)`;
    });

    noBtn.addEventListener("click", () => {
      noBtn.textContent = "Nice try 😂";

      setTimeout(() => {
        noBtn.textContent = "No, thanks";
      }, 1000);
    });
  }


  /* =====================================================
     CONSTELLATION
  ===================================================== */

  const starPoints = document.querySelectorAll(".star-point");
  const milestoneDetail = document.getElementById("milestoneDetail");

  starPoints.forEach(star => {

    star.addEventListener("click", () => {

      starPoints.forEach(point => {
        point.classList.remove("selected");
      });

      star.classList.add("selected");

      const title = star.dataset.title;
      const info = star.dataset.info;

      milestoneDetail.innerHTML = `
        <span class="detail-hint">MILESTONE</span>
        <h3>${title}</h3>
        <p>${info}</p>
      `;
    });

  });


  /* =====================================================
     ANTHON FILES
  ===================================================== */

  const factCards = document.querySelectorAll(".fact-card");

  factCards.forEach(card => {

    card.addEventListener("click", () => {

      const alreadyOpen = card.classList.contains("revealed");

      factCards.forEach(item => {
        item.classList.remove("revealed");
      });

      if (!alreadyOpen) {
        card.classList.add("revealed");
      }

    });

  });


  /* =====================================================
     GIFT BOX
  ===================================================== */

  const giftBox = document.getElementById("giftBox");
  const giftInstruction = document.getElementById("giftInstruction");
  const finalMessage = document.getElementById("finalMessage");

  if (giftBox) {

    giftBox.addEventListener("click", () => {

      giftBox.classList.add("opened");

      if (giftInstruction) {
        giftInstruction.style.opacity = "0";
      }

      setTimeout(() => {

        if (finalMessage) {
          finalMessage.classList.add("show");
        }

      }, 500);

    });

  }


  /* =====================================================
     SUBTLE PARALLAX
  ===================================================== */

  document.addEventListener("mousemove", event => {

    const x = (event.clientX / window.innerWidth - 0.5);
    const y = (event.clientY / window.innerHeight - 0.5);

    const nebula = document.querySelector(".nebula");

    if (nebula) {
      nebula.style.transform =
        `translate(${x * -18}px, ${y * -18}px)`;
    }

  });


  /* =====================================================
     PHOTO HOVER DEPTH
  ===================================================== */

  const photos = document.querySelectorAll(
    ".memory-photo, .story-photo, .cebu-photo, .family-card, .message-photo"
  );

  photos.forEach(photo => {

    photo.addEventListener("mouseenter", () => {
      photo.style.zIndex = "20";
    });

    photo.addEventListener("mouseleave", () => {
      photo.style.zIndex = "";
    });

  });

});