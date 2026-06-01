### Schema Builder Demo

This demo illustrates a database schema builder using VisuallyJS in an Angular application.

#### How it works

The demo uses the `vjs-surface` component to create an environment for designing database tables and their relationships. It features specialized node types for tables and columns.

#### Components Used

- `vjs-surface`: The main drawing surface for the database schema.
- `vjs-controls`: Standard zoom and navigation tools.
- `vjs-miniview`: A small navigation window for large schemas.

#### Component Options

The `vjs-surface` component is configured with:
- `viewOptions`: Defines node and edge types for database elements.
- `renderOptions`: Specifies visual styles, layouts, and interaction behaviors.
- `modelOptions`: Controls the behavior of the underlying data model, including relationship rules.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
