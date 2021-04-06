async function newFormHandler(e) {
  e.prevenDefault();

  const $post_title = document.querySelector("#post_title");
  const $post_content = document.querySelector("#post_content");

    const response = await fetch('/api/post-routes', {
        method: 'POST',
        body: JSON.stringify({
            title: $post_title,
            content: $post_content
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        console.log(err)
        alert('Failed To Add Post')
    }

}

// document
//   .querySelector(".new-post-form")
//   .addEventListener("click", function (e){
//       console.log("CLICK POST")
//   });
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
