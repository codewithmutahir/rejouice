var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (e) {
  gsap.to("#cursor", {
    x:e.x,
    y:e.y
  });
});
