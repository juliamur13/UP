(function() {
    var user = null;
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
    },{
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
    function getPhotoPost(id) {
        for (var index = 0; index < photoPosts.length; index++) {
            if (photoPosts[index].id === id) {
                return photoPosts[index];
            }
        }
    }
    function editPhotoPost(id, photoPost){
        for(var index = 0; index < photoPosts.length; index++) {
            if(photoPosts[index].id === id) {
                if (photoPost.description !== undefined && photoPost.description.length !== 0) {
                    var editDescription = document.getElementsByClassName("description_text")[photoPosts.length - index - 1];
                    editDescription.innerHTML = photoPost.description;
                    photoPosts[photoPosts.length - index - 1].description = photoPost.description;
                }
                if (photoPost.hashTags !== undefined && photoPost.hashTags.length !== 0) {
                    var editHashTags = document.getElementsByClassName("hashTag_text")[photoPosts.length - index - 1];
                    editHashTags.innerHTML = photoPost.hashTags;
                    photoPosts[photoPosts.length - index - 1].hashTags = photoPost.hashTags;
                }
                if (photoPost.likes !== undefined && photoPost.likes.length !== 0) {
                    var editLikes = document.getElementsByClassName("likes_text")[photoPosts.length - index - 1];
                    editLikes.innerHTML = photoPost.likes;
                    photoPosts[photoPosts.length - index - 1].likes = photoPost.likes;
                }
                if (photoPost.photoLink !== undefined && photoPost.photoLink.length !== 0) {
                    var editPhotoLink = document.getElementsByClassName("photo")[photoPosts.length - index - 1];
                    editPhotoLink.src = photoPost.photoLink;
                    photoPosts[photoPosts.length - index - 1].photoLink = photoPost.photoLink;
                }
            }
        }
    }

function displayPhotoposts() {

        var COUNT_ELEMENTS = 20;
    for(var index = 0; index < COUNT_ELEMENTS; index++){
        addPhotoPost(photoPosts[index]);
    }
    if(user === null){
        var userPanel = document.querySelector(".user");
        userPanel.parentNode.removeChild(userPanel);
        document.querySelector(".left_header").removeChild(document.querySelector(".button_add_post"));
        var buttonExit = document.querySelector(".button_exit");
        buttonExit.innerHTML = 'Авторизация';
    }
}
function addOptionToSelect(elementArr, select) {
        var option = document.createElement("option");
        option.innerHTML = elementArr;
        select.appendChild(option)
}
    function addComment(comment, listComments){
        var comment2 = comment.cloneNode(true);
        listComments.appendChild(comment2);
    }
    function removePhotoPost(id){
        for (var index = 0; index < photoPosts.length; index++) {
            if (photoPosts[index].id === id) {
                var posts = document.querySelector(".all_posts");
                var deleteElem = document.getElementsByClassName("post")[photoPosts.length - index - 1];
                posts.removeChild(deleteElem);
                photoPosts.splice(index, 1);
                console.log(photoPosts);
            }
        }
    }
    function hashTagsSelect(){
        var arrHashTag = [];
        for(var index = 0; index < photoPosts.length; index++){
            for(var item = 0; item < photoPosts[index].hashTags.length; item++){
                if(arrHashTag.indexOf(photoPosts[index].hashTags[item]) === -1){
                    arrHashTag.push(photoPosts[index].hashTags[item]);
                }
            }
        }
        var select = document.querySelector(".select_text");
        for(index = 0; index < arrHashTag.length; index++){
           addOptionToSelect(arrHashTag[index], select);
        }
    }
function addPhotoPost(photoPost) {
        var posts = document.querySelector('.all_posts');
        var newElem = document.createElement("div");

        newElem.className = "post";
        var comment = document.createElement("div");
        comment.className = "comments_text";
        comment.innerHTML = '<p class="user_name_comments">' +
            '<img class="user_comments_photo" src="site/user.png"/>Имя пользователя</p> ' +
            '<p class ="comment">Комментарий</p>';

        newElem.innerHTML = '<div class="user_panel">' +
            '\<div>' +
            '\<p class="user_name_text_post"> ' +
            '<img class="user_name_photo_post" src="site/user.png" />' + photoPost.author + '</p>' +
            '</div>' +
            '<div class="buttons">' +
            '\<a class="link_edit_delete" ><img class="button_edit" src="site/delete.png" /></a>' +
            '<a class="link_edit_like"  ><img class="button_edit_like" src="site/like4.png" /></a>' +
            '<a class="link_edit"  ><img class="button_edit" src="site/edit.png"/></a>' +
            '</div>' +
            '</div>' +
            '<div class="photopost">' +
            '\<div class="user_photopost">' +
            '<p class="date_post">' + photoPost.createdAt + '</p>' +
            '<div class="description">' +
            '\<p class="description_text">' + photoPost.description + '</p><p class="hashTag_text">' + photoPost.hashTags + '</p><p class="likes_text">' + photoPost.likes + '</p>' +
            '</div>' +

            '</div>' +
            '<div class="comments">' +
            '\<div class="comments_overflow"> ' +
            '\<div id="list_comments">' +
            '</div>' +
            '</div>' +
            '<input type="text" class="text" placeholder="Написать коментарий..." />' +
            '</div>' +
            '</div>';
        photo = document.createElement("img");
        photo.className = "photo";
        photo.src = photoPost.photoLink;
        var firstElem = document.getElementsByClassName("post")[0];
        posts.insertBefore(newElem, firstElem);
        var listComments = document.getElementById('list_comments');
        listComments.appendChild(comment);
        addComment(comment, listComments);
        addComment(comment, listComments);
        var firstElemPhoto = document.querySelector(".date_post");
        var userPhotopost = document.querySelector(".user_photopost");
        userPhotopost.insertBefore(photo, firstElemPhoto);
        if(photoPost.id > photoPosts.length) {
            photoPosts.push(photoPost);
        }
    if(user === null) {
        var buttons = document.querySelector(".buttons");
        buttons.removeChild(document.querySelector(".link_edit_delete"));
        buttons.removeChild(document.querySelector(".link_edit"));
        document.querySelector(".comments").removeChild(document.querySelector(".text"));
    }
}

    console.log(displayPhotoposts());
    console.log(removePhotoPost("3"));
    console.log(addPhotoPost({
        id: '21',
        description: 'description21',
        createdAt: new Date('2018-02-21T10:00:00'),
        author: 'Author21',
        photoLink: 'site/photo5.jpg',
        hashTags: ['#roses', '#flowers', '#plant'],
        likes: ['like2', 'like1', 'like3']
    }));
    console.log(editPhotoPost("1", {description: 'description12',
        author: 'Author12',
        photoLink: 'site/photo.jpg',
        hashTags: ['#hashTag10', '#hashTag20', '#hashTag30'],
        likes: ['like20', 'like10', 'like30']}));
    console.log(hashTagsSelect());
}())