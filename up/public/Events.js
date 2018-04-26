'use strict';
var photoPosts = [{
    id: '1',
    description: 'description1',
    createdAt: new Date(2018,3,25),
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
    createdAt: new Date(2018,3,24),
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
    createdAt: new Date(2018,3,23),
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
    createdAt: new Date(2018,3,22),
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
    createdAt: new Date(2018,3,21),
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
    createdAt: new Date(2018,3,20),
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
    createdAt: new Date(2018,3,19),
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
    createdAt: new Date(2018,3,18),
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
    createdAt: new Date(2018,3,17),
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
    createdAt: new Date(2018,3,16),
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
    createdAt: new Date(2018,3,15),
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
    createdAt: new Date(2018,3,14),
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
    createdAt: new Date(2018,3,13),
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
    createdAt: new Date(2018,3,12),
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
    createdAt: new Date(2018,3,11),
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
    createdAt: new Date(2018,3,10),
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
    createdAt: new Date(2018,3,9),
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
    createdAt: new Date(2018,3,8),
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
    createdAt: new Date(2018,3,7),
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
    createdAt: new Date(2018,3,6),
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
            //     username: 'Author20',
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
            moduleDOM.displayPhotoPosts(posts, user[0].username, 0);
        }

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

        function getIndex(id, photoPosts) {
            for (var index = 0; index < photoPosts.length; index++) {
                if (photoPosts[index].id === id) {
                    return index;
                }
            }
        }

        function buttonsPost() {
            var posts = JSON.parse(localStorage.getItem('posts'));
            document.querySelector('.all_posts').addEventListener('click', (event)=>{
                    var target = event.target;
                    var id = target.closest('.post').getAttribute('data-post-id');
                    var indexPost = getIndex(id.toString(), posts);
                    if (target.className === 'button_edit_like' && posts[indexPost]) {
                        posts[indexPost].likes = like(posts[indexPost], target);
                    }
                    if (target.className === 'button_edit_delete' && posts[indexPost]) {
                        posts = moduleDOM.removeHtmlPost(id);
                    }
                    // if (targetCopy.className === 'button_edit' && post) {
                    // }
                    localStorage.setItem('posts', JSON.stringify(posts));
                }
            );
        }

        function buttonLoadMorePosts() {
            var user = JSON.parse(localStorage.getItem('users'));
            var posts = JSON.parse(localStorage.getItem('posts'));
            document.querySelector('.add_more').addEventListener('click', function() {
                moduleDOM.displayPhotoPosts(posts, user[0].username, 10);
            });
        }

        function searchHashTags(string) {
            var newHashTag = '';
            var arrNewHashTags = [];
            var countHashTags = 0;
            var flag = false;
            for (var index = 0; index < string.length; index++) {
                if (string[index] === '#') {
                    flag = true;

                }
                if (flag) {
                    newHashTag = newHashTag + string[index];
                    if (string[index] === ' ' || index === string.length - 1) {
                        if (index === string.length - 1) {
                            newHashTag = newHashTag + ' ';
                        }
                        arrNewHashTags[countHashTags] = newHashTag;
                        newHashTag = '';
                        countHashTags++;
                        flag = false;
                    }
                }
            }
            return arrNewHashTags;
        }

        function addComment() {
            var user = JSON.parse(localStorage.getItem('users'));
            var photoPosts = JSON.parse(localStorage.getItem('posts'));
            document.querySelector('.all_posts').addEventListener('keypress', function(event) {
                var target = event.target;

                if (event.which === 13) {
                    var postID = target.closest('.post').getAttribute('data-post-id');
                    moduleDOM.addHashTagsSelect(moduleScript.getPhotoPost(postID, photoPosts), searchHashTags(target.value));
                    photoPosts = moduleDOM.addComment(photoPosts, postID - 1, [{
                        author: user[0].username,
                        authorPhoto: 'site/avatar3.png',
                        comment: target.value
                    }]);

                    localStorage.setItem('posts', JSON.stringify(photoPosts));
                    moduleDOM.displayPhotoPosts(photoPosts, user[0].username, 0);
                    event.preventDefault();
                }
            });
        }

        function filter() {
            document.getElementById('button_search').addEventListener('click', ()=>{
                    var username = document.search.username.value;
                    var photoPosts = JSON.parse(localStorage.getItem('posts'));
                    var date = document.search.date.value;
                    var hashTag = document.search.hashTags.value;
                    photoPosts = moduleScript.getPhotoPosts({
                        author: username,
                        createdAt: date,
                        hashTag: hashTag
                    }, photoPosts);
                    var user = JSON.parse(localStorage.getItem('users'));
                    localStorage.setItem('posts', JSON.stringify(photoPosts));
                    moduleDOM.displayPhotoPosts(photoPosts, user[0].username, 0);
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
            searchHashTags: searchHashTags
        }
    }
)();
console.log(moduleEvents.addPhotoPosts());
console.log(moduleEvents.filter());
console.log(moduleEvents.buttonsPost());
console.log(moduleEvents.authorization());
console.log(moduleEvents.addComment());
console.log(moduleEvents.buttonLoadMorePosts());
