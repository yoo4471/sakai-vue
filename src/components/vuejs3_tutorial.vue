<template>
  <div class="grid">
    <div class="col-12">

      <div class="card">
        <h5>Increment Count</h5>
        <button @click="increment">
          Count is: {{ count }}
        </button>
      </div>

      <div class="card">
        <h5>Reverse Message</h5>
        <button @click="reverseMessage">
        Reverse Message
        </button>
        <p>{{ message }}</p>
      </div>

      <div class="card">
        <h5>v-model (양방향 바인딩)</h5>
        <p>{{ message }}</p>
        <input v-model="message" />
      </div>

      <div class="card">
        <h5>v-if</h5>
        <p v-if="seen">{{ message }}</p>
        <button @click="isSeen(true)">
        Click to show.
        </button>
        <button @click="isSeen(false)">
        Click to hide.
        </button> 
      </div>

      <div class="card">
        <h5>v-for</h5>
        <ol>
          <li v-for="todo in todos" v-bind:key="todo">
            {{ todo.text }}
          </li>
        </ol>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      count: 0,
      message: 'Hello Vue.js!',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    },

    increment() {
      this.count++
    },

    isSeen(seen) {
      if(seen == true)
        this.seen = true
      else
        this.seen = false
    }
  }
}
</script>
