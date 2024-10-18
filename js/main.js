const imageGalleryEl = document.getElementById("image-gallery")


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const photos = response.data;
        console.log(photos);

        let photoElements = "";
        photos.forEach(photo => {
            const { url, title } = photo


            const markup = `
        <div class="col-md-4 g-5">
                    <div class="card" >
                        <div class="card-body">
                            <img src="${url}"
                                class="card-img-top" alt="...">
                        </div>
                        <div>
                            <p class="card-text p-2">${title}</p>
                        </div>
                    </div>
                </div>
        `
            photoElements += markup
        });
        imageGalleryEl.innerHTML = photoElements

    }).catch(error => {
        console.error(error);
    });