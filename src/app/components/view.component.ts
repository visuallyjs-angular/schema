import { Component } from '@angular/core';
import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
    <div class="vjs-schema-view vjs-schema-element">
        <div class="vjs-schema-element-name">
            <div class="vjs-schema-view-delete vjs-schema-delete vjs-schema-delete-vertex" title="Delete view" (click)="this.removeNode()"></div>
            <span>{{data['name']}}</span>
            <div class="vjs-schema-buttons">
                <div class="vjs-schema-edit-name vjs-schema-edit" title="Edit view" (click)="this.setAsSelection()"></div>
            </div>
        </div>
        <div class="vjs-schema-view-details">{{data['query']}}</div>
    </div>
  `
})
export class ViewComponent extends BaseNodeComponent {

}
