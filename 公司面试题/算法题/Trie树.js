class Trie {
    constructor() {
        this.root = Object.create(null);
    }
    insert(word) {
        let node = this.root;
        for(const c of word){
            if(!node[c]) node[c] = Object.create(null);
            node = node[c];
        }
        node.isWord = true;
    }
    traverse(word) {
        let node = this.root;
        for(let c of word){
            node = node[c];
            if(!node) return null;
        }
        return node;
    }
    search(word){
        let node = this.traverse(word);
        return !!node && !!node.isWord;
    }
    startsWith(prefix) {
        return !!this.traverse(prefix);
    }
}

