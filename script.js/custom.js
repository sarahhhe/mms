$('.dropdown').on('mouseleave', function () {
    $(this).find('.dropdown-menu').removeClass('show');
});

const map = document.getElementById('map');
const country = document.querySelectorAll('.land');
const toolTip = document.getElementById('tooltip');
const message = toolTip.innerHTML;

// grab the country name and display
function showCountryName() {
    let countryName = event.target.getAttribute('title');
    toolTip.innerHTML = countryName;
}

// show the default text
function hideCountryName() {
  toolTip.innerHTML = message;
}

// set event listener on the map
map.addEventListener('mouseover', function(event){
  // if the mouse hovers over a country
  if (event.target.classList.contains('land')) {
    showCountryName();
  }
  else {
    hideCountryName();
  }
});