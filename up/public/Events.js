'use strict';

var moduleEvents = (function () {
        let photoPosts;
        let newPhoto = 'site/photo7.jpg';

        async function load() {
            photoPosts = await moduleScript.loadPhotoPosts();
            await moduleScript.loadUsers();
            var users = [{
                username: 'Author1',
                password: '1111',
                logIn: true,
                photo: 'site/avatar3.png',
                information: 'Информация об авторизованном пользователе'
            }];
            localStorage.setItem('users', JSON.stringify(users));
            var user = null;
            localStorage.setItem('user', JSON.stringify(users));
            moduleDOM.showPhotoPosts(photoPosts, user, 0);
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
            document.querySelector('main').addEventListener('click', async (event) => {
                var user = JSON.parse(localStorage.getItem('user'));
                var target = event.target;
                if (target.className === 'button-edit-page') {
                    var description = document.querySelector('.description-text-edit').innerHTML;
                    var hashTags = document.querySelector('.hashTag-text-edit').innerHTML;
                    // var userInfo = document.querySelector('.user-text-edit').innerHTML;
                    var id = target.closest('.post.page-edit').getAttribute('data-post-id');
                    var arrHashTags = moduleScript.searchHashTags(hashTags);
                    moduleDOM.addHashTagsSelect(arrHashTags);
                    var indexPost = moduleScript.getIndex(id, photoPosts);
                    var checkIndex = 0;
                    photoPosts[indexPost].description = description;
                    photoPosts[indexPost].photoLink = newPhoto;
                    photoPosts[indexPost].createdAt = Date.now();
                    photoPosts[indexPost].hashTags = [];
                    for (var index = 0; index < arrHashTags.length; index++) {
                        checkIndex = photoPosts[indexPost].hashTags.findIndex((element) => element === arrHashTags[index]);
                        if (checkIndex === -1) {
                            photoPosts[indexPost].hashTags.push(arrHashTags[index]);
                        }
                    }
                    await moduleScript.editPhotoPost(photoPosts[indexPost]);
                    moduleDOM.removePageEdit();
                    moduleDOM.showPhotoPosts(photoPosts, user, 0);
                }
            });
        }

        function buttonCreateNewPost() {
            document.querySelector('header').addEventListener('click', (event) => {
                var target = event.target;
                if (target.className === 'button_add_post' && !document.querySelector('main').contains(document.querySelector('.post.page-edit'))) {
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
            document.querySelector('main').addEventListener('click', async (event) => {
                var target = event.target;
                if (target.className === 'button-edit-page create') {
                    var description = document.querySelector('.description-text-edit').innerHTML;
                    var hashTags = document.querySelector('.hashTag-text-edit').innerHTML;
                    var id = target.closest('.post.page-edit').getAttribute('data-post-id');
                    var user = JSON.parse(localStorage.getItem('user'));
                    var arrHashTags = moduleScript.searchHashTags(hashTags);
                    moduleDOM.addHashTagsSelect(arrHashTags);
                    var photoPost = {
                        id: id,
                        description: description,
                        createdAt: Date.now(),
                        author: user,
                        photoLink: newPhoto,
                        hashTags: arrHashTags,
                        likes: [],
                        comments: []
                    };
                    photoPosts.push(photoPost);
                    await moduleScript.addPhotoPost(photoPost);
                    moduleDOM.removePageEdit();
                    moduleDOM.showPhotoPosts(photoPosts, user, 0);
                }
            });
        }

        function buttonAddImage() {
            document.querySelector('main').addEventListener('change', (event) => {
                var target = event.target;
                if (target.className === 'file-input') {
                    var file = event.target.files[0];
                    let formData = new FormData();
                    formData.append('file', file);

                    let image = document.createElement('img');
                    image.src = window.URL.createObjectURL(formData.get('file'));
                    newPhoto = image.src;
                    document.getElementsByClassName('new-edit')[0].src = newPhoto;
                    moduleScript.addImage(formData);

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
                }
                moduleDOM.showPhotoPosts(photoPosts, user, 0);
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

        function removeElementArray(posts, id) {
            var index = photoPosts.findIndex((element) => element.id === id);
            if (index != -1) {
                posts.splice(id - 1, 1);
            }
            return posts;
        }

        function buttonsPost() {
            document.querySelector('.all_posts').addEventListener('click', async (event) => {
                    var target = event.target;
                    var user = JSON.parse(localStorage.getItem('user'));
                    var id = target.closest('.post').getAttribute('data-post-id');
                    var indexPost = moduleScript.getIndex(id, photoPosts);
                    if (target.className === 'button_edit_like' && photoPosts[indexPost]) {
                        photoPosts[indexPost].likes = like(photoPosts[indexPost], target);
                        await moduleScript.editPhotoPost(photoPosts[indexPost]);
                    }
                    if (target.className === 'button_edit_delete' && photoPosts[indexPost]) {
                        moduleDOM.removeHtmlPost(id);
                        photoPosts = removeElementArray(photoPosts, id);
                        // moduleDOM.showPhotoPosts(photoPosts, user, 0);
                        await moduleScript.removePhotoPost(id);
                    }
                    if (target.className === 'button_edit' && photoPosts[indexPost]) {
                        moduleDOM.showPageEdit(photoPosts[indexPost]);
                    }
                }
            );
        }

        function buttonLoadMorePosts() {
            document.querySelector('.load_more').addEventListener('click', function (event) {
                var target = event.target;
                var user = JSON.parse(localStorage.getItem('user'));
                if (target.className === 'add_more') {
                    moduleDOM.showPhotoPosts(photoPosts, user, 10);
                }
            });
        }

        function addComment() {
            document.querySelector('.all_posts').addEventListener('keypress', async (event) => {
                var target = event.target;
                var user = JSON.parse(localStorage.getItem('user'));
                if (event.which === 13) {
                    var postID = target.closest('.post').getAttribute('data-post-id');
                    photoPosts = moduleScript.addComment(photoPosts, postID - 1, [{
                        author: user,
                        authorPhoto: 'site/avatar3.png',
                        comment: target.value
                    }]);
                    moduleDOM.showPhotoPosts(photoPosts, user, 0);
                    var indexPost = moduleScript.getIndex(postID, photoPosts);
                    await moduleScript.editPhotoPost(photoPosts[indexPost]);
                    event.preventDefault();
                }
            });
        }

        function filter() {
            document.getElementById('button_search').addEventListener('click', async () => {
                    var filterPosts;
                    var username = document.search.username.value;
                    var date = document.search.date.value;
                    var hashTag = document.search.hashTags.value;
                    filterPosts = await moduleScript.getPhotoPosts({
                        author: username,
                        createdAt: date,
                        hashTag: hashTag
                    });
                    var user = JSON.parse(localStorage.getItem('user'));
                    moduleDOM.showPhotoPosts(filterPosts, user, 0);
                    event.preventDefault();
                }
            );
        }

        return {
            load: load,
            filter: filter,
            buttonsPost: buttonsPost,
            authorization: authorization,
            addComment: addComment,
            buttonLoadMorePosts: buttonLoadMorePosts,
            buttonPageWithPosts: buttonPageWithPosts,
            buttonEditDescription: buttonEditDescription,
            buttonEditPhoto: buttonEditPhoto,
            buttonCreateNewPost: buttonCreateNewPost,
            buttonAddNewPostPageEdit: buttonAddNewPostPageEdit,
            buttonAddImage: buttonAddImage
        }
    }
)();
console.log(moduleEvents.load());
console.log(moduleEvents.buttonAddImage());
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