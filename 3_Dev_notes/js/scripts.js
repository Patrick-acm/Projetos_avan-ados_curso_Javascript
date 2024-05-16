document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('theme-switch');

  // Verifica se existe uma preferência salva e aplica o tema correspondente
  if (localStorage.getItem('dark-theme') === 'true') {
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;  // Garante que o switch mostre o estado correto
  }

  themeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme', this.checked);
    // Salva a preferência de tema no local storage
    localStorage.setItem('dark-theme', this.checked);
  });
});


// Elementos
const notesContainer = document.querySelector("#notes-container");

const noteInput = document.querySelector("#note-content");

const addNoteBtn = document.querySelector(".add-note");

const searchInput = document.querySelector("#search-input");

const exportBtn = document.querySelector("#export-notes");

// Funções 
function showNotes() {
  cleanNotes();

  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);
    notesContainer.appendChild(noteElement)
  });
}

function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]")

  const orderedNotes = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1));

  return orderedNotes;
}

function cleanNotes() {
  notesContainer.replaceChildren([]);
}

  // Eventos do elemento