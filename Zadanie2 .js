class BST {
		static Node = class {
		constructor(key,parent = null,left = null, right = null) {
			this.key = key
			this.parent = parent
			this.left = left
			this.right = right
		}
	}
		#root = null
		#lastNode = null
		#previousDirection = null
		add(key) {
			if(this.#root == null){
				this.#root = new BST.Node(key)
				return true
			}
			if(this.contains(key) != null)
				return false
			
			this.#lastNode[this.#previousDirection] = new BST.Node(key, this.#lastNode)
		}
		contains(key) {
			let node = this.#root
			while(node != null) {
				if(node.key == key)
					break;
				this.#lastNode = node
				if(node.key > key)
					this.#previousDirection = `left`
				else
					this.#previousDirection = `right`
	
				node = node[this.#previousDirection]
		}
	}
}