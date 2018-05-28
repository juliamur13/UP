//const multer = require('multer');
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
let posts = JSON.parse(fs.readFileSync('./server/data/posts.json'));
let users = JSON.parse(fs.readFileSync('./server/data/users.json'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function getPhotoPost(id) {
    if (posts) {
        return posts.find((element) => element.id === id);
    }
    return false;
}

// const upload = {
//     storage: multer.diskStorage({
//         destination: function (req, file, sb) {
//             sb(null, './public/images');
//         },
//         filename: function (req, file, sb) {
//             sb(null, file.originalname);
//         }
//     })
// };

function addPhotoPost(photoPost) {
    if (posts) {
        photoPost.createdAt = new Date(photoPost.createdAt);
        if (validatePhotoPost(photoPost) && posts) {
            posts.push(photoPost);
            fs.writeFile(('./server/data/posts.json'), JSON.stringify(posts));
            return posts;
        }
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
    if (posts) {
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
                posts = posts.filter((element) => new Date(element.createdAt).toLocaleDateString() === filterConfig.createdAt);
            }
        }
        return true;
    }
    return false;
}

function removePhotoPost(id) {
    if (posts) {
        var index = posts.findIndex((element) => element.id === id);
        if (index != -1) {
            posts.splice(index, 1);
            fs.writeFile(('./server/data/posts.json'), JSON.stringify(posts));
            return posts;
        }
    }
    return false;
}

function getUsers() {
    return users;
}

function editPhotoPost(id, changedPhotoPost) {
    let index = posts.findIndex(post => post.id === id);
    if(index !== -1) {
        if (changedPhotoPost.description && changedPhotoPost.description) {
            posts[index].description = changedPhotoPost.description;
        }
        if (changedPhotoPost.hashTags && changedPhotoPost.hashTags.length !== 0) {
            posts[index].hashTags = changedPhotoPost.hashTags;
        }
        if (changedPhotoPost.likes && changedPhotoPost.likes.length !== 0) {
            posts[index].likes = changedPhotoPost.likes;
        }
        if (changedPhotoPost.photoLink && changedPhotoPost.photoLink !== 0) {
            posts[index].photoLink = changedPhotoPost.photoLink;
        }
        if (changedPhotoPost.comments && changedPhotoPost.comments !== 0) {
            posts[index].comments = changedPhotoPost.comments;
        }
    }
}

app.get('/getPhotoPost', (req, res) => {
    let post = getPhotoPost(req.query.id);
    post ? res.send(post) : res.status(404).end();
});

app.get('/getAllPhotoPosts', (req, res) => {
    posts ? res.send(posts) : res.status(404).end();
});

app.get('/getAllUsers', (req, res) => {
    const users = getUsers();
    users ? res.send(users) : res.status(404).end();
});

app.post('/getPhotoPosts', (req, res) => {
    getPhotoPosts(req.body) ? res.send(posts) : res.status(404).end();
});

app.post('/addPhotoPost', (req, res) => {
    let posts = addPhotoPost(req.body);
    if (posts) {
        res.send(posts);
    } else {
        res.status(404).end();
    }
});

app.put('/editPhotoPost', (req, res) => {
    let post = req.body;
    if (post) {
        editPhotoPost(req.query.id, post);
        fs.writeFile(('./server/data/posts.json'), JSON.stringify(posts));
        res.send(posts);
    } else {
        res.status(404).end();
    }
});

app.delete('/removePhotoPost', (req, res) => {
    let id = req.query.id;
    let posts = removePhotoPost(id);
    if (posts) {
        res.send(posts);
    } else {
        res.status(404).end();
    }
});
app.listen(3000, () => {
    console.log('Server is running... on 3000');
});
