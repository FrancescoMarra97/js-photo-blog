const imageGalleryEl = document.getElementById("image-gallery")


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const photos = response.data;
        console.log(photos);

        let photoElements = "";
        photos.forEach(photo => {
            const { url, title } = photo


            const markup = `
         <div class=" col-xl-4 col-lg-6 col-md-6 col-sm-12 g-5">
                    <div class="card" >
                        <div class="card-title d-flex justify-content-center">
                            <img src="./img/pin.svg" alt="">
                        </div>
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

    //milestone 2

    const overlayEl = document.getElementById("overlay")

    const images = imageGalleryEl.querySelectorAll("img");
    images.forEach(image =>{
        image.addEventListener("click", ()=>{
            overlayEl.style.display = 'block';
        })
    })
