class LinkedList {
    constructor() {
        this.first = null
    }
    AddFirst(data) {
        this.first = {
            data: data,
            next: this.first
        }
    }
    RemoveFirst() {
        let oldNode = this.first
        if(oldNode == null)
            return undefined
        this.first = oldNode.next
        return oldNode.data
    }
    AddLast(data) {
        let neww = { 
			data: data, 
			next: null }
        if (this.first === null) {
            this.first = neww
            return
        }

        let last = this.first
        while (last.next !== null) {
            last = last.next
        }

        last.next = neww
        last = neww
    } 
}