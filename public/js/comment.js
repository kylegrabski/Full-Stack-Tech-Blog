$newComment = document.querySelector(".newCommentForm");


const newCommentHandler = async (e) => {
    e.preventDefault();
    console.log("New Comment Handler")

    const $commentContent = document.querySelector("#commentContent").value.trim();
    const post_id = window.location.href.charAt(window.location.href.length - 1);
    console.log(post_id)
    const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({
            content: $commentContent,
            post_id: post_id
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if(response.ok) {
        document.location.reload();
    } else {
        console.log(err)
        alert('Failed To Add Comment')
    }
}

$newComment.addEventListener("submit", newCommentHandler)