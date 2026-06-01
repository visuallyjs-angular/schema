import { Component } from '@angular/core';
import { TABLE } from "../constants";
import {BrowserElement, PALETTE_MODE_TAP, PaletteMode } from "@visuallyjs/browser-ui";
import {VisuallyJsModule} from '@visuallyjs/browser-ui-angular';

@Component({
  selector: 'app-schema-palette',
  template: `
    <div vjs-palette
         class="vjs-schema-palette"
         [dataGenerator]="dataGenerator"
         [mode]="paletteMode"
         [selectAfterAdd]="true">
      <div class="vjs-schema-palette-item" data-vjs-type="table">Add Table</div>
      <div class="vjs-schema-palette-item" data-vjs-type="view">Add View</div>
    </div>
  `,
  imports:[VisuallyJsModule]
})
export class PaletteComponent {
  paletteMode:PaletteMode = PALETTE_MODE_TAP;

  dataGenerator = (el: BrowserElement) => {
    const type = el.getAttribute("data-vjs-type"),
      base: any = {
        name: el.getAttribute("data-vjs-type"),
        type
      };

    if (type === TABLE) {
      base.columns = []
    } else {
      base.query = ''
    }

    return base
  }
}
