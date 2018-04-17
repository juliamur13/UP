'use strict';
var photoPosts = [{
    id: '1',
    description: 'description1',
    createdAt: new Date('2018-02-21T10:00:00'),
    author: 'Author1',
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T09:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
    createdAt: new Date('2018-02-21T10:00:00'),
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
var moduleEvents = (function() {

        function addPhotoPosts() {
            // var user = [{
            //     username: 'Author1',
            //     password: '1111'
            // }];
            // localStorage.setItem('users', JSON.stringify(user));
            // localStorage.setItem('posts', JSON.stringify(photoPosts));
            var posts = [];
            var user = JSON.parse(localStorage.getItem('users'));
            for (var item = 0; item < JSON.parse(localStorage.getItem('posts')).length; item++) {
                if (JSON.parse(localStorage.getItem('posts'))[item]) {
                    posts.push(JSON.parse(localStorage.getItem('posts'))[item]);
                }
            }
            moduleDOM.displayPhotoPosts(posts, user[0].username);
        }

        function addPhotoPost(objectPhotoPost) {
            var photoPosts = JSON.parse(localStorage.getItem('posts'));
            photoPosts.push(objectPhotoPost);
            localStorage.setItem('posts', JSON.stringify(photoPosts));
        }

        function addOptionToSelect(elementArr, select) {
            var option = document.createElement('option');
            option.innerHTML = elementArr;
            select.appendChild(option);
        }
        // function commentCheck() {
        //     var posts = JSON.parse(localStorage.getItem('posts'));
        //     for (var index = 0; index < posts.length; index++) {
        //         posts = moduleDOM.addComment(posts, index, [{
        //             author: 'CommentsAuthor1',
        //             authorPhoto: 'site/user.png',
        //             comment: 'Комментарий'
        //         }, {
        //             author: 'CommentsAuthor2',
        //             authorPhoto: 'site/user.png',
        //             comment: 'Комментарий'
        //         }, {
        //             author: 'CommentsAuthor3',
        //             authorPhoto: 'site/user.png',
        //             comment: 'Комментарий'
        //         }, {
        //             author: 'CommentsAuthor2',
        //             authorPhoto: 'site/user.png',
        //             comment: 'Комментарий'
        //         }, {
        //             author: 'CommentsAuthor3',
        //             authorPhoto: 'site/user.png',
        //             comment: 'Комментарий'
        //         }, {
        //             author: 'CommentsAuthor2',
        //             authorPhoto: 'site/user.png',
        //             comment: 'Комментарий'
        //         }, {
        //             author: 'CommentsAuthor3',
        //             authorPhoto: 'site/user.png',
        //             comment: 'Комментарий'
        //         }]);
        //     }
        //     localStorage.setItem('posts', JSON.stringify(posts));
        // }
        function like(post, target) {
            var user = JSON.parse(localStorage.getItem('users'));
            var index = post.likes.findIndex((element)=>element === user[0].username);
            if (index === -1) {
                post.likes.push(user[0].username);
                target.src = 'site/like5.png';
            } else {
                post.likes.splice(index, 1);
                target.src = 'site/like4.png';
            }
            return post.likes;
        }
        function authorization() {
            var user = JSON.parse(localStorage.getItem('users'));
            var posts = JSON.parse(localStorage.getItem('posts'));
            document.querySelector('.right_header').addEventListener('click', (event)=>{
                    var target = event.target;
                    if (target.innerHTML === 'Выход') {
                        target.innerHTML = 'Вход';
                        user[0].username = '';
                    } else {
                        target.innerHTML = 'Выход';
                        user[0].username = 'Author20';

                    }
                    moduleDOM.controlUser(user[0].username);
                    localStorage.setItem('posts', JSON.stringify(posts));
                }
            );

        }
        function buttonsPost() {
            var posts = JSON.parse(localStorage.getItem('posts'));
            var button = document.getElementsByClassName('user_panel');
            for (var index = 0; index < button.length; index++) {
                button[index].addEventListener('click', (event)=>{
                        var target = event.target;
                        var targetCopy = target;
                        while (target !== posts) {
                            if (target.className === 'post') {
                                var post = posts[target.getAttribute('data-post-id') - 1];
                                if (targetCopy.className === 'button_edit_like' && post) {
                                    post.likes = like(post, targetCopy);
                                }
                                if (targetCopy.className === 'button_edit_delete' && post) {
                                    posts = moduleDOM.removePhotoPost(posts, target.getAttribute('data-post-id'));
                                }
                                // if (targetCopy.className === 'button_edit' && post) {
                                // }
                                localStorage.setItem('posts', JSON.stringify(posts));
                                return;
                            }
                            target = target.parentNode;
                        }
                    }
                );
            }
        }

        function buttonAddPosts() {
            var user = JSON.parse(localStorage.getItem('users'));
            var posts = JSON.parse(localStorage.getItem('posts'));
            document.querySelector('.add_more').addEventListener('click', function() {
                moduleDOM.displayPhotoPosts(posts, user[0].username);
            });
        }
        function addComment() {
            var user = JSON.parse(localStorage.getItem('users'));
            var posts = JSON.parse(localStorage.getItem('posts'));
            var iconInput = document.getElementsByClassName('text');
            for (var item = 0; item < iconInput.length; item++) {
                iconInput[item].addEventListener('keypress', function(event) {
                    var target = event.target;
                    var targetCopy = target;
                    console.log(event.keyCode);
                    if (event.which === 13) {
                        console.log(1);
                        while (target !== posts) {
                            if (target.className === 'post') {
                                var postID = target.getAttribute('data-post-id') - 1;
                                console.log(postID);
                                posts = moduleDOM.addComment(posts, postID, [{
                                    author: user[0].username,
                                    authorPhoto: 'site/avatar3.png',
                                    comment: targetCopy.value
                                }]);
                                event.preventDefault();
                                localStorage.setItem('posts', JSON.stringify(posts));
                                moduleDOM.displayPhotoPosts(posts, user.username);
                                return;
                            }
                            target = target.parentNode;

                        }

                    }
                });
            }

        }
        function filter() {
            document.getElementById('button_search').addEventListener('click', (event)=>{
                    var username = document.search.username.value;

                    var date = document.search.date.value;
                    var hashTag = document.search.hashTags.value;
                    var postsArray = moduleScript.getPhotoPosts({
                        author: username,
                        createdAt: date,
                        hashTag: hashTag
                    }, JSON.parse(localStorage.getItem('posts')));

                    localStorage.setItem('posts', JSON.stringify(postsArray));
                    moduleDOM.displayPhotoPosts(postsArray);
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
            buttonAddPosts: buttonAddPosts // commentCheck: commentCheck
        }
    }
)();
console.log(moduleEvents.addPhotoPosts());
console.log(moduleEvents.filter());
console.log(moduleEvents.buttonsPost());
console.log(moduleEvents.authorization());
console.log(moduleEvents.addComment());
console.log(moduleEvents.buttonAddPosts());
//console.log(moduleEvents.commentCheck());
//moduleEvents.events();
//console.log(module.getPhotoPosts(0, 10, {hashTag: '#coffe'}));
// console.log(module.removePhotoPost(21));
// console.log(module.editPhotoPost(5, {description: 'newText', photoLink: 'images/22.jpg'}));
// console.log(module.editPhotoPost(3, {hashTag: ['#otherHashtag1', '#otherHashtag2']}));
// console.log(module.addPhotoPost({
//     id: 0,
//     description: 'Text',
//     createdAt: '07.04.2018',
//     author: 'Adamskaya Yuliya',
//     photoLink: 'images/21.jpg',
//     hashTag: ['#flowers'],
//     like: ['']
// }));
