<template>
    <div>
        <div id="root">

        </div>

        <div class="status">
            Next player: X
        </div>
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
                ]
            }
        },
      methods:{
        updateBox(rowIndex, itemIndex, item){
          if(item === '0' || item.length === 0)
            this.items[rowIndex][itemIndex] = 'X'
          else this.items[rowIndex][itemIndex] = '0'

          this.items = JSON.parse(JSON.stringify(this.items))
        }
      }
    }
</script>
