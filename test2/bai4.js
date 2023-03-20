let postsBtn = document.querySelector('#posts-btn');
let albumsBtn = document.querySelector('#albums-btn');
let photosBtn = document.querySelector('#photos-btn');
let doc = document.querySelector('ul');
let activeBtn = postsBtn;
async function getPost() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}
async function getAblums() {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    return data;
}
async function getPhoto() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    return data;
}
async function showPost() {
    doc.innerHTML = '';
    let posts = await getPost();
    let postList = document.getElementById('posts-btn');
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        document.querySelector('ul').appendChild(li);
    });
}

async function showAblum() {
    doc.innerHTML = '';
    let albums = await getAblums();
    let albumList = document.getElementById('albums-btn');
    albums.forEach(album => {
        const li = document.createElement('li');
        li.textContent = album.title;
        document.querySelector('ul').appendChild(li);
    });
}
async function showPhoto() {
    doc.innerHTML = '';
    let phottos = await getPhoto();
    let photoList = document.getElementById('photos-btn');
    phottos.forEach(photo => {
        const li = document.createElement('li');
        li.textContent = photo.title;
        document.querySelector('ul').appendChild(li);
    });
}
function setActiveBtn(btn) {
    activeBtn.classList.remove('active');
    btn.classList.add('active');
    activeBtn = btn;
}

postsBtn.addEventListener('click', () => {
    showPost();
    setActiveBtn(postsBtn);
});

albumsBtn.addEventListener('click', () => {
    showAblum();
    setActiveBtn(albumsBtn);
});

photosBtn.addEventListener('click', () => {
    showPhoto();
    setActiveBtn(photosBtn);
});


fetchPosts();



