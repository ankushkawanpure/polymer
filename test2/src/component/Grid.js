import React, {Component}from 'react';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

export default class Grid extends Component {
    constructor (props) {
        super(props);
        // Grid stored as state
        this.state = {
            grid: [
                [
                    {readOnly: true, value: ''},
                    {value: 'A', readOnly: true},
                    {value: 'B', readOnly: true},
                    {value: 'C', readOnly: true},
                    {value: 'D', readOnly: true},
                    {value: 'E', readOnly: true},
                ],
                [{width: 75, readOnly: true, value: 1}, {width: 75, value: ""}, {width: 75, value: ""}, {width: 75, value: ""}, {width: 75, value: ""}, {width: 75, value: ""}],
                [{readOnly: true, value: 2}, {value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}],
                [{readOnly: true, value: 3}, {value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}],
                [{readOnly: true, value: 4}, {value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}],
                [{readOnly: true, value: 5}, {value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}],
            ]
        }
    }


    render () {

        // Dictionary to String indexes to int
        const dictRev = {"A": "1", "B": "2", "C": "3","D": "4", "E": "5" };


        // Function to convert String index to int
        const convertStringToIndex = (str) => {
            if (str.length === 2 && dictRev[str.charAt(0) + ""] !== undefined) {
                let col = dictRev[str.charAt(0) + ""];
                let row = str.charAt(1);
                console.log(col + " : " + row);
                return [row, col];
            }

            return [-1, -1];
        };

        // Function to handle changes to the grid
        const handleGridchange = (changes) => {

            const grid = this.state.grid.map(row => [...row]);
            changes.forEach(({cell, row, col, value}) => {
                grid[row][col] = {...grid[row][col], value};
                let arr = convertStringToIndex(value);
                if(arr[0] !== -1) {
                    let row1 = arr[0];
                    let col1 = arr[1];
                    let s = value;
                    if(grid[row1][col1].value !== "") {
                        s = s +"\n"+grid[row1][col1].value;
                    }else{
                        s = s +"\n"+"(Error)";
                    }
                    grid[row][col].value = s;
                    //console.log();
                }
                // console.log(row + " " + col + " " + value);
            })
            this.setState({grid})
        }

        return (

            //React data sheet grid component for easy handling to grid data
            <ReactDataSheet
                data={this.state.grid}
                valueRenderer={(cell) => cell.value}
                onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
                onCellsChanged={handleGridchange}
            />
        )
    }
}