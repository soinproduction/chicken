document.getElementById('burger-btn').onclick = function() {
  document.getElementById('burger-btn').classList.toggle('burger-btn--active');
  document.getElementById('header-menu').classList.toggle('header-menu--active');
}

document.getElementById('close').onclick = function() {
  document.getElementById('burger-btn').classList.remove('burger-btn--active');
  document.getElementById('header-menu').classList.remove('header-menu--active');
}
const anch = document.querySelectorAll("a[href*='#']")


for (let anchs of anch ) {
  anchs.addEventListener('click', function(event) {
    event.preventDefault();
    const blockId = anchs.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
