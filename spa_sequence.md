

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /spa
    activate server
    server-->>browser: HTML document (SPA entry point)
    deactivate server

    browser->>server: GET /main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: JavaScript renders the initial page and fetches note data

    browser->>server: GET /data.json
    activate server
    server-->>browser: JSON with note data
    deactivate server

    Note right of browser: Browser dynamically renders the notes without reloading the page
```
