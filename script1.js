function renderGalleryFromFirebase(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  images.forEach((img) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.title;

    const caption = document.createElement("div");
    caption.className = "hover-caption";
    caption.innerHTML = `
        <strong>${img.title || "Untitled"}</strong><br>
        ${img.date || ""}<br>
        ${img.location || ""}<br>
        <small>${img.description || ""}</small>
      `;

    item.appendChild(image);
    item.appendChild(caption);

    item.addEventListener("click", () => {
      openLightbox(img);
    });

    gallery.appendChild(item);
  });
}
