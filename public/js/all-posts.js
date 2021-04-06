const $commentBtn = document.querySelectorAll("#commentBtn");
const $postBtn = document.querySelector("#postBtn");

$commentBtn.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(this.value);
    if (e) {
      document.location.replace(`/single-post/${this.value}`);
    }
  });
});

$postBtn.addEventListener("click", (e) => {
  document.location.replace("/new-post");
});
