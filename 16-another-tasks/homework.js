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

    updateTask: function(id, updatedTask) {
        const taskIndex = this.findTask(id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = {...this.tasks[taskIndex], ...updatedTask};
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

const newTask = {
    tasks: [
        {
            id: 1,
            title: 'Помыть посуду',
            priority: 1,
            description: 'Описание'
        },
    ],

    findTask: toDoList.findTask,
    addTask: toDoList.addTask,
    updateTask: toDoList.updateTask,
    sortTasks: toDoList.sortTasks,
    deleteTask: toDoList.deleteTask,
};

newTask.addTask({title: 'qwe', priority: 5, description: '1234'});
toDoList.updateTask.call(newTask, 2, {title: 'update', priority: 5, description: 'test'})

console.log(newTask.tasks);