const userPhotosRow = document.querySelector(".user-photo-row");

const query = new URLSearchParams(location.search);

const albumId = query.get("albumId");

userPhotosRow.innerHTML = `<div class="loader loadingio-spinner-magnify-3l5v4i2w3az"><div class="ldio-djvbccvlp2d">
<div><div><div></div><div></div></div></div>
</div></div>`;

getData(
   `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
   (photo) => {
     userPhotosRow.innerHTML = "";
     photo.map((photo) => {
       userPhotosRow.innerHTML += `<div class="user">
       <h3 class="album-title">${photo.title}</h3>\
       <img src="${photo.thumbnailUrl}" alt="">
      
    </div>
    <a href="${photo.url}">Photo 600x600</a>`;
     });
   }
 );
 