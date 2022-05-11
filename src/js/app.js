const form = document.getElementById('form');
const imagesList = document.querySelector('.images-list');
const urlError = document.querySelector('.form-item__error');
const images = document.querySelector('.images');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    urlError.classList.remove('form-item__error_display');

    const formData = new FormData(form);
    const name = formData.get('name');
    const url = formData.get('url');
    addImage(name, url);
    form.reset();
});

function addImage(name, url) {
    const img = document.createElement('img');
    img.classList.add('images-item__img');
    img.alt = name;
    img.src = url;


    img.onload = function() {
        const li = document.createElement('li');
        li.classList.add('images-item');

        const del = document.createElement('span');
        del.classList.add('images-item__del');
        del.textContent = 'x';

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('images-item__name');
        nameSpan.textContent = name;

        li.append(del);
        li.append(img);
        li.append(nameSpan);
        imagesList.append(li);
      };

    img.onerror = function() {
        urlError.classList.add('form-item__error_display');
    }
}

images.addEventListener('click', (e) =>  deleteImage(e));

function deleteImage(e) {
    const del = e.target.closest('.images-item__del');
    const img = e.target.closest('.images-item')
    if (!del) return;
    img.remove();
}


addImage('Река', 'https://top10a.ru/wp-content/uploads/2019/11/4-214.jpg');
addImage('Олень', 'https://huntland.ru/wp-content/uploads/2018/11/severniy_olen1.jpg');

