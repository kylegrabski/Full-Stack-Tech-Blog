const $commentBtn = document.querySelector("#commentBtn");

$commentBtn.addEventListener("click", function (e) {
  console.log(this.value);
  if (e) {
    document.location.replace(`/single-post/${this.value}`);
  }
});
