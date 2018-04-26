'use strict';
var moduleScript = (function() {

    function validatePhotoPost(photoPost) {
        /* if (!photoPost.hasOwnProperty('hashTags')){
            return false;
        }
        if (!photoPost.hasOwnProperty('likes')){
            return false;
        }*/
        if (typeof (photoPost.id) !== "string" || typeof (photoPost.author) !== "string" || typeof (photoPost.description) !== "string" || typeof (photoPost.photoLink) !== "string") {
            return false;
        }
        if (photoPost.id.trim() === "" || photoPost.author.trim() === "" || photoPost.description.trim() === "" || photoPost.photoLink.trim() === "") {
            return false;
        }
        for (var i in photoPost.hashTags) {
            if (typeof (photoPost.hashTags[i]) !== "string" || photoPost.hashTags[i].trim() === "") {
                return false;
            }
        }

        for (var i in photoPost.likes) {
            if (typeof (photoPost.likes[i]) !== "string" || photoPost.likes[i].trim() === "") {
                return false;
            }
        }

        if (!photoPost.createdAt instanceof Date) {
            return false;
        }
        return true;
    }

    function filterAuthor(photoPosts, author) {
        var result = [];
        for (var index = 0; index < photoPosts.length; index++) {
            if (photoPosts[index].author == author) {
                result.push(photoPosts[index]);
            }
        }
        return result;
    }

    function filterHashtag(photoPosts, hashTag) {
        var result = [];
        for (var index = 0; index < photoPosts.length; index++) {
            if (photoPosts[index].hashTag == hashTag) {
                result.push(photoPosts[index]);
            }
        }
        return result;
    }

    function compareDate(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
    function sortPostsByDate(posts) {
        posts.sort(compareDate);
        return posts;
    }
    function getPhotoPosts(filterConfig, photoPosts) {
        var resultArray = [];
        photoPosts = sortPostsByDate(photoPosts);
        if (filterConfig === undefined) {
            return photoPosts;
        } else {
            resultArray = photoPosts.sort(compareDate);
            if (filterConfig.author !== '') {
                resultArray = filterAuthor(resultArray, filterConfig.author);
            }
            if (filterConfig.hashTag !== '') {
                resultArray = filterHashtag(resultArray, filterConfig.hashTag);
            }
            if (filterConfig.createdAt !== '') {
                resultArray = photoPosts.filter((element)=>new Date(element.createdAt).toLocaleDateString() === filterConfig.createdAt);
            }
        }
        return resultArray;
    }

    function removePhotoPost(photoPosts, id) {
        for (var i in photoPosts) {
            if (photoPosts[i].id === id) {
            }
        }
        return false;
    }

    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    }
    function getPhotoPost(id, photoPosts) {
        for (var index = 0; index < photoPosts.length; index++) {
            if (photoPosts[index].id === id) {
                return photoPosts[index];
            }
        }
    }
    function editPhotoPost(id, photoPost) {
        var changedPhotoPost = getPhotoPost(id);
        if (validatePhotoPost(changedPhotoPost)) {
            if (!photoPost) {
                return false;
            }
            if (photoPost.description !== undefined && photoPost.description.length !== 0) {
                changedPhotoPost.description = photoPost.description;
            }
            if (photoPost.hashTags !== undefined && photoPost.hashTags.length !== 0) {
                changedPhotoPost.hashTags = photoPost.hashTags;
            }
            if (photoPost.likes !== undefined && photoPost.likes.length !== 0) {
                changedPhotoPost.likes = photoPost.likes;
            }
            if (photoPost.photoLink !== undefined && photoPost.photoLink.length !== 0) {
                changedPhotoPost.photoLink = photoPost.photoLink;
            }
            console.log(changedPhotoPost);
            return true;
        }
        return false;
    }
    return {
        validatePhotoPost: validatePhotoPost,
        getPhotoPost: getPhotoPost,
        addPhotoPost: addPhotoPost,
        getPhotoPosts: getPhotoPosts,
        removePhotoPost: removePhotoPost,
        sortPostsByDate: sortPostsByDate
    }

}());
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
