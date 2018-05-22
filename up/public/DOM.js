'use strict';
var moduleDOM = (function () {

    function controlUserPost(photoPost, user) {
        var like = document.querySelector('.link_edit_like');
        var remove = document.querySelector('.link_edit_delete');
        var input = document.querySelector('.text');
        var edit = document.querySelector('.link_edit');
        if (photoPost.author !== user && !like.classList.contains('hide')) {
            remove.classList.add('hide');
            edit.classList.add('hide');
        }
        if (!user && !like.classList.contains('hide')) {
            input.classList.add('hide');
            like.classList.add('hide');
        }
        if (user && like.classList.contains('hide')) {
            like.classList.remove('.hide');
            input.classList.remove('hide');
            if (user === photoPost.author) {
                edit.classList.remove('.hide');
                remove.classList.remove('.hide')
            }
        }
        if (user) {
            var index = photoPost.likes.findIndex((element) => element === user);
            if (index !== -1) {
                var post = document.querySelector('.button_edit_like');
                post.src = 'site/like5.png';
            }
        }
    }

    function removeHtmlPost(id) {
        var container = document.querySelector('.all_posts');
        var deleteElem = container.querySelector('.post[data-post-id="' + id + '"]');
        container.removeChild(deleteElem);
    }

    function controlUser(user) {
        if (!user) {
            document.querySelector('.button_add_post').classList.add('hide');
            document.querySelector('.user').classList.add('hide');
            document.querySelector('.button_exit').textContent = 'Вход';
        }
        if (user) {
            document.querySelector('.user').classList.remove('hide');
            document.querySelector('.user_name_text').textContent = user;
            document.querySelector('.user_text').textContent = '';
            document.querySelector('.button_exit').textContent = 'Выход';
        }
    }

    // function controlPhotoPosts(photoPosts, user) {
    //     for (var index = 0; index < photoPosts.length; index++) {
    //         controlPost(photoPosts[index], user);
    //     }
    // }

    // function controlSelector(photoPosts) {
    //     for (var indexPosts = 0; indexPosts < photoPosts.length; indexPosts++) {
    //         for (var indexComments = 0; indexComments < photoPosts[indexPosts].comments.length; indexComments++) {
    //             addHashTagsSelect(moduleEvents.searchHashTags(photoPosts[indexPosts].comments[indexComments].comment));
    //         }
    //     }
    // }

    function hideLoadMoreBtn() {
        document.querySelector('.button_add_more').classList.add('hide');
    }

    function showNoPostsMsg() {
        var parentElement = document.querySelector('.photo_line');
        var newElem = document.createElement('p');
        newElem.className = 'message-no-posts';
        newElem.innerHTML = 'Нет результатов';
        parentElement.appendChild(newElem);
        document.querySelector('.footer_logo').textContent = '';
    }

    function showPhotoPosts(photoPosts, user, countElementsAdd) {
        controlUser(user);
        var COUNT_ELEMENTS = 10;
        var countPostsDisplay;
        var countPostsHtml = document.getElementsByClassName('post').length;
        var countPostsHtmlCopy = countPostsHtml;
        photoPosts = moduleScript.sortPostsByDate(photoPosts);
        while (countPostsHtmlCopy) {
            removeHtmlPost(document.getElementsByClassName('post')[0].getAttribute('data-post-id'));
            countPostsHtmlCopy--;
        }
        if (photoPosts.length !== 0) {
            if (countElementsAdd === 0 && countPostsHtml === 0) {
                countPostsDisplay = COUNT_ELEMENTS;
            } else {
                if (photoPosts.length < countElementsAdd + countPostsHtml) {
                    countPostsDisplay = photoPosts.length;
                } else {
                    countPostsDisplay = countElementsAdd + countPostsHtml;
                }
            }
            if (photoPosts.length - countPostsDisplay === 0) {
                hideLoadMoreBtn();
            }
            for (var index = photoPosts.length - countPostsDisplay; index < photoPosts.length; index++) {
                addPhotoPost(photoPosts[index], user);
            }
        }
        else {
            if (!document.querySelector('.message-no-posts')) {
                showNoPostsMsg();
                hideLoadMoreBtn();
            }
        }
    }

    function addOptionToSelect(elementArr, select) {
        var option = document.createElement('option');
        option.innerHTML = elementArr;
        select.appendChild(option)
    }


    function addHashTagsSelect(arrHashTags) {
        var arr = [];
        var viewHashTags = [];
        var options = document.getElementsByTagName('option');
        for (var index = 0; index < options.length; index++) {
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

    function showErrorAuthorization() {
        var parentElement = document.querySelector('.inputs');
        var newElem = document.createElement('p');
        newElem.className = 'error-sign-up';
        newElem.innerHTML = 'Вы ввели неправильный логин или пароль';
        parentElement.appendChild(newElem);
    }

    function showPageCreateNewPost(photoPost) {
        showPageEdit(photoPost);
        var buttonCreatePost = document.querySelector('.button-edit-page');
        buttonCreatePost.value = '  Добавить  ';
        buttonCreatePost.classList.add('create');
    }

    function showPageEdit(photoPost) {
        document.querySelector('.pictures_space').classList.add('hide');
        document.querySelector('.photo_line').classList.add('hide');
        document.querySelector('.load_more').classList.add('hide');
        document.querySelector('.header-line').classList.add('sign-up');
        document.querySelector('.logo').classList.add('sign-up');
        document.querySelector('main').classList.add('edit');
        var newElement = document.createElement('div');
        newElement.className = 'post page-edit';
        newElement.setAttribute('data-post-id', photoPost.id);
        newElement.innerHTML = `
        <div class='user-column-edit'>
                <div class='parent-user-edit'>
                    <img class="user-photo-edit" src="site/avatar3.png"/>
                    <p class="user-name-text-edit">${photoPost.author}</p>
                    <p class="user-text-edit" contenteditable="true">Информация об авторизованном пользователе</p>
                </div>
        </div>
        <div class='post-column'>
            <div class="user_panel page-edit">
                 <div>
                    <p class="user_name_text_post" > 
                    <img class="user_name_photo_post" src="site/user.png" />${photoPost.author}</p>
                 </div>
            </div>
            <div class="photopost">
                <div class="user_photopost">
                    <a><img class="photo" src='site/photo24.jpg' /></a>
                    <p class="date_post">${new Date(Date.now()).toLocaleDateString()}</p>
                    <div class="description">
                        <p class="description-text-edit" contenteditable="true">${photoPost.description} </p>
                        <p class="hashTag-text-edit" contenteditable="true">${photoPost.hashTags}</p>
                        <p class="likes_text">${photoPost.likes}</p>                  
                    </div>
                </div>
                <form class="block-edit">
                        <input type="button" class="button-edit-page" value=" Редактировать "/>
                </form>
            </div>
            <div class='space-column'>
            </div>
        </div>
        `;
        document.querySelector('main').appendChild(newElement);
    }

    function removePageEdit() {
        document.querySelector('.pictures_space').classList.remove('hide');
        document.querySelector('.photo_line').classList.remove('hide');
        document.querySelector('.load_more').classList.remove('hide');
        document.querySelector('.header-line').classList.remove('sign-up');
        document.querySelector('.logo').classList.remove('sign-up');
        document.querySelector('main').classList.remove('edit');
        document.querySelector('main').removeChild(document.querySelector('.post.page-edit'));
    }

    function removePageSignUp() {
        document.querySelector('.header-line').classList.remove('sign-up');
        document.querySelector('.logo').classList.remove('sign-up');
        document.querySelector('header').classList.remove('sign-up');
        document.querySelector('main').classList.remove('sign-up');
        document.querySelector('body').classList.remove('sign-up');
        document.querySelector('.footer_line').classList.remove('sign-up');
        document.querySelector('.button_add_post').classList.remove('hide');
        document.querySelector('.button_exit').textContent = 'Выход';
        document.querySelector('.footer_logo').textContent = 'D & W';
        document.querySelector('.pictures_space').classList.remove('hide');
        document.querySelector('.photo_line').classList.remove('hide');
        document.querySelector('.load_more').classList.remove('hide');
        document.querySelector('main').removeChild(document.querySelector('.log-in'));
    }

    function showPageSignUp() {
        document.querySelector('.header-line').classList.add('sign-up');
        document.querySelector('.logo').classList.add('sign-up');
        document.querySelector('header').classList.add('sign-up');
        document.querySelector('main').classList.add('sign-up');
        document.querySelector('body').classList.add('sign-up');
        document.querySelector('.footer_line').classList.add('sign-up');
        document.querySelector('.button_add_post').classList.add('hide');
        document.querySelector('.button_exit').textContent = 'Авторизация';
        document.querySelector('.footer_logo').textContent = '';
        document.querySelector('.pictures_space').classList.add('hide');
        document.querySelector('.photo_line').classList.add('hide');
        document.querySelector('.load_more').classList.add('hide');
        var newElem = document.createElement('div');
        newElem.className = 'log-in';
        newElem.innerHTML = `
        <div class='block-inputs-sign-up'>
            <div class='inputs'>
                <p class='text-sign-up'>Введите логин</p>
                <input name='username' id='username' >
                <p class='text-sign-up'>Введите пароль</p>
                <input name='password' id='password'>
                <div class='block-sign-up'>
                    <input type="button" class='button-sign-up' value="     Вход    "/>
                </div>
            </div>
        </div>
        <div class='block-image-sign-up'>
           <img class='image-sign-up' src='site/signUp.jpg' />
        </div>
        `;
        document.querySelector('main').appendChild(newElem);
    }

    function addPhotoPost(photoPost, user) {
        var posts = document.querySelector('.all_posts');
        var firstElem = document.getElementsByClassName('post')[0];
        var newElem = document.createElement('div');
        newElem.className = 'post';
        newElem.setAttribute('data-post-id', photoPost.id);
        let commentsArr = (photoPost.comments || []).map(comment => `
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
                <img class="photo" src=${photoPost.photoLink} /><p class="date_post">${new Date(photoPost.createdAt).toLocaleDateString()}</p>
                <div class="description">
                    <p class="description-text">${photoPost.description}</p>
                    <p class="hashTag-text">${photoPost.hashTags}</p>
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
        controlUserPost(photoPost, user);
    }

    return {
        addPhotoPost: addPhotoPost,
        showPhotoPosts: showPhotoPosts,
        addHashTagsSelect: addHashTagsSelect,
        controlUser: controlUser,
        removeHtmlPost: removeHtmlPost,
        showPageSignUp: showPageSignUp,
        showErrorAuthorization: showErrorAuthorization,
        removePageSignUp: removePageSignUp,
        showPageEdit: showPageEdit,
        removePageEdit: removePageEdit,
        showPageCreateNewPost: showPageCreateNewPost
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
