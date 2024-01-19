function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-abertoPreto.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/botao-fecharPreto.png";
    }
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
}
  // Fechar o menu dropdown se o usuário clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
};

const carousel = document.querySelector('.carousel');
const indicatorsContainer = document.getElementById('indicators');

let currentIndex = 0;
const totalImages = 4;

// Criar indicadores
for (let i = 0; i < totalImages; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
    });
    indicatorsContainer.appendChild(indicator);
}

function updateCarousel() {
    const newPosition = currentIndex * -25; // Cada imagem ocupa 25% da largura da tela
    carousel.style.transform = `translateX(${newPosition}%)`;

    // Atualizar indicadores
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}




