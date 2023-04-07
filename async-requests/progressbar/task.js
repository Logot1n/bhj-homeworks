const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.addEventListener('progress', function(e) {
        if(e.lengthComputable) {
            const percentComplete = (e.loaded / e.total) * 100;
            progress.value = percentComplete;
        }
    })

    xhr.send();
})

