import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
import DataTable from "smpl-react-data-table";

function myDataTable(props) {
    return <DataTable headings={JSON.parse(props.headings)} rows={JSON.parse(props.rows)} />
}
myDataTable.propTypes = {
    headings: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired
}

const myDataTableWebComponent = reactToWebComponent(myDataTable, React, ReactDOM)
customElements.define('data-table', myDataTableWebComponent);
