class Note {
    constructor(title, content, important = false, priority = 1, tags = []) {
        this.id = Date.now();
        this.title = title;
        this.content = content;
        this.important = important;
        this.priority = priority;
        this.tags = tags;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
}

class NotesApp {
    constructor() {
        this.notes = [];
    }

    addNote(note) {
        this.notes.push(note);
    }

    getNotes() {
        return this.notes;
    }

    getImportantNotes() {
        return this.notes.filter(function(note) {
            return note.important;
        });
    }

    updateNote(id, updatedTitle, updatedContent, updatedImportant, updatedPriority, updatedTags) {
        const note = this.notes.find(function(note) {
            return note.id === id;
        });
        if (note) {
            note.title = updatedTitle;
            note.content = updatedContent;
            note.important = updatedImportant;
            note.priority = updatedPriority;
            note.tags = updatedTags;
            note.lastUpdated = new Date();
        }
    }

    toggleImportant(id) {
        const note = this.notes.find(function(note) {
            return note.id === id;
        });
        if (note) {
            note.important = !note.important;
            note.lastUpdated = new Date();
        }
    }

    deleteNote(id) {
        this.notes = this.notes.filter(function(note) {
            return note.id !== id;
        });
    }

    // filterByTag(tag) {
    //     return this.notes.filter(function(note) {
    //         return note.tags.includes(tag);
    //     });
    // }

    // sortNotes(something) {
    //     if (something === "title") {
    //         this.notes.sort(function(a, b) {
    //             if (a.title < b.title) return -1;
    //             if (a.title > b.title) return 1;
    //             return 0;
    //         });
    //     } else if (something === "date") {
    //         this.notes.sort(function(a, b) {
    //             return a.id - b.id;
    //         });
    //     } else if (something === "priority") {
    //         this.notes.sort(function(a, b) {
    //             return b.priority - a.priority;
    //         });
    //     }
    // }

    // searchNotes(something) {
    //     return this.notes.filter(function(note) {
    //         return
    //     });
    // }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CONSOLE LOGS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const notesApp = new NotesApp();

// Neue Notizen hinzufügen ( ADD NOTES )

const note1 = new Note("Javascript Projekt", "Klassen mit Funktionen", true, 3, ["arbeit", "dci"]);
const note2 = new Note("Einkaufsliste", "Brot und Käse kaufen", false, 1, ["peroenlich"]);
const note3 = new Note("Urlaubsplannung", "Flugtickets und Hotel", true, 2, ["persoenlich", "urlaub"]);

notesApp.addNote(note1);
notesApp.addNote(note2);
notesApp.addNote(note3);

// Alle Notizen anzeigen ( GET NOTES )

console.log("Alle Notizen:");
notesApp.getNotes().forEach(function(note) {
    console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Alle Notizen");

// Wichtige Notizen anzeigen ( IMPORTA4NT NOTES )

console.log("Wichtige Notizen:");
notesApp.getImportantNotes().forEach(function(note) {
    console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Wichtige Notizen");

// Notiz aktualisieren ( UPDATE NOTES )

notesApp.updateNote(note2.id, "Neue Einkaufsliste", "Brot Käse und Milch", true, 2, ["persoenlich"]);


// Notizen nach dem Aktualisieren anzeigen

console.log("Notizen nach dem Aktualisieren:");
notesApp.getNotes().forEach(function(note) {
    console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Updated Notizen");

// Wichtigkeit umschalten ( TOGGLE IMPORT4NT )

notesApp.toggleImportant(note1.id);

// Notizen nach dem Umschalten der Wichtigkeit anzeigen

console.log("Notizen nach dem Umschalten der Wichtigkeit:");
notesApp.getNotes().forEach(function(note) {
    console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Neue Wichtigkeit Notizen");

// Notizen suchen ( SEARCH NOTES )

// const searchResults = notesApp.searchNotes("urlaub");
// console.log("Suchergebnisse:");
// searchResults.forEach(function(note) {
//     console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
// });

// Notizen nach Titel sortieren

// notesApp.sortNotes("title");
// console.log("Notizen nach Titel sortiert:");
// notesApp.getNotes().forEach(function(note) {
//     console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
// });

// Notizen nach Priorität sortieren

// notesApp.sortNotes("priority");
// console.log("Notizen nach Priorität sortiert:");
// notesApp.getNotes().forEach(function(note) {
//     console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
// });

// Notizen nach Tag filtern 

// const tagResults = notesApp.filterByTag("personal");
// console.log("Notizen nach Tag "personal" gefiltert:");
// tagResults.forEach(function(note) {
//     console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
// });

// Notiz löschen ( DELETE NOTES )

const noteId = note1.id;
notesApp.deleteNote(noteId);

// Notizen nach dem Löschen anzeigen

console.log("Notizen nach dem Löschen:");
notesApp.getNotes().forEach(function(note) {
    console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}, Important: ${note.important}, Priority: ${note.priority}, Tags: ${note.tags}, Created: ${note.dateCreated}, Updated: ${note.lastUpdated}`);
});