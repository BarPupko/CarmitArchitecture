// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDewVbT4jJiHtbzP-esVd5b3XGLkzPDcuI",
  authDomain: "carmitarchitecture.firebaseapp.com",
  projectId: "carmitarchitecture",
  storageBucket: "carmitarchitecture.firebasestorage.app",
  messagingSenderId: "178132110868",
  appId: "1:178132110868:web:df0ccece30b5ad91caa101",
  measurementId: "G-D9DBQR72K3",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const selector = document.getElementById("projectSelector");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const imgInput = document.getElementById("src");
const dateInput = document.getElementById("date");
const locationInput = document.getElementById("location");
const latInput = document.getElementById("x");
const lngInput = document.getElementById("y");
const categoryInput = document.getElementById("category");
const objectPositionInput = document.getElementById("objectPosition");
const description1Input = document.getElementById("description1");
const extraParagraphInput = document.getElementById("extraParagraph");
const creditsInputs = [
  document.getElementById("credits"),
  document.getElementById("credits1"),
  document.getElementById("credits2"),
  document.getElementById("credits3"),
];
const relatedImagesContainer = document.getElementById("relatedImages");

let projectList = [];
let currentId = null;

async function loadProjects() {
  const snapshot = await db.collection("projects").get();
  projectList = [];
  selector.innerHTML = '<option value="">-- New Project --</option>';

  snapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    projectList.push(data);
    const option = document.createElement("option");
    option.value = data.id;
    option.textContent = data.title || data.id;
    selector.appendChild(option);
  });

  if (projectList.length > 0) {
    currentId = projectList[0].id;
    selector.value = currentId;
    loadProject(currentId);
  }
}

function clearRelatedImagesUI() {
  relatedImagesContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const srcInput = document.createElement("input");
    srcInput.className = "related-src";
    srcInput.placeholder = `Related Image ${i + 1} URL`;

    const titleInput = document.createElement("input");
    titleInput.className = "related-title";
    titleInput.placeholder = `Related Image ${i + 1} Title`;

    relatedImagesContainer.appendChild(srcInput);
    relatedImagesContainer.appendChild(titleInput);
  }
}

function loadProject(id) {
  const project = projectList.find((p) => p.id === id);
  if (!project) return;

  currentId = id;
  titleInput.value = project.title || "";
  descInput.value = project.description || "";
  imgInput.value = project.src || "";
  dateInput.value = project.date || "";
  locationInput.value = project.location || "";
  latInput.value = project.exactLocation?.x || "";
  lngInput.value = project.exactLocation?.y || "";
  categoryInput.value = project.category || "";
  objectPositionInput.value = project.objectPosition || "";
  description1Input.value = project.description1 || "";
  extraParagraphInput.value = project.extraParagraph || "";
  creditsInputs.forEach((el, i) => {
    el.value = project[`credits${i ? i : ""}`] || "";
  });

  clearRelatedImagesUI();

  const srcInputs = relatedImagesContainer.querySelectorAll(".related-src");
  const titleInputs = relatedImagesContainer.querySelectorAll(".related-title");

  srcInputs.forEach((input, i) => {
    input.value = project.relatedImages?.[i]?.src || "";
  });
  titleInputs.forEach((input, i) => {
    input.value = project.relatedImages?.[i]?.title || "";
  });
}

function submitProject() {
  const credits = {};
  creditsInputs.forEach((el, i) => {
    credits[`credits${i ? i : ""}`] = el.value;
  });

  const relatedSrcs = relatedImagesContainer.querySelectorAll(".related-src");
  const relatedTitles =
    relatedImagesContainer.querySelectorAll(".related-title");
  const relatedImages = Array.from(relatedSrcs)
    .map((srcInput, i) => {
      return {
        src: srcInput.value,
        title: relatedTitles[i].value,
      };
    })
    .filter((img) => img.src);

  const project = {
    title: titleInput.value,
    description: descInput.value,
    src: imgInput.value,
    date: dateInput.value,
    location: locationInput.value,
    exactLocation: {
      x: parseFloat(latInput.value),
      y: parseFloat(lngInput.value),
    },
    category: categoryInput.value,
    objectPosition: objectPositionInput.value,
    description1: description1Input.value,
    extraParagraph: extraParagraphInput.value,
    relatedImages,
    ...credits,
  };

  const docRef = currentId
    ? db.collection("projects").doc(currentId)
    : db.collection("projects").doc();
  docRef.set(project).then(() => {
    alert("✅ Project saved successfully");
    loadProjects();
  });
}

selector.addEventListener("change", (e) => {
  const id = e.target.value;
  if (id) loadProject(id);
});

clearRelatedImagesUI();
loadProjects();
