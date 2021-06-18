document.getElementById('burger-btn').onclick = function() {
  this.classList.toggle('burger-btn--active');
  document.getElementById('header-menu').classList.toggle('header-menu--active');
}

document.getElementById('close').onclick = function() {
  document.getElementById('burger-btn').classList.remove('burger-btn--active');
  document.getElementById('header-menu').classList.remove('header-menu--active');
}

document.getElementById('reg-code').onclick = function() {
  document.getElementById('overlay').classList.toggle('overlay--active');
  document.getElementById('modal').classList.toggle('modal--active');
}

document.getElementById('close-btn').onclick = function() {
  document.getElementById('overlay').classList.remove('overlay--active');
  document.getElementById('modal').classList.remove('modal--active');
}

document.getElementById('overlay').addEventListener("click", function(e) {
  if( e.target.id == 'overlay' ) {
      this.classList.remove('overlay--active');
      document.getElementById('modal').classList.remove('modal--active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  var links = document.links
  for (var i = 0, ie = links.length; i < ie; i++) f(links[i])
  function f(link) {
      // stop func if link doesn't refer to the current page
      if (link.hostname !== location.hostname ||
          link.pathname !== location.pathname)
              return

      // get target element (# -> <body>), stop func if there is no target
      var target = link.hash.slice(1) ? document.getElementById(link.hash.slice(1)) : document.body
      if (!target) return

      // prevent sudden jump on click, instead scroll smoothly to the target
      // after scrolling, add hash to url
      link.addEventListener('click', function(e) {
          e.preventDefault()
          smoothScroll(target.getBoundingClientRect().top)
          // setTimeout(function() {location.hash = link.hash}, 600)
      })
  }

  // smoothly scroll window to the next position, stop when target is reached
  // scrolling takes about 500ms
  function smoothScroll(distance) {
      // steps -> number of steps to the destination
      var steps = 20, stepInterval = 25, i = 0, stepLength = distance / steps
      var currentPos = window.pageYOffset || document.documentElement.scrollTop

      // scroll to the next intermediate step until destination is reached
      var interval = setInterval(function() {
          currentPos += stepLength // next scroll position
          window.scrollTo(0, currentPos)
          if (++i >= steps) clearInterval(interval) // clear after steps
      }, stepInterval)
  }
})




