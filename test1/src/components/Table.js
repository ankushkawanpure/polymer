import React, { Component } from 'react';
import _ from "lodash";


export default class Table extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            status: null
        }
    }

    createDropDown = (status) => {

        if(status === "red") {
            return "RED";
        } else if (status === "yellow") {
            return "YELLOW";
        } else {
            return "GREEN";
        }
    };

    generateHeader = (dataColumns) => {
        return (<thead>
        <tr>
            {dataColumns.map(function (column) {
                return <th>{column}</th>;
            })}
        </tr>
        </thead>);
    };

    generareRows = (dataRows, dataColumns) => {
        return ( dataRows.map(function (row) {
                return (
                    <tr>
                        {dataColumns.map(function (column) {
                            if (column === 'status') {

                                if(row[column] === "red") {
                                    return <button type="button" className="btn btn-danger dropdown-toggle">RED</button>;
                                } else if (row[column] === "yellow") {
                                    return <button type="button" className="btn btn-warning dropdown-toggle">YELLOW</button>;
                                } else {
                                    return <button type="button" className="btn btn-success dropdown-toggle">GREEN</button>;
                                }
                            } else {
                                return <td>{row[column]}</td>;
                            }
                        })}
                    </tr>);
            })
        );
    };

    render() {

        var dataColumns = _.keys(this.props.data[0]);
        console.log(dataColumns);
        var dataRows = this.props.data;

        var tableHeaders =this.generateHeader(dataColumns);
        var tableBody = this.generareRows(dataRows, dataColumns);


        return (<table className="table table-bordered table-hover" width="100%">
            {tableHeaders}
            {tableBody}
        </table>)

    }
}

