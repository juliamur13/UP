"use strict";
var user = "Author21";
var photoPosts = [{
    id: '1',
    description: 'description1',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author1',
    photoLink: 'site/photo2.jpg',
    hashTags: ['#roses', '#flowers', '#plant'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '2',
    description: 'description2',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author2',
    photoLink: 'site/photo3.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '3',
    description: 'description3',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author3',
    photoLink: 'site/photo4.jpg',
    hashTags: ['#hashTag2', '#hashTag1', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '4',
    description: 'description4',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author4',
    photoLink: 'site/photo5.jpg',
    hashTags: ['#hashTag10', '#hashTag20', '#hashTag30'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '5',
    description: 'description5',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author5',
    photoLink: 'site/photo3.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '6',
    description: 'description6',
    createdAt: new Date('2018-02-21T09:00:00'),
    author: 'Author6',
    photoLink: 'site/photo6.jpg',
    hashTags: ['#hashTag2', '#hashTag1', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '7',
    description: 'description7',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author7',
    photoLink: 'site/photo7.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '8',
    description: 'description8',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author8',
    photoLink: 'site/photo8.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '9',
    description: 'description9',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author9',
    photoLink: 'site/photo10.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '10',
    description: 'description10',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author10',
    photoLink: 'site/photo11.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '11',
    description: 'description11',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author11',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '12',
    description: 'description12',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author12',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '13',
    description: 'description13',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author13',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '14',
    description: 'description14',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author14',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '15',
    description: 'description15',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author15',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '16',
    description: 'description16',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author16',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '17',
    description: 'description17',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author17',
    photoLink: 'site/photo10.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '18',
    description: 'description18',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author18',
    photoLink: 'site/photo7.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '19',
    description: 'description19',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author19',
    photoLink: 'site/photo6.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}, {
    id: '20',
    description: 'description20',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author20',
    photoLink: 'site/photo5.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3']
}];

var module = (function() {

    function editPhotoPost(id, photoPost) {
        var index = photoPosts.findIndex((element)=>element.id === id);
        if (index !== -1) {
            if (photoPost.description !== undefined && photoPost.description.length !== 0) {
                document.getElementsByClassName("description_text")[index].textContent = photoPost.description;
                photoPosts[index].description = photoPost.description;
            }
            if (photoPost.hashTags !== undefined && photoPost.hashTags.length !== 0) {
                document.getElementsByClassName("hashTag_text")[index].textContent = photoPost.hashTags;
                photoPosts[index].hashTags = photoPost.hashTags;
            }
            if (photoPost.likes !== undefined && photoPost.likes.length !== 0) {
                document.getElementsByClassName("likes_text")[index].textContent = photoPost.likes;
                photoPosts[photoPosts.length - index - 1].likes = photoPost.likes;
            }
            if (photoPost.photoLink !== undefined && photoPost.photoLink.length !== 0) {
                document.getElementsByClassName("photo")[index].src = photoPost.photoLink;
                photoPosts[index].photoLink = photoPost.photoLink;
            }
        }
    }
    function removePhotoPost(id) {
        var index = photoPosts.findIndex((element)=>element.id === id);
        if (index != -1) {
            var posts = document.querySelector(".all_posts");
            var deleteElem = document.getElementsByClassName("post")[index];
            posts.removeChild(deleteElem);
            photoPosts.splice(index, 1);
            console.log(photoPosts);
        }
    }
    function controlPost(author) {
        if (author !== user) {
            document.querySelector(".link_edit_delete").classList.add("hide");
            document.querySelector(".link_edit").classList.add("hide");
        }
        if (user === null) {
            document.querySelector(".text").classList.add("hide");
        }
    }

    function controlUser() {
        if (user === null) {
            document.querySelector(".button_add_post").classList.add("hide");
            document.querySelector(".button_exit").textContent = 'Авторизация';
            document.querySelector(".user").classList.add("hide");
        }
        if (user !== null) {
            document.querySelector(".user_name_text").textContent = user;
        }
    }
    function displayPhotoPosts() {

        var COUNT_ELEMENTS = 20;
        for (var index = 0; index < COUNT_ELEMENTS; index++) {
            addComment(photoPosts[index], [{
                author: 'CommentsAuthor1',
                authorPhoto: 'site/user.png',
                comment: 'Комментарий'
            }, {
                author: 'CommentsAuthor2',
                authorPhoto: 'site/user.png',
                comment: 'Комментарий'
            }, {
                author: 'CommentsAuthor3',
                authorPhoto: 'site/user.png',
                comment: 'Комментарий'
            }, {
                author: 'CommentsAuthor2',
                authorPhoto: 'site/user.png',
                comment: 'Комментарий'
            }, {
                author: 'CommentsAuthor3',
                authorPhoto: 'site/user.png',
                comment: 'Комментарий'
            }, {
                author: 'CommentsAuthor2',
                authorPhoto: 'site/user.png',
                comment: 'Комментарий'
            }, {
                author: 'CommentsAuthor3',
                authorPhoto: 'site/user.png',
                comment: 'Комментарий'
            }]);
            addPhotoPost(photoPosts[index]);
        }

    }
    function addOptionToSelect(elementArr, select) {
        var option = document.createElement("option");
        option.innerHTML = elementArr;
        select.appendChild(option)
    }
    function addComment(photoPost, comments) {
        photoPost.comments = comments;
    }

    function hashTagsSelect() {
        var arrHashTag = [];
        for (var index = 0; index < photoPosts.length; index++) {
            for (var item = 0; item < photoPosts[index].hashTags.length; item++) {
                if (arrHashTag.indexOf(photoPosts[index].hashTags[item]) === -1) {
                    arrHashTag.push(photoPosts[index].hashTags[item]);
                }
            }
        }
        var select = document.querySelector(".select_text");
        for (index = 0; index < arrHashTag.length; index++) {
            addOptionToSelect(arrHashTag[index], select);
        }
    }
    function addPhotoPost(photoPost) {
        var posts = document.querySelector('.all_posts');
        var firstElem = document.getElementsByClassName("post")[0];
        var newElem = document.createElement("div");
        newElem.className = "post";
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
            <div class="buttons">
                 <a class="link_edit_delete" ><img class="button_edit" src="site/delete.png" /></a>
                 <a class="link_edit_like"  ><img class="button_edit_like" src="site/like4.png" /></a>
                 <a class="link_edit"  ><img class="button_edit" src="site/edit.png"/></a>
            </div>
        </div>
        <div class="photopost">
            <div class="user_photopost">
                <img class="photo" src=${photoPost.photoLink}><p class="date_post">${photoPost.createdAt}</p>
                <div class="description">
                    <p class="description_text">${photoPost.description}</p>
                    <p class="hashTag_text">${photoPost.hashTags}</p>
                    <p class="likes_text">${photoPost.likes}</p>
                </div>
            </div>
            <div class="comments">
                    <div class="comments_overflow">
                        <div id="list_comments">
                            ${commentsArr.join('\n')}
                         </div>
                    </div>
            <input type="text" class="text" placeholder="Написать коментарий..." />
            </div>
        </div>
        `;

        posts.insertBefore(newElem, firstElem);
        if (photoPost.id > photoPosts.length) {
            photoPosts.push(photoPost);
        }
        controlPost(photoPost.author);
    }
    return {
        removePhotoPost: removePhotoPost,
        editPhotoPost: editPhotoPost,
        addPhotoPost: addPhotoPost,
        displayPhotoPosts: displayPhotoPosts,
        hashTagsSelect: hashTagsSelect,
        controlUser: controlUser
    }

}());
console.log(module.controlUser());
console.log(module.displayPhotoPosts());
console.log(module.removePhotoPost("3"));
console.log(module.addPhotoPost({
    id: '21',
    description: 'description21',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author21',
    photoLink: 'site/photo5.jpg',
    hashTags: ['#roses', '#flowers', '#plant'],
    likes: ['like2', 'like1', 'like3']
}));
console.log(module.editPhotoPost("1", {
    description: 'description12',
    author: 'Author12',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag10', '#hashTag20', '#hashTag30'],
    likes: ['like20', 'like10', 'like30']
}));
console.log(module.hashTagsSelect());
