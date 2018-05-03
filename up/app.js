const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
let posts = JSON.parse(fs.readFileSync('./public/server/data/posts.json'));
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function getPhotoPost(id) {
    return posts.find((element) => element.id === id);
}


function addPhotoPost(photoPost) {
    photoPost.createdAt = new Date(photoPost.createdAt);
    if (validatePhotoPost(photoPost)) {
        posts.push(photoPost);
        fs.writeFile(('./server/data/posts.json'), JSON.stringify(posts));
        return true;
    }
    return false;
}



function validatePhotoPost(photoPost) {
    if (photoPost.id || photoPost.author || photoPost.photoLink || photoPost.hashTag.length === 0 || !photoPost.createdAt instanceof Date) {
        return true;
    }
    return false;
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

function getPhotoPosts(filterConfig) {
    posts.sort(compareDate);
    if (!filterConfig) {
        return posts;
    } else {
        if (filterConfig.author) {
            posts = posts.filter((element) => element.author === filterConfig.author);
        }
        if (filterConfig.hashTag) {
            posts = filterHashTag(posts, filterConfig.hashTag);
        }
        if (filterConfig.createdAt) {
            posts = posts.filter((element) => new Date(element.createdAt).toLocaleDateString() === filterConfig.createdAt);        }
    }
    return posts;
}

function removePhotoPost(id) {
    var index = posts.findIndex((element) => element.id === id);
    if (index != -1) {
        posts.splice(index, 1);
        fs.writeFile(('./server/data/posts.json'), JSON.stringify(posts));
        return true;
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
        return true;
    }
    return false;
}


app.get('/getPhotoPost', (req, res) => {
    let post = getPhotoPost(req.query.id);
    post ? res.send(post) : res.status(404).end();
});

app.get('/getAllPhotoPosts', (req, res) => {
    posts ? res.send(posts) : res.status(404).end();
});

app.post('/getPhotoPosts', (req, res) => {
    let resultPosts;
    if (posts) {
        resultPosts = getPhotoPosts(req.body);
    }
    resultPosts ? res.send(resultPosts) : res.status(404).end();
});

app.post('/addPhotoPost', (req, res) => {
    if (posts) {
        addPhotoPost(req.body);
        res.send(posts);
    }
    else {
        res.status(404).end();
    }
});

app.put('/editPhotoPost', (req, res) => {
    let post = req.body;
    if (post) {
        editPhotoPost(req.query.id, post);
        res.send(posts);
    } else {
        res.status(404).end();
    }
});

app.delete('/removePhotoPost', (req, res) => {
    if (posts) {
        removePhotoPost(req.query.id);
        res.send(posts);
    } else {
        res.status(404).end();
    }
});
app.listen(3000, () => {
    console.log('Server is running...');
});
