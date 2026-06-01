import { Component } from '@angular/core';
import { isNode, isPort } from "@visuallyjs/browser-ui"
import { datatypes, cardinalities } from "../definitions";
import {
  PROPERTY_CARDINALITY,
  TABLE, VIEW, COLUMN, RELATIONSHIP
} from "../constants";
import {InspectorComponent, VisuallyJsModule} from '@visuallyjs/browser-ui-angular';

@Component({
  selector: 'app-schema-inspector',
  template: `
    @if (currentObjectType === PORT) {
      <div>Name</div>
      <input type="text" vjs-att="name" vjs-focus="true"/>
      <div>Datatype</div>
      @for (d of datatypes; track d.id) {
        <label>
          <input type="radio" vjs-att="datatype" name="datatype" [value]="d.id"/>{{d.description}}
        </label>
      }
    } @else if (currentObjectType === NODE) {
      @if (currentType === TABLE_TYPE) {
          <div>Table Name</div>
          <input type="text" vjs-att="name" vjs-focus="true"/>
        } @else if (currentType === VIEW_TYPE) {
          <div>View Name</div>
          <input type="text" vjs-att="name" vjs-focus="true"/>
          <div>Query</div>
          <textarea vjs-att="query" rows="10"></textarea>
        }
    }
      @else if (currentObjectType === EDGE) {
        <div>Cardinality</div>
        @for (c of cardinalities; track c.id) {
          <label>
            <input type="radio" [name]="PROPERTY_CARDINALITY" vjs-att="cardinality" [value]="c.id"/>{{c.name}}
          </label>
        }
      }
  `,
  imports:[VisuallyJsModule]
})
export class SchemaBuilderInspectorComponent extends InspectorComponent {

  TABLE_TYPE = TABLE;
  VIEW_TYPE = VIEW;
  COLUMN_TYPE = COLUMN;
  RELATIONSHIP_TYPE = RELATIONSHIP;

  datatypes = datatypes;
  cardinalities = cardinalities;
  PROPERTY_CARDINALITY = PROPERTY_CARDINALITY;
}
