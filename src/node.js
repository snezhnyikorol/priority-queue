class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null || this.right == null) {
			if (this.left != null) {
				this.right = node;
				this.right.parent = this;
			} else {
				this.left = node;
				this.left.parent = this;
			}
		}	
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right == node) {
			this.right.parent = null;
			this.right = null;
		} else {
			throw "error: node does not exist";
		}
	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);	
		}
	}

	swapWithParent() {
		if (this.parent != null) {
			let child = this;
			let parent = this.parent;
			let isLeft = false;
			let anotherChild = null;
			if (this.parent.left = this) {
				isLeft = true;
			}
			if (isLeft) {
				anotherChild = parent.right;
				parent.right = child.right;
				parent.left = child.left;
				child.left = parent;
				child.right = anotherChild;
			} else {
				anotherChild = parent.left;
				parent.right = child.right;
				parent.left = child.left;
				child.left = anotherChild;
				child.right = parent;
			}
			child.parent = child.parent.parent;
			parent.parent = child;
			if (parent.left != null) {
				parent.left.parent = parent;
			}
			if (parent.right != null) {
				parent.right.parent = parent;
			}
			child.left.parent = child;
			if (child.right != null) {
				child.right.parent = child;	
			}
		}
	}
}

module.exports = Node;
