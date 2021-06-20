(document.getElementById("burger-btn").onclick = function () {
  this.classList.toggle("burger-btn--active"),
    document.getElementById("header-menu").classList.toggle("header-menu--active");
}),
(document.getElementById("close").onclick = function () {
  document.getElementById("burger-btn").classList.remove("burger-btn--active"),
  document.getElementById("header-menu").classList.remove("header-menu--active");
}),
(document.getElementById("reg-code").onclick = function () {
  document.getElementById("overlay").classList.toggle("overlay--active"),
  document.getElementById("modal").classList.toggle("modal--active");
}),
(document.getElementById("close-btn").onclick = function () {
  document.getElementById("overlay").classList.remove("overlay--active"),
  document.getElementById("modal").classList.remove("modal--active");
}),
document.getElementById("overlay").addEventListener("click", function (e) {
    "overlay" == e.target.id &&
      (this.classList.remove("overlay--active"),
      document.getElementById("modal").classList.remove("modal--active"));
  });


// const SELECT_LIST = document.getElementById("select-list");
// const INPUT = document.getElementById("country");

// INPUT.addEventListener("focus", function (e) {

//     // SELECT_LIST.classList.add("select-list--active");

//   //  if (INPUT != e.target.id && SELECT_LIST.classList.contains('select-list--active')) {
//   //   SELECT_LIST.classList.remove("select-list--active");
//   //   }

//   if(SELECT_LIST.classList.contains('select-list--active'))
//     SELECT_LIST.classList.remove('select-list--active');
//   else
//     SELECT_LIST.classList.add('select-list--active');

// }),

  // document.getElementById("country").addEventListener("input", function (e) {
  //   selectList.classList.add("select-list--active");

  //   if (selectList.classList.contains('select-list--active')) {
  //     selectList.classList.remove("select-list--active")
  //   }
  // }),




  document.addEventListener("DOMContentLoaded", function () {
    for (var e = document.links, t = 0, n = e.length; t < n; t++) o(e[t]);

    function o(e) {
      if (
        e.hostname === location.hostname &&
        e.pathname === location.pathname
      ) {
        var t = e.hash.slice(1) ?
          document.getElementById(e.hash.slice(1)) :
          document.body;
        t &&
          e.addEventListener("click", function (e) {
            e.preventDefault(),
              (function (e) {
                var t = 0,
                  n = e / 90,
                  o = window.pageYOffset || document.documentElement.scrollTop,
                  c = setInterval(function () {
                    (o += n),
                    window.scrollTo(0, o),
                      ++t >= 90 && clearInterval(c);
                  }, 1);
              })(t.getBoundingClientRect().top);
          });
      }
    }
  });
