<template>
  <div id="app">
    <div>
      <input type="text" v-model="model.name" placeholder="Nume">
    </div>
    <div>
      <button :disabled="!model.name" @click="add()">Add</button>
    </div>
    <div>
      <table v-if="items.length" cellpadding="16" cellspacing="0" border="1">
        <tr>
          <td>Nr</td>
          <td>Nume</td>
          <td></td>
        </tr>
        <tr
          :style="{background: selectedRow === index ? 'blanchedalmond': ''}"
          @mouseover="selectRow(index)"
          :key="index"
          v-for="(item, index) in items"
        >
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>
            <button @click="deleteRow(index)">X</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    model: {
      name: ''
    },
    items: [],
    selectedRow: null
  }),

  methods: {
    add () {
      this.items.push({ ...this.model })
      this.reset()
    },
    reset () {
      this.model = {
        name: '',
        price: '',
        quantity: ''
      }
    },
    deleteRow (index) {
      this.items.splice(index, 1)
    },
    selectRow (index) {
      this.selectedRow = index
    }
  }
}
</script>

<style scoped>
#app {
  width: 600px;
  margin: 50px auto;
}

div,
select,
input,
button
{
  width: 100%;
  min-height: 32px;
  margin-bottom: 16px;
}

</style>
