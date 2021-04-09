const newFormHandler = async (e) => {
  e.preventDefault();
    console.log("New form handler called")

  const $post_title = document.querySelector("#post_title").value.trim();
  const $post_content = document.querySelector("#post_content").value.trim();

    const response = await fetch('/api/posts/', {
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
//   .querySelector("#submitBtn")
//   .addEventListener("click", function (e){
//       e.preventDefault();
//       console.log("CLICK POST")
//   });
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
