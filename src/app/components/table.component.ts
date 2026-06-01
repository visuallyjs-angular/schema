import { Component } from '@angular/core';
import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";
import { uuid, Node } from "@visuallyjs/browser-ui"
import { datatypes } from "../definitions";

@Component({
  template: `
    <div class="vjs-schema-table vjs-schema-element">
        <div class="vjs-schema-element-name">
            <div class="vjs-schema-delete vjs-schema-delete-vertex" title="Click to delete" (click)="this.removeNode()"></div>
            <span>{{data['name']}}</span>
            <div class="vjs-schema-buttons">
                <div class="vjs-schema-edit-name vjs-schema-edit" title="Click to edit table name" (click)="this.setAsSelection()"></div>
                <div class="vjs-schema-new-column vjs-schema-add" title="Click to add a new column" (click)="addColumn($event)"></div>
            </div>
        </div>
        <div class="vjs-schema-table-columns">
            @for (c of data['columns']; track c.id) {
                <div class="vjs-schema-table-column"
                     [attr.data-type]="c.datatype"
                     [attr.data-primary-key]="(c.primaryKey || false).toString()"
                     [attr.data-vjs-port]="c.id"
                     [attr.data-vjs-scope]="c.datatype"
                     data-vjs-source="true"
                     data-vjs-target="true">
                    <div class="vjs-schema-table-column-delete vjs-schema-delete" (click)="deleteColumn(c.id)"></div>
                    <div><span>{{c.name}}</span></div>
                    <div class="vjs-schema-table-column-edit vjs-schema-edit" (click)="editColumn(c.id)"></div>
                </div>
            }
        </div>
    </div>
  `
})
export class TableComponent extends BaseNodeComponent {

  addColumn(e: MouseEvent) {

    this.addNewPort("column", {
      id: uuid(),
      name: "new column",
      primaryKey: false,
      datatype: datatypes[0].id
    });
  }

  deleteColumn(columnId: string) {
    this.removePort(columnId)
  }

  editColumn(columnId: string) {
    this.model.setSelection(this.getPort(columnId))
  }
}
