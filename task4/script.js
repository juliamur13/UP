(function() {
    var photoPosts = [
        {
            id: '1',
            description: 'd1',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A1',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '2',
            description: 'd2',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A2',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h3', 'h1', 'h2', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '3',
            description: '',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A3',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '4',
            description: 'd4',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A4',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '5',
            description: 'd5',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A5',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '6',
            description: 'd6',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A6',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '7',
            description: 'd7',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A7',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '8',
            description: 'd8',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A8',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '9',
            description: 'd9',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A9',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '10',
            description: 'd10',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A10',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '11',
            description: 'd11',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A11',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '12',
            description: 'd12',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A12',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '13',
            description: 'd13',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A13',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '14',
            description: 'd14',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A14',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '15',
            description: 'd15',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A15',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '16',
            description: 'd16',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A16',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '17',
            description: 'd17',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A17',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '18',
            description: 'd18',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A18',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '19',
            description: 'd19',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A19',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        },
        {
            id: '20',
            description: 'd20',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'A20',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['h1', 'h5', 'h3', 'h4'],
            likes: ['l2', 'l1', 'l3']
        }

    ];

    function validatePhotoPost(photoPost){
       /* if (!photoPost.hasOwnProperty('hashTags')){
            return false;
        }
        if (!photoPost.hasOwnProperty('likes')){
            return false;
        }*/
        if(typeof(photoPost.id) !== "string" || typeof(photoPost.author) !== "string" || typeof(photoPost.description) !== "string"
            || typeof(photoPost.photoLink) !== "string") {
            return false;
        }
        if(photoPost.id.trim() === "" || photoPost.author.trim() === "" || photoPost.description.trim() === "" || photoPost.photoLink.trim() === ""){
            return false;
        }
        for(var i in photoPost.hashTags){
            if(typeof(photoPost.hashTags[i]) !== "string" || photoPost.hashTags[i].trim() === "") {
                return false;
            }
        }

        for(var i in photoPost.likes){
            if(typeof(photoPost.likes[i]) !== "string" || photoPost.likes[i].trim() === "") {
                return false;
            }
        }

        if(!photoPost.createdAt instanceof Date){
            return false;
        }
        return true;
    }

    function compareDate(a, b) {
        return (a.createdAt) - (b.createdAt);
    }

    function filterAuthor(photoPosts, author) {
        var result = [];
        for (var i in photoPosts) {
            if (photoPosts[i].author == author) {
                result.push(photoPosts[i]);
            }
        }
        return result;
    }

    function filterHashtag(photoPosts, hashtag) {
        var result = [];
        for (var i in photoPosts) {
            if (photoPosts[i].hashTag == hashtag) {
                result.push(photoPosts[i]);
            }
        }
        return result;
    }

    function filterLikes(photoPosts, likes) {
        var result = [];
        for (var i in photoPosts) {
            if (photoPosts[i].likes == likes) {
                result.push(photoPosts[i]);
            }
        }
        return result;
    }


    function getPhotoPosts(skip, top, filterConfig) {
        var result = [];
        if (filterConfig == undefined) {
            return photoPosts.sort(compareDate).slice(skip, skip + top);
        }
        else {
            resultArray = photoPosts.sort(compareDate).slice(skip, skip + top);
            if (filterConfig.author != undefined) {
                resultArray = filterAuthor(resultArray, filterConfig.author);
            }
            if (filterConfig.hashTag != undefined) {
                resultArray = filterHashtag(resultArray, filterConfig.hashTag);
            }
            if (filterConfig.likes != undefined) {
                resultArray = filterLikes(resultArray, filterConfig.likes);
            }
        }
        return resultArray;
    }

    function removePhotoPost(id){
        for (var i in photoPosts) {
            if (photoPosts[i].id === id) {
                return true;
            }
        }
        return false;
    }

    function addPhotoPost(photoPost){
        if(validatePhotoPost(photoPost)){
            photoPosts.push(photoPost);
           return true;
        }
        return false;
    }
    function getPhotoPost(id){
        for (var i in photoPosts) {
            if (photoPosts[i].id === id) {
                return photoPosts[i];
            }
        }
    }
    function editPhotoPost(id, photoPost){
        changedPhotoPost = getPhotoPost(id);
        if(validatePhotoPost(changedPhotoPost)){
            if (!photoPost) {
                return false;
            }
            if(photoPost.description !== undefined && photoPost.description.length !== 0){
                changedPhotoPost.description = photoPost.description;
            }
            if(photoPost.hashTags !== undefined && photoPost.hashTags.length !== 0){
                changedPhotoPost.hashTags = photoPost.hashTags;
            }
            if(photoPost.likes !== undefined && photoPost.likes.length !== 0){
                changedPhotoPost.likes = photoPost.likes;
            }
            if(photoPost.photoLink !== undefined && photoPost.photoLink.length !== 0){
                changedPhotoPost.photoLink = photoPost.photoLink;
            }
            console.log(changedPhotoPost);
            return true;
        }
        return false;
    }
    console.log(validatePhotoPost(getPhotoPost("2")));
    console.log(validatePhotoPost(getPhotoPost("3")));
    console.log(getPhotoPosts(10, 5));
    console.log(getPhotoPosts(0, 1, {author: "A16"}));
    console.log(getPhotoPosts(0, 1, {hashTag: "h7"}));
     console.log(getPhotoPosts(0, 10, {hashTag: "h3", author: "A4"}));
    console.log(addPhotoPost(getPhotoPost("5")));
    addPhotoPost({
        id: '21',
        description: 'd21',
        createdAt: new Date('2018-02-23T21:00:00'),
        author: 'A21',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTag:['h8', 'h13'],
        like: ['l2']
    });
    removePhotoPost('18');
    console.log(editPhotoPost('1', getPhotoPost('2')));
    editPhotoPost('1', {hashTag: ['h25', 'h4']});
    console.log(getPhotoPost('1'));
}())