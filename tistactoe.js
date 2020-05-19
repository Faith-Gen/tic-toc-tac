$(document).ready(e => {
    var items = [
        ['X', '', '0'],
        ['', '', ''],
        ['', '', ''],
    ];

    var rowPairs = {
        0: '.first-row',
        1: '.second-row',
        2: '.third-row',
    }


    function fillRow(row, rowIndex) {
        $('* ' + row + ' .square').each(function (index) {
            $(this).text(items[rowIndex][index])
            $(this).click(e => {
                let currentValue = items[rowIndex][index]
                if (currentValue === '0' || currentValue === '') items[rowIndex][index] = 'X'
                else items[rowIndex][index] = '0'

                fillRow(rowPairs[rowIndex], rowIndex)
            })
        })
    }

    function initBoxClicks(row, rowIndex) {
        $('* ' + row + ' .square').each(index => {
            console.log(index)
            $(this).click(e => {
                let currentValue = items[rowIndex][index]
                if (currentValue === '0' || currentValue === '') items[rowIndex][index] = 'X'
                else items[rowIndex][index] = '0'

                renderDrawing()
            })
        })
    }

    function renderDrawing() {
        fillRow('.first-row', 0);
        fillRow('.second-row', 1);
        fillRow('.third-row', 2)
    }

/*    initBoxClicks('.first-row', 0)
    initBoxClicks('.second-row', 1)
    initBoxClicks('.third-row', 2)*/
    renderDrawing()
})
