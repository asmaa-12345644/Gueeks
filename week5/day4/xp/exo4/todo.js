export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    add(task) {
      this.tasks.push({ task, done: false });
    }
  
    complete(index) {
      if (this.tasks[index])
         this.tasks[index].done = true;
    }
  
    list() {
      this.tasks.forEach((t, i) => {
        console.log(`${i + 1}. ${t.done ? "✅ " : "❌ "} ${t.task}`);
      });
    }
  }
  