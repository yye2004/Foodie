   function addComment() {
        var nameInput = document.getElementById('name-input');
        var commentInput = document.getElementById('comment-input');
        var name = nameInput.value.trim();
        var commentText = commentInput.value.trim();
        var date = new Date().toLocaleString();

        if (name !== "" && commentText !== "") {
            var commentsList = document.getElementById('comments-list');
            var commentItem = document.createElement('li');
            commentItem.className = 'comment';
            commentItem.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">${name}</span> 
                    <span class="comment-date">${date}</span>
                </div>
                <div class="comment-content">${commentText}</div>
                <div class="comment-actions">
                    <a onclick="likeComment(this)">Like</a>
                    <a onclick="replyComment(this)">Reply</a>
                </div>
            `;
            commentsList.appendChild(commentItem);
            nameInput.value = '';
            commentInput.value = '';
        } else {
            alert('Name and comment cannot be empty');
        }
    }

    function likeComment(element) {
        var likeText = element.textContent;
        if (likeText === 'Like') {
            element.textContent = 'Unlike';
        } else {
            element.textContent = 'Like';
        }
    }

    function replyComment(element) {
        var commentItem = element.closest('.comment');
        var replyInput = document.createElement('textarea');
        replyInput.className = 'reply-input';
        replyInput.placeholder = 'Write a reply...';
        var replyButton = document.createElement('button');
        replyButton.textContent = 'Reply';
        replyButton.onclick = function () {
            addReply(commentItem, replyInput.value);
            replyInput.remove();
            replyButton.remove();
        };
        commentItem.appendChild(replyInput);
        commentItem.appendChild(replyButton);
    }

    function addReply(commentItem, replyText) {
        var date = new Date().toLocaleString();
        if (replyText.trim() !== "") {
            var replyItem = document.createElement('div');
            replyItem.className = 'comment reply';
            replyItem.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">Anonymous</span>
                    <span class="comment-date">${date}</span>
                </div>
                <div class="comment-content">${replyText}</div>
                <div class="comment-actions">
                    <a onclick="likeComment(this)">Like</a>
                    <a onclick="replyComment(this)">Reply</a>
                </div>
            `;
            commentItem.appendChild(replyItem);
        } else {
            alert('Reply cannot be empty');
        }
    }

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
