# Polymer test 

## How to run

Test 1
```$xslt
$cd test1
$yarn install
$yarn run

hop on to localhost:3000
```
Test 1 Files: 

    App.js
    Compoents/Table.js
    data/sampledata.js
Functionality completed:

1. Table and Grid created using HTML table elements
2. Statues are indicated with appropriate color
 
TODOs: 
1. Change of status
2. Sort and Bold

Test 2
```$xslt
$cd test2
$yarn install
$yarn run

hop on to localhost:3000
```

Test 2 Files

    App.js
    component/Grid.js
    
Functionality completed: 

1. Able to trace back the reference on the grid
2. Error if no data found on backreference

TODOs: 
1. Trimming the backreference
2. Validation


Template used: 

1. create-react-app
2. lodash - to access the objects keys easily
3. ReactDataSheet to used as a grid in test2 for easy manipulation of data
4. bootstrap for styling