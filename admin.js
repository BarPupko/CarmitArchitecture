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
const imgInput = document.getElementById("image");
const output = document.getElementById("output");

let projectList = [];
let currentId = null;

async function loadProjects() {
  const snapshot = await db.collection("projects").get();

  projectList = [];
  selector.innerHTML = "";

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
  } else {
    console.warn("No documents found in Firestore.");
  }
}

function loadProject(id) {
  const project = projectList.find((p) => p.id === id);
  if (!project) return;

  currentId = id;
  titleInput.value = project.title || "";
  descInput.value = project.description || "";
  imgInput.value = project.src || "";
  output.textContent = JSON.stringify(project, null, 2);
}

selector.addEventListener("change", (e) => {
  loadProject(e.target.value);
});

document.getElementById("saveBtn").addEventListener("click", async () => {
  if (!currentId) return;

  const updated = {
    title: titleInput.value,
    description: descInput.value,
    src: imgInput.value,
  };

  await db.collection("projects").doc(currentId).set(updated);
  output.textContent = "✅ Saved!";
  await loadProjects();
});

loadProjects();
