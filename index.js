var navLinks = document.getElementById("navLinks");

      function showMenu() {
        navLinks.style.right = "0";
      }

      function hideMenu() {
        navLinks.style.right = "-200px";
      }
      console.log(document.body.childNodes);

      // show/hide faq answer

      const faqs = document.querySelectorAll(".faq");
      faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
          faq.classList.toggle("open");
          // Change icon
          const icon = faq.querySelector(".fa_icon i");
          if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";
          } else {
            icon.className = "fa-solid fa-plus";
          }
        });
      });

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        //when window width is >=600
        breakpoints: {
          600: {
            slidesPerView: 2,
          },
        },
      });

      // our success story couters
      var clients = setInterval(happyClients, 10);
      var trainer = setInterval(Trainers, 10);
      var interns = setInterval(abroadInters, 10);
      var support = setInterval(hoursOfSupport, 10);
      let count1 = 1;
      let count2 = 1;
      let count3 = 1;
      let count4 = 1;

      function Trainers() {
        count1++;
        document.querySelector("#number1").innerHTML = count1;
        if (count1 == 1100) {
          clearInterval(trainer);
        }
      }

      function happyClients() {
        count2++;
        document.querySelector("#number2").innerHTML = count2;
        if (count2 == 89) {
          clearInterval(clients);
        }
      }

      function abroadInters() {
        count3++;
        document.querySelector("#number3").innerHTML = count3;
        if (count3 == 400) {
          clearInterval(interns);
        }
      }

      function hoursOfSupport() {
        count4++;
        document.querySelector("#number4").innerHTML = count4;
        if (count4 == 24) {
          clearInterval(support);
        }
      }

      // scroll to top functionalities
      // Get the button
      var scrollToTopButton = document.getElementById("scrollToTopBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          scrollToTopButton.style.display = "block";
        } else {
          scrollToTopButton.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      scrollToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
      });