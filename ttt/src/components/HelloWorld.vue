<template>
  <div>
    <div id="root">

    </div>

    <div class="status">
      Next player: X
    </div>
    <div class="board">
      <div class="board-row first-row">
        <button class="square">
          X
        </button>
        <button class="square">

        </button>
        <button class="square">
          O
        </button>
      </div>

      <div class="board-row second-row">
        <button class="square">

        </button>
        <button class="square">

        </button>
        <button class="square">

        </button>
      </div>

      <div class="board-row third-row">
        <button class="square">

        </button>
        <button class="square">

        </button>
        <button class="square">

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
  }
}
</script>
