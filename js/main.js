const imageGalleryEl=document.getElementById("image-gallery")


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response =>{
    const photos = response.data;
    console.log(photos);
    
})