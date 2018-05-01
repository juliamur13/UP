'use strict';

var moduleScript = (function () {

    var posts = [{
        id: '1',
        description: 'description1',
        createdAt: new Date(2018, 3, 25),
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
            if (photoPosts[index].author === author) {
                result.push(photoPosts[index]);
            }
        }
        return result;
    }

    function filterHashTag(photoPosts, hashTag) {
        var result = [];
        var index;
        for (var item = 0; item < photoPosts.length; item++) {
            index = photoPosts[item].hashTags.findIndex((element) => element === hashTag);
            if (index != -1) {
                result.push(photoPosts[item]);
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
        var resultArray = sortPostsByDate(photoPosts);
        if (!filterConfig) {
            return resultArray;
        } else {
            if (filterConfig.author !== '') {
                resultArray = filterAuthor(resultArray, filterConfig.author);
            }
            if (filterConfig.hashTag !== '') {
                resultArray = filterHashTag(resultArray, filterConfig.hashTag);
            }
            if (filterConfig.createdAt !== '') {
                resultArray = resultArray.filter((element) => new Date(element.createdAt).toLocaleDateString() === filterConfig.createdAt);
            }
        }
        return resultArray;
    }

    function removePhotoPost(photoPosts, id) {
        var index = photoPosts.findIndex((element) => element.id === id);
        if (index != -1) {
            photoPosts.splice(id - 1, 1);
            return true;
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
        var index = photoPosts.findIndex((element) => element.id === id);
        if (index != -1) {
            return photoPosts[index];
        }
        return false;
    }

    function editPhotoPost(id, photoPost) {
        var changedPhotoPost = getPhotoPost(id);
        if (validatePhotoPost(changedPhotoPost)) {
            if (!photoPost) {
                return false;
            }
            if (photoPost.description && photoPost.description.length !== 0) {
                changedPhotoPost.description = photoPost.description;
            }
            if (photoPost.hashTags && photoPost.hashTags.length !== 0) {
                changedPhotoPost.hashTags = photoPost.hashTags;
            }
            if (photoPost.likes && photoPost.likes.length !== 0) {
                changedPhotoPost.likes = photoPost.likes;
            }
            if (photoPost.photoLink && photoPost.photoLink.length !== 0) {
                changedPhotoPost.photoLink = photoPost.photoLink;
            }
            // console.log(changedPhotoPost);
            return true;
        }
        return false;
    }

    return {
        posts: posts,
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
