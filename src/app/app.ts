import { Component } from '@angular/core';
import { VisuallyJsModule } from "@visuallyjs/browser-ui-angular";

import renderOptions from "./render-options"
import viewOptions from "./view-options"
import modelOptions from "./model-options"

import { PaletteComponent } from "./components/palette.component";
import { SchemaBuilderInspectorComponent } from "./components/inspector.component";

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, PaletteComponent, SchemaBuilderInspectorComponent],
  templateUrl: './app.html'
})
export class App {

  renderOptions = renderOptions
  viewOptions= viewOptions
  modelOptions = modelOptions
  url = "/schema-1.json"

}
