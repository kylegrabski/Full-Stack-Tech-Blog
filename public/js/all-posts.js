const $commentBtn = document.querySelectorAll("#commentBtn");

$commentBtn.forEach(item => {
  item.addEventListener("click", function (e) {
    console.log(this.value);
    if (e) {
      document.location.replace(`/single-post/${this.value}`);
    }
  })
});
