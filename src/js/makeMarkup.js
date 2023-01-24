function makeMarkup(imageData) {
  const pixabayImageMarkup = `
 <div class="photo-card">
     <a href='${imageData.largeImageURL}'>
      <img class="gallery__image" src=${imageData.webformatURL} alt='${imageData.tags}' width="300" height="200" loading="lazy" />
     </a>
    <div class="info">
      <p class="info-item">
        <b>Likes:</b>
        ${imageData.likes}
      </p>
      <p class="info-item">
        <b>Views:</b>
        ${imageData.views}
      </p>
      <p class="info-item">
        <b>Comments:</b>
        ${imageData.comments}
      </p>
      <p class="info-item">
        <b>Downloads:</b>
        ${imageData.downloads}
      </p>
    </div>
  </div>

`;

  return pixabayImageMarkup;
}

export { makeMarkup };
