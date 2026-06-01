import {
    EVENT_TAP, DEFAULT, AnchorLocations,
    EVENT_CLICK, CONNECTOR_TYPE_ORTHOGONAL,
    consume, LabelOverlay, DotOverlay,
    Edge,
    EdgeEventCallbackPayload
} from "@visuallyjs/browser-ui";

import {TableComponent} from "./components/table.component";
import {ViewComponent} from "./components/view.component";
import {COMMON} from "./constants";
import {AngularViewOptions, BrowserUIAngularModel} from '@visuallyjs/browser-ui-angular';

const viewOptions:AngularViewOptions = {
    nodes:{
        "table": {
            component: TableComponent
        },
        "view": {
            component: ViewComponent
        }
    },
    ports: {
        [DEFAULT]: {
            edgeType: COMMON, // the type of edge for connections from this port type
            maxConnections: -1 // no limit on connections
        }
    },
    edges:{
        [DEFAULT]: {
            detachable: false,
            anchor: [AnchorLocations.Left, AnchorLocations.Right],
            connector:CONNECTOR_TYPE_ORTHOGONAL,
            cssClass: "vjs-schema-common-edge",
            events: {
                [EVENT_CLICK]: (params:EdgeEventCallbackPayload) => {
                    // defaultPrevented is true when this was a delete edge click.
                    if (!params.e.defaultPrevented) {
                        params.model.setSelection(params.obj)
                    }
                }
            },
            overlays: [
                {
                    type: LabelOverlay.type,
                    options: {
                        cssClass: "vjs-schema-delete-relationship",
                        label: "×",
                        events: {
                            [EVENT_CLICK]: (params:{edge:Edge, e:Event, model:BrowserUIAngularModel}) => {
                                consume(params.e)
                                params.model.removeEdge(params.edge)
                            }
                        }
                    }
                },
                {
                    type:DotOverlay.type,
                    options:{
                        location:1,
                        radius:5
                    }
                },
                {
                    type:DotOverlay.type,
                    options:{
                        location:0,
                        radius:5
                    }
                }
            ]
        }
    }
}

export default viewOptions
