'use strict';
var moduleDOM = (function() {

    function editPhotoPost(id, photoPost) {
        var index = photoPosts.findIndex((element)=>element.id === id);
        if (index !== -1) {
            if (photoPost.description !== undefined && photoPost.description.length !== 0) {
                document.getElementsByClassName('description_text')[index].textContent = photoPost.description;
                photoPosts[index].description = photoPost.description;
            }
            if (photoPost.hashTags !== undefined && photoPost.hashTags.length !== 0) {
                document.getElementsByClassName('hashTag_text')[index].textContent = photoPost.hashTags;
                photoPosts[index].hashTags = photoPost.hashTags;
            }
            if (photoPost.likes !== undefined && photoPost.likes.length !== 0) {
                document.getElementsByClassName('likes_text')[index].textContent = photoPost.likes;
                photoPosts[photoPosts.length - index - 1].likes = photoPost.likes;
            }
            if (photoPost.photoLink !== undefined && photoPost.photoLink.length !== 0) {
                document.getElementsByClassName('photo')[index].src = photoPost.photoLink;
                photoPosts[index].photoLink = photoPost.photoLink;
            }
        }
    }

    function removePhotoPost(posts, id) {
        var index = photoPosts.findIndex((element)=>element.id === id);
        if (index != -1) {
            //document.querySelector('.post[data-post-id="' + id + '"]').classList.add('hide');
            posts.splice(id - 1, 1);
        }
        return posts;
    }

    function controlPost(photoPost, user) {
        if (photoPost.author !== user) {
            document.querySelector('.link_edit_delete').classList.add('hide');
            document.querySelector('.link_edit').classList.add('hide');
        }
        if (user === '') {
            document.querySelector('.text').classList.add('hide');
            document.querySelector('.link_edit_like').classList.add('hide');
        }
        for (var index = 0; index < photoPost.likes.length; index++) {
            if (photoPost.likes[index] === user) {
                var post = document.querySelector('.button_edit_like');
                post.src = 'site/like5.png';
                console.log(document.getElementsByClassName('button_edit_like').src);
            }
        }
    }

    function removeHtmlPost(id) {
        var container = document.querySelector('.all_posts');
        var deleteElem = document.querySelector('.post[data-post-id="' + id + '"]');
        container.removeChild(deleteElem);
    }

    function controlUser(user) {
        if (user === '') {
            document.querySelector('.button_add_post').classList.add('hide');
            document.querySelector('.user').classList.add('hide');
        }
        if (user !== '') {
            document.querySelector('.user').classList.remove('hide');
            document.querySelector('.user_name_text').textContent = user;
            document.querySelector('.user_text').textContent = '';
        }
    }

    function compareDate(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
    }
    function sortPostsByDate(posts) {
        posts.sort(compareDate);
        return posts;
    }
function controlSelector(photoPosts) {
        for(var indexPosts = 0; indexPosts < photoPosts.length; indexPosts++){
            for(var indexComments = 0; indexComments < photoPosts[indexPosts].comments.length; indexComments++) {
                addHashTagsSelect(moduleEvents.searchHashTags(photoPosts[indexPosts].comments[indexComments].comment));
            }
        }
}

    function displayPhotoPosts(photoPosts, user, countElementsAdd) {
        controlUser(user);
        controlSelector(photoPosts);
        var COUNT_ELEMENTS = 10;
        var countPostsDisplay;
        var countPostsHtml = document.getElementsByClassName('post').length;
        photoPosts = sortPostsByDate(photoPosts);
        if(countElementsAdd === 0 && countPostsHtml === 0){
            countPostsDisplay = COUNT_ELEMENTS;
        }
        else {
            if (photoPosts.length < countElementsAdd + countPostsHtml) {
                countPostsDisplay = photoPosts.length;
            } else {
                countPostsDisplay = countElementsAdd + countPostsHtml;
            }
        }
        while (countPostsHtml) {
            removeHtmlPost(document.getElementsByClassName('post')[0].getAttribute('data-post-id'));
            countPostsHtml--;
        }
        for (var index = photoPosts.length - countPostsDisplay; index < photoPosts.length; index++) {
            addPhotoPost(photoPosts[index], user);
        }
    }

    function addOptionToSelect(elementArr, select) {
        var option = document.createElement('option');
        option.innerHTML = elementArr;
        select.appendChild(option)
    }

    function addComment(posts, postID, comment) {
        for (var index = 0; index < comment.length; index++) {
            posts[postID].comments.push(comment[index]);
        }
        return posts;
    }

    function addHashTagsSelect(arrHashTags) {
        var arr = [];
        var viewHashTags = [];
        var options = document.getElementsByTagName('option');
        for(var index = 0; index < options.length; index++){
            viewHashTags.push(options[index].innerHTML);
        }
        for (var item = 0; item < arrHashTags.length; item++) {
                if (viewHashTags.indexOf(arrHashTags[item]) === -1) {
                    arr.push(arrHashTags[item]);
                }
        }
        var select = document.querySelector('.select_text');
        for (var indexArr = 0; indexArr < arr.length; indexArr++) {
            addOptionToSelect(arr[indexArr], select);
        }
    }

    function addPhotoPost(photoPost, user) {
        var posts = document.querySelector('.all_posts');
        var firstElem = document.getElementsByClassName('post')[0];
        var newElem = document.createElement('div');
        newElem.className = 'post';
        newElem.setAttribute('data-post-id', photoPost.id);
        let commentsArr = (photoPost.comments || []).map(comment=>`
        <div class="comments_text">
            <p class="user_name_comments"><img class="user_comments_photo" src=${comment.authorPhoto}>${comment.author}</p>
            <p class ="comment">${comment.comment}</p>
        </div>`);

        newElem.innerHTML = `
        <div class="user_panel">
            <div>
                 <p class="user_name_text_post"> 
                 <img class="user_name_photo_post" src="site/user.png" />${photoPost.author}</p>
            </div>
            <form class="buttons">
                 <a class="link_edit_delete" ><img class="button_edit_delete" src="site/delete.png" /></a>
                 <a class="link_edit_like"  ><img class="button_edit_like" src="site/like4.png"/></a>
                 <a class="link_edit"  ><img class="button_edit" src="site/edit.png"/></a>
            </form>
        </div>
        <div class="photopost">
            <div class="user_photopost">
                <img class="photo" src=${photoPost.photoLink}><p class="date_post">${new Date(photoPost.createdAt).toLocaleDateString()}</p>
                <div class="description">
                    <p class="description_text">${photoPost.description}</p>
                    <p class="hashTag_text">${photoPost.hashTags}</p>
                    <p class="likes_text">${photoPost.likes}</p>
                </div>
            </div>
            <form class="comments" name="add_comments">
                    <div class="comments_overflow">
                        <div id="list_comments">
                            ${commentsArr.join('\n')}
                         </div>
                    </div>
                    <form >
                        <input type="text" class ="text" name="input_comment" placeholder="Написать коментарий..." />
                    </form>
            </form>
        </div>
        `;

        posts.insertBefore(newElem, firstElem);
        if (photoPost.id > photoPosts.length) {
            photoPosts.push(photoPost);
        }
        controlPost(photoPost, user);
    }

    return {
        removePhotoPost: removePhotoPost,
        editPhotoPost: editPhotoPost,
        addPhotoPost: addPhotoPost,
        displayPhotoPosts: displayPhotoPosts,
        addHashTagsSelect: addHashTagsSelect,
        controlUser: controlUser,
        addComment: addComment,
        removeHtmlPost: removeHtmlPost
    }

}());
// console.log(moduleDOM.controlUser());
// console.log(moduleDOM.displayPhotoPosts());
// console.log(moduleDOM.removePhotoPost('3'));
// console.log(moduleDOM.addPhotoPost({
//     id: '21',
//     description: 'description21',
//     createdAt: new Date('2018-02-21T10:00:00'),
//     author: 'Author21',
//     photoLink: 'site/photo5.jpg',
//     hashTags: ['#roses', '#flowers', '#plant'],
//     likes: ['like2', 'like1', 'like3']
// }));
// console.log(module.editPhotoPost("1", {
//     description: 'description12',
//     author: 'Author12',
//     photoLink: 'site/photo.jpg',
//     hashTags: ['#hashTag10', '#hashTag20', '#hashTag30'],
//     likes: ['like20', 'like10', 'like30']
// }));
// console.log(module.hashTagsSelect());
