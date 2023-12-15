import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
} from "@syncfusion/ej2-react-grids";
import { Inject, Page, Sort } from "@syncfusion/ej2-react-grids";
import * as React from "react";
import { data } from "../DataDummy";

function statusTemplate(props) {
  return (
    <div>
      {props.Status === "Active" ? (
        <div id="status" className="statustemp e-activecolor">
          <span className="statustxt e-activecolor">{props.Status}</span>
        </div>
      ) : (
        <div id="status" className="statustemp e-inactivecolor">
          <span className="statustxt e-inactivecolor">{props.Status}</span>
        </div>
      )}
    </div>
  );
}

function progressTemplate(props) {
  let percentage = props[props.column.field];
  if (percentage <= 20) {
    percentage = percentage + 30;
  }
  return (
    <div id="myProgress" className="pbar">
      {props.Status === "Inactive" ? (
        <div
          id="myBar"
          className="bar progressdisable"
          style={{ width: percentage + "%" }}
        >
          <div id="pbarlabel" className="barlabel">
            {percentage + "%"}
          </div>
        </div>
      ) : (
        <div id="myBar" className="bar" style={{ width: percentage + "%" }}>
          <div id="pbarlabel" className="barlabel">
            {percentage + "%"}
          </div>
        </div>
      )}
    </div>
  );
}

function trustTemplate(props) {
  var Trustworthiness =
    props.Trustworthiness == "Sufficient"
      ? "/grid/images/Sufficient.png"
      : props.Trustworthiness == "Insufficient"
      ? "/grid/images/Insufficient.png"
      : "/grid/images/Perfect.png";
  return (
    <div>
      <img style={{ width: "24px", height: "24px" }} src={Trustworthiness} />
      <span id="TrustText">{props.Trustworthiness}</span>
    </div>
  );
}

function localTemplate(props) {
  return (
    <div className="mapImage">
      <img src="/grid/images/Map.png" alt="" />
      <span> </span>
      <span id="locationtext">{props.Location}</span>
    </div>
  );
}

function App() {
  const pageSettings = { pageSize: 5 };
  const sortSettings = {
    columns: [{ field: "Id", direction: "Ascending" }],
  };

  return (
    <main>
      <GridComponent
        dataSource={data}
        loadingIndicator={{ indicatorType: "Shimmer" }}
        allowPaging={true}
        pageSettings={pageSettings}
        allowGrouping={true}
        allowSorting={true}
        sortSettings={sortSettings}
        allowFiltering={true}
        height={300}
      >
        <ColumnsDirective>
          <ColumnDirective
            type="checkbox"
            allowSorting={false}
            allowFiltering={false}
            width="60"
          />
          <ColumnDirective field="Id" width="130" />
          <ColumnDirective field="Name" width="120" />
          <ColumnDirective field="Mail" width="130" />
          <ColumnDirective field="Designation" width="130" />
          <ColumnDirective
            field="Location"
            width="120"
            template={localTemplate}
          />
          <ColumnDirective
            field="Status"
            headerText="Status"
            template={statusTemplate}
            width="100"
          />
          <ColumnDirective
            field="Trustworthiness"
            template={trustTemplate}
            width="100"
          />
          <ColumnDirective
            field="Proficiency"
            format="C2"
            template={progressTemplate}
            width="100"
          />
          <ColumnDirective
            field="Address"
            width="160"
            clipMode="EllipsisWithToolTip"
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </main>
  );
}
export default App;
