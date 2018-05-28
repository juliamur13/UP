'use strict';

var moduleScript = (function () {

    function loadPhotoPosts() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/getAllPhotoPosts');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    JSON.parse(xhr.responseText);
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send();
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function addImage(formData){
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/addImage');
        xhr.send(formData);
    }

    function loadUsers() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/getAllUsers');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    JSON.parse(xhr.responseText);
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send();
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function editPhotoPost(photoPost) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', `/editPhotoPost?id=${photoPost.id}`);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send(JSON.stringify(photoPost));
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function getPhotoPosts(photoPosts) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `/getPhotoPosts`);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send(JSON.stringify(photoPosts));
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }


    function removePhotoPost(id) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            console.log(id);
            xhr.open('DELETE', `/removePhotoPost?id=${id}`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    JSON.parse(xhr.responseText);
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send();
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function addPhotoPost(photoPost) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/addPhotoPost');
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    JSON.parse(xhr.responseText);
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };

            xhr.send(JSON.stringify(photoPost));
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }


    function searchMaxId(photoPosts) {

        var max = 0;
        var id;
        photoPosts.forEach(function (item, i, photoPosts) {
            id = photoPosts[i].id;
            if (max < parseInt(id)) {
                max = id;
            }
        });
        return max;
    }

    function searchHashTags(string) { //поиск хешетгов в строке, обрабатываем запятую, # и пробелы
        var newHashTag = '';
        var arrNewHashTags = [];
        var countHashTags = 0;
        var countHashSymbols = 0;
        var flag = false;
        for (var index = 0; index < string.length; index++) {
            if (string[index] === '#') {
                flag = true;
                countHashTags++;
                countHashSymbols++;
            }
            if (flag) {
                var check = string[index] === '#' && countHashSymbols > 1;
                if (check) {
                    countHashTags--;
                }
                if (!check && !(string[index] === ',') && !(string[index] === ' ')) {
                    newHashTag = newHashTag + string[index];
                }
                if (string[index] === ' ' || index === string.length - 1 || string[index] === ',' || check) {

                    arrNewHashTags[countHashTags - 1] = newHashTag;
                    newHashTag = '';

                    flag = false;
                    countHashSymbols++;
                    if (string[index] === '#' && countHashSymbols > 0) {
                        index--;
                    }
                    countHashSymbols = 0;
                }

            }
        }
        return arrNewHashTags;
    }

    function compareDate(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
    }

    function sortPostsByDate(posts) {
        posts.sort(compareDate);
        return posts;
    }

    function addComment(photoPosts, id, comment) {
        var index = getIndex((id + 1).toString(), photoPosts);
        if (index != -1) {
            for (var item = 0; item < comment.length; item++) {
                photoPosts[index].comments.push(comment[item]);
            }
        }
        return photoPosts;
    }

    function getIndex(id, photoPosts) {
        for (var index = 0; index < photoPosts.length; index++) {
            if (photoPosts[index].id === id) {
                return index;
            }
        }
    }


    return {
        loadUsers: loadUsers,
        searchMaxId: searchMaxId,
        removePhotoPost: removePhotoPost,
        sortPostsByDate: sortPostsByDate,
        addComment: addComment,
        searchHashTags: searchHashTags,
        getIndex: getIndex,
        loadPhotoPosts: loadPhotoPosts,
        editPhotoPost: editPhotoPost,
        addPhotoPost: addPhotoPost,
        getPhotoPosts: getPhotoPosts,
        addImage: addImage
    }

}());
// console.log(moduleScript.getPhotoPosts({
//     createdAt: '25.04.2018',
//     author: 'Author1',
//     hashTag: '#roses'
// }, [{
//
//     id: '1',
//     description: 'description1',
//     createdAt: new Date(2018, 3, 25),
//     author: 'Author1',
//     photoLink: 'site/photo2.jpg',
//     hashTags: ['#roses', '#flowers', '#plant'],
//     likes: ['like2', 'like1', 'like3'],
//     comments: [{
//         author: 'CommentsAuthor1',
//         authorPhoto: 'site/user.png',
//         comment: 'Комментарий'
//     }]
// }]));
// console.log(moduleScript.validatePhotoPost(getPhotoPost("2")));
// console.log(moduleScript.validatePhotoPost(getPhotoPost("3")));
// console.log(moduleScript.getPhotoPosts(10, 5));
// console.log(moduleScript.getPhotoPosts(0, 1, {
//     author: "A16"
// }));
// console.log(moduleScript.getPhotoPosts(0, 1, {
//     hashTag: "h7"
// }));
// console.log(moduleScript.getPhotoPosts(0, 10, {
//     hashTag: "h3",
//     author: "A4"
// }));
// console.log(moduleScript.addPhotoPost(moduleScript.getPhotoPost("5")));
// console.log(moduleScript.addPhotoPost({
//     id: '21',
//     description: 'd21',
//     createdAt: new Date('2018-02-23T21:00:00'),
//     author: 'A21',
//     photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
//     hashTag: ['h8', 'h13'],
//     like: ['l2']
// }));
// console.log(moduleScript.removePhotoPost('18'));
// console.log(moduleScript.editPhotoPost('1', moduleScript.getPhotoPost('2')));
// console.log(moduleScript.editPhotoPost('1', {
//     hashTag: ['h25', 'h4']
// }));
// console.log(moduleScript.getPhotoPost('1'));
