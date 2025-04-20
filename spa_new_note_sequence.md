
# 📝 Sequence Diagram: Creating a New Note in the SPA Version

This diagram shows what happens when the user creates a new note on the SPA version of the notes app at [`https://studies.cs.helsinki.fi/exampleapp/spa`](https://studies.cs.helsinki.fi/exampleapp/spa).

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note in the input field

    Note right of browser: User clicks the "Save" button

    browser->>server: POST /new_note_spa with note data (JSON)
    activate server
    server-->>browser: 200 OK (or confirmation response)
    deactivate server

    Note right of browser: JavaScript updates the note list dynamically without reloading

    Note right of browser: The new note appears on the page instantly
```
