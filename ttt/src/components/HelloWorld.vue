<template>
    <div>
        <div id="root">

        </div>

        <div class="status">
            Next player: X
        </div>
        <button @click="undoLastMove">
            Undo last move
        </button>
        <div class="board">
            <div class="board-row first-row" v-for="(row, rowIndex) in items">
                <button class="square" v-for="(item, itemIndex) in row" @click="updateBox(rowIndex, itemIndex, item)">
                    {{ item }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                items: [
                    ['X', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
                itemsStack: []
            }
        },
        methods: {
            updateBox(rowIndex, itemIndex, item) {
                if (item === '0' || item.length === 0)
                    this.items[rowIndex][itemIndex] = 'X'
                else this.items[rowIndex][itemIndex] = '0'

                this.items = JSON.parse(JSON.stringify(this.items))

                this.itemsStack.push(this.items)

                this.checkIfUserWon()
            },
            checkIfUserWon() {
                let won = false
                //horizontal check
                if (this.checkRows(this.items))
                    return alert('You won!')

                //vertival check
                let verticalArray = []
                this.items.forEach((row, index) => {
                    verticalArray.push([
                        this.items[0][index],
                        this.items[1][index],
                        this.items[2][index],
                    ])
                })

                if (this.checkRows(verticalArray))
                    return alert('You won!')

                //diagonal checks
                let diagonalArray = [
                    [this.items[0][0], this.items[1][1], this.items[2][2]],
                    [this.items[2][0], this.items[1][1], this.items[0][2]],
                ]
                if (this.checkRows(diagonalArray))
                    return alert('You won!')
            },
            checkRows(rows) {
                let won = false
                rows.forEach(row => {
                    let uniqueValues = [...new Set(row)]
                    if (uniqueValues.length === 1 && (uniqueValues[0] === 'X' || uniqueValues[0] === '0'))
                        won = true
                })
                return won
            },
            undoLastMove() {
                if (this.itemsStack.length === 1) {
                    return alert('You are back to the start')
                }
                this.itemsStack.pop()
                this.items = JSON.parse(JSON.stringify(this.itemsStack[this.itemsStack.length - 1]));
                console.log(this.items)
            }
        },
        created() {
            this.itemsStack.push(this.items)
        }
    }
</script>
