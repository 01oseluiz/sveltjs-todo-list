import { writable } from 'svelte/store'

class Todos {

    constructor() {
        const todos = writable(this.getInitialState())
        this.todos = todos
        this.subscribe = todos.subscribe
        this.set = todos.set
        this.update = todos.update

        this.subscribe(this.persist)
    }

    persist(tds) {
        localStorage.setItem('todos', JSON.stringify(tds))
    }

    add() {
        this.todos.update(tds => tds.concat({
            title: '',
            done: false
        }))
    }

    remove(objRef) {
        this.todos.update(tds => tds.filter(td => td !== objRef))
    }

    getInitialState() {
        const tds = localStorage.getItem('todos')
        return tds ? JSON.parse(tds) : []
    }
}

export const todos = new Todos()