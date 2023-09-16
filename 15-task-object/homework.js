const toDoList = {
    tasks: [
        {
            id: 1,
            title: 'Помыть посуду',
            priority: 1
        },
    ],

    findTask: function(id) {
        return this.tasks.findIndex(obj => obj.id === id);
    },

    addTask: function(task) {
        this.tasks.push({
            id: this.tasks.length + 1,
            ...task
        });
    },

    updateTask: function(id, task) {
        const taskIndex = this.findTask(id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1, { id, ...task });
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

toDoList.addTask({ title: 'test', priority: 40 });
toDoList.addTask({ title: 'test2', priority: 10 });
toDoList.updateTask(3, { title: 'UPDATE', priority: 10});
console.log(toDoList.tasks);
toDoList.sortTasks();
console.log(toDoList.tasks);
console.log(toDoList.tasks);



