const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1
        },
    ],

    findTask: function(id) {
        return this.tasks.findIndex(obj => obj.id === id);
    },

    addTask: function(title, priority) {
        this.tasks.push({
            title,
            id: this.tasks.length + 1,
            priority
        });
    },

    updateTask: function(id, title, priority) {
        const taskIndex = this.findTask(id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1, {title, id, priority});
        }
    },

    deleteTask: function(id) {
        const taskIndex = this.findTask(id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
        }
    },

    sortTasks: function() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }

};

toDoList.addTask('test', 40);
toDoList.addTask('test2', 2);
toDoList.updateTask(3, 'UPDATE', 10);
console.log(toDoList.tasks);
toDoList.sortTasks();
console.log(toDoList.tasks);



