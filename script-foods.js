document.addEventListener("DOMContentLoaded", function() {
    // Handle like button clicks
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", function() {
            const likeCount = this.querySelector(".like-count");
            if (this.classList.contains("liked")) {
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
                this.classList.remove("liked");
            } else {
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
                this.classList.add("liked");
            }
        });
    });

    // Handle share button clicks
    document.querySelectorAll(".share-btn").forEach(button => {
        button.addEventListener("click", function() {
            window.open("https://www.facebook.com", "_blank");
        });
    });

    // Handle comment button clicks
    const modal = document.getElementById("comment-modal");
    const closeModal = modal.querySelector(".close");

    document.querySelectorAll(".comment-btn").forEach(button => {
        button.addEventListener("click", function() {
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    document.getElementById("submit-comment").addEventListener("click", function() {
        const commentText = document.getElementById("comment-text").value;
        if (commentText.trim()) {
            alert("Comment submitted: " + commentText);
            modal.style.display = "none";
            document.getElementById("comment-text").value = "";
        } else {
            alert("Please write a comment before submitting.");
        }
    });
});
