'use strict';
var photoPosts = [{
    id: '1',
    description: 'description1',
    createdAt: new Date(2018, 3, 25),
    author: 'Author20',
    photoLink: 'site/photo2.jpg',
    hashTags: ['#roses', '#flowers', '#plant'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '2',
    description: 'description2',
    createdAt: new Date(2018, 3, 24),
    author: 'Author2',
    photoLink: 'site/photo3.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '3',
    description: 'description3',
    createdAt: new Date(2018, 3, 23),
    author: 'Author3',
    photoLink: 'site/photo4.jpg',
    hashTags: ['#hashTag2', '#hashTag1', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '4',
    description: 'description4',
    createdAt: new Date(2018, 3, 22),
    author: 'Author4',
    photoLink: 'site/photo5.jpg',
    hashTags: ['#hashTag10', '#hashTag20', '#hashTag30'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '5',
    description: 'description5',
    createdAt: new Date(2018, 3, 21),
    author: 'Author5',
    photoLink: 'site/photo3.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '6',
    description: 'description6',
    createdAt: new Date(2018, 3, 20),
    author: 'Author6',
    photoLink: 'site/photo6.jpg',
    hashTags: ['#hashTag2', '#hashTag1', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '7',
    description: 'description7',
    createdAt: new Date(2018, 3, 19),
    author: 'Author7',
    photoLink: 'site/photo7.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '8',
    description: 'description8',
    createdAt: new Date(2018, 3, 18),
    author: 'Author8',
    photoLink: 'site/photo8.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '9',
    description: 'description9',
    createdAt: new Date(2018, 3, 17),
    author: 'Author9',
    photoLink: 'site/photo10.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '10',
    description: 'description10',
    createdAt: new Date(2018, 3, 16),
    author: 'Author10',
    photoLink: 'site/photo11.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '11',
    description: 'description11',
    createdAt: new Date(2018, 3, 15),
    author: 'Author11',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '12',
    description: 'description12',
    createdAt: new Date(2018, 3, 14),
    author: 'Author12',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '13',
    description: 'description13',
    createdAt: new Date(2018, 3, 13),
    author: 'Author13',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '14',
    description: 'description14',
    createdAt: new Date(2018, 3, 12),
    author: 'Author14',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '15',
    description: 'description15',
    createdAt: new Date(2018, 3, 11),
    author: 'Author15',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '16',
    description: 'description16',
    createdAt: new Date(2018, 3, 10),
    author: 'Author16',
    photoLink: 'site/photo.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '17',
    description: 'description17',
    createdAt: new Date(2018, 3, 9),
    author: 'Author17',
    photoLink: 'site/photo10.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '18',
    description: 'description18',
    createdAt: new Date(2018, 3, 8),
    author: 'Author18',
    photoLink: 'site/photo7.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '19',
    description: 'description19',
    createdAt: new Date(2018, 3, 7),
    author: 'Author19',
    photoLink: 'site/photo6.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}, {
    id: '20',
    description: 'description20',
    createdAt: new Date(2018, 3, 6),
    author: 'Author20',
    photoLink: 'site/photo5.jpg',
    hashTags: ['#hashTag1', '#hashTag2', '#hashTag3'],
    likes: ['like2', 'like1', 'like3'],
    comments: [{
        author: 'CommentsAuthor1',
        authorPhoto: 'site/user.png',
        comment: 'Комментарий'
    }]
}];

var moduleEvents = (function () {

        function addPhotoPosts() {
            var users = [{
                username: 'Author20',
                password: '1111',
                logIn: true,
                photo: 'site/avatar3.png',
                information: 'Информация об авторизованном пользователе'
            }];
            localStorage.setItem('users', JSON.stringify(users));
            var user = null;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('posts', JSON.stringify(photoPosts));
            var posts = [];
            for (var item = 0; item < JSON.parse(localStorage.getItem('posts')).length; item++) {
                if (JSON.parse(localStorage.getItem('posts'))[item]) {
                    posts.push(JSON.parse(localStorage.getItem('posts'))[item]);
                }
            }
            moduleDOM.showPhotoPosts(posts, user, 0);
        }

        function like(post, target) {
            var user = JSON.parse(localStorage.getItem('user'));
            var index = post.likes.findIndex((element) => element === user);
            if (index === -1) {
                post.likes.push(user);
                target.src = 'site/like5.png';
            } else {
                post.likes.splice(index, 1);
                target.src = 'site/like4.png';
            }
            return post.likes;
        }

        function buttonEditPhoto() {
            document.querySelector('main').addEventListener('click', (event) => {
                var target = event.target;
                if (target.className === 'photo') {
                    target.src = 'site/photo19.jpg';
                }
            });
        }

        function buttonEditDescription() {
            document.querySelector('main').addEventListener('click', (event) => {
                var user = JSON.parse(localStorage.getItem('user'));
                var target = event.target;
                if (target.className === 'button-edit-page') {
                    var photoPosts = JSON.parse(localStorage.getItem('posts'));
                    var description = document.querySelector('.description-text-edit').innerHTML;
                    var hashTags = document.querySelector('.hashTag-text-edit').innerHTML;
                    // var userInfo = document.querySelector('.user-text-edit').innerHTML;
                    var id = target.closest('.post.page-edit').getAttribute('data-post-id');
                    var arrHashTags = moduleScript.searchHashTags(hashTags);
                    moduleDOM.addHashTagsSelect(arrHashTags);
                    var indexPost = moduleScript.getIndex(id.toString(), photoPosts);
                    var checkIndex = 0;
                    photoPosts[indexPost].description = description;
                    photoPosts[indexPost].photoLink = 'site/photo19.jpg';
                    photoPosts[indexPost].createdAt = Date.now();
                    photoPosts[indexPost].hashTags = [];
                    for (var index = 0; index < arrHashTags.length; index++) {
                        checkIndex = photoPosts[indexPost].hashTags.findIndex((element) => element === arrHashTags[index]);
                        if (checkIndex === -1) {
                            photoPosts[indexPost].hashTags.push(arrHashTags[index]);
                        }
                    }
                    localStorage.setItem('posts', JSON.stringify(photoPosts));
                    moduleDOM.removePageEdit();
                    moduleDOM.showPhotoPosts(photoPosts, user, 0);
                }
            });
        }

        function buttonCreateNewPost() {
            document.querySelector('header').addEventListener('click', (event) => {
                var target = event.target;
                if (target.className === 'button_add_post' && !document.querySelector('main').contains(document.querySelector('.post.page-edit'))) {
                    var photoPosts = JSON.parse(localStorage.getItem('posts'));
                    var id = (parseInt(moduleScript.searchMaxId(photoPosts)) + 1).toString();
                    var user = JSON.parse(localStorage.getItem('user'));
                    var photoPost = {
                        id: id,
                        description: 'Добавить подпись...',
                        createdAt: Date.now(),
                        author: user.toString(),
                        photoLink: 'site/photo24.jpg',
                        hashTags: ['Добавить хештеги...'],
                        likes: [],
                        comments: []
                    };
                    moduleDOM.showPageCreateNewPost(photoPost);
                }
            });
        }

        function buttonAddNewPostPageEdit() {
            document.querySelector('main').addEventListener('click', (event) => {
                var target = event.target;
                if (target.className === 'button-edit-page create') {
                    var photoPosts = JSON.parse(localStorage.getItem('posts'));
                    var description = document.querySelector('.description-text-edit').innerHTML;
                    var hashTags = document.querySelector('.hashTag-text-edit').innerHTML;
                    var photoLink = 'site/photo7.jpg';
                    var id = target.closest('.post.page-edit').getAttribute('data-post-id');
                    var user = JSON.parse(localStorage.getItem('user'));
                    var arrHashTags = moduleScript.searchHashTags(hashTags);
                    moduleDOM.addHashTagsSelect(arrHashTags);
                    var photoPost = {
                        id: id,
                        description: description,
                        createdAt: Date.now(),
                        author: user,
                        photoLink: photoLink,
                        hashTags: arrHashTags,
                        likes: [],
                        comments: []
                    };
                    photoPosts.push(photoPost);
                    localStorage.setItem('posts', JSON.stringify(photoPosts));
                    moduleDOM.removePageEdit();
                    moduleDOM.showPhotoPosts(photoPosts, user, 0);
                }
            });
        }

        function getUser(name) {
            var users = JSON.parse(localStorage.getItem('users'));
            return (users.find((user) => {
                return user.username === name;
            }));
        }

        function getPassword(name) {
            var users = JSON.parse(localStorage.getItem('users'));
            var index = users.findIndex((element) => element.username === name);
            if (index != -1) {
                return users[index].password;
            }
        }

        function buttonPageWithPosts() {
            document.querySelector('.logo').addEventListener('click', (event) => {
                var target = event.target;
                var user = JSON.parse(localStorage.getItem('user'));
                var COUNT_CLASSES = 2;
                if (target.classList.length === COUNT_CLASSES) {
                    moduleDOM.removePageSignUp();
                    moduleDOM.showPhotoPosts(photoPosts, user, 0);
                }
            });
        }

        function authorization() {
            var buttonExit = document.querySelector('.button_exit');
            buttonExit.addEventListener('click', (event) => {
                if (!document.querySelector('main').contains(document.querySelector('.post.page-edit'))) {
                    var user = JSON.parse(localStorage.getItem('user'));
                    if (buttonExit.textContent === 'Вход') {
                        moduleDOM.showPageSignUp();
                    }
                    if (buttonExit.textContent === 'Авторизация') {
                        document.querySelector('.button-sign-up').addEventListener('click', (event) => {
                            var username = document.getElementById('username').value;
                            var password = document.getElementById('password').value;
                            var photoPosts = JSON.parse(localStorage.getItem('posts'));
                            if (getUser(username) && getPassword(username) === password) {
                                moduleDOM.controlUser(username);
                                localStorage.setItem('user', JSON.stringify(username));
                                moduleDOM.removePageSignUp();
                                moduleDOM.showPhotoPosts(photoPosts, username, 0);
                            }
                            else {
                                moduleDOM.showErrorAuthorization();
                            }
                            event.preventDefault();
                        });
                        event.preventDefault();
                    }
                    if (buttonExit.textContent === 'Выход') {
                        moduleDOM.showPageSignUp();
                        user = null;
                        localStorage.setItem('user', user);
                    }
                }
            });
        }

        function buttonsPost() {
            document.querySelector('.all_posts').addEventListener('click', (event) => {
                    var photoPosts = JSON.parse(localStorage.getItem('posts'));
                    var target = event.target;
                    var id = target.closest('.post').getAttribute('data-post-id');
                    var indexPost = moduleScript.getIndex(id.toString(), photoPosts);
                    if (target.className === 'button_edit_like' && photoPosts[indexPost]) {
                        photoPosts[indexPost].likes = like(photoPosts[indexPost], target);
                    }
                    if (target.className === 'button_edit_delete' && photoPosts[indexPost]) {
                        moduleDOM.removeHtmlPost(id);
                        photoPosts = moduleScript.removePhotoPost(photoPosts, id);
                    }
                    if (target.className === 'button_edit' && photoPosts[indexPost]) {
                        moduleDOM.showPageEdit(photoPosts[indexPost]);
                    }
                    localStorage.setItem('posts', JSON.stringify(photoPosts));
                }
            );
        }

        function buttonLoadMorePosts() {
            document.querySelector('.load_more').addEventListener('click', function (event) {
                var target = event.target;
                var user = JSON.parse(localStorage.getItem('user'));
                var posts = JSON.parse(localStorage.getItem('posts'));
                if (target.className === 'add_more') {
                    moduleDOM.showPhotoPosts(posts, user, 10);
                }
            });
        }

        function addComment() {
            document.querySelector('.all_posts').addEventListener('keypress', function (event) {
                var target = event.target;
                var user = JSON.parse(localStorage.getItem('user'));
                var photoPosts = JSON.parse(localStorage.getItem('posts'));
                if (event.which === 13) {
                    var postID = target.closest('.post').getAttribute('data-post-id');
                    photoPosts = moduleScript.addComment(photoPosts, postID - 1, [{
                        author: user,
                        authorPhoto: 'site/avatar3.png',
                        comment: target.value
                    }]);

                    localStorage.setItem('posts', JSON.stringify(photoPosts));
                    moduleDOM.showPhotoPosts(photoPosts, user, 0);
                    event.preventDefault();
                }
            });
        }

        function filter() {
            document.getElementById('button_search').addEventListener('click', () => {
                    var username = document.search.username.value;
                    var photoPosts = JSON.parse(localStorage.getItem('posts'));
                    var date = document.search.date.value;
                    var hashTag = document.search.hashTags.value;
                    photoPosts = moduleScript.getPhotoPosts({
                        author: username,
                        createdAt: date,
                        hashTag: hashTag
                    }, photoPosts);
                    var user = JSON.parse(localStorage.getItem('user'));
                    localStorage.setItem('posts', JSON.stringify(photoPosts));
                    moduleDOM.showPhotoPosts(photoPosts, user, 0);
                    event.preventDefault();
                }
            );
        }

        return {
            filter: filter,
            addPhotoPosts: addPhotoPosts,
            buttonsPost: buttonsPost,
            authorization: authorization,
            addComment: addComment,
            buttonLoadMorePosts: buttonLoadMorePosts,
            buttonPageWithPosts: buttonPageWithPosts,
            buttonEditDescription: buttonEditDescription,
            buttonEditPhoto: buttonEditPhoto,
            buttonCreateNewPost: buttonCreateNewPost,
            buttonAddNewPostPageEdit: buttonAddNewPostPageEdit
        }
    }
)();
console.log(moduleEvents.addPhotoPosts());
console.log(moduleEvents.filter());
console.log(moduleEvents.buttonsPost());
console.log(moduleEvents.authorization());
console.log(moduleEvents.addComment());
console.log(moduleEvents.buttonLoadMorePosts());
console.log(moduleEvents.buttonPageWithPosts());
console.log(moduleEvents.buttonEditDescription());
console.log(moduleEvents.buttonEditPhoto());
console.log(moduleEvents.buttonCreateNewPost());
console.log(moduleEvents.buttonAddNewPostPageEdit());