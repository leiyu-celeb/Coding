//双向链表
class DoubleLinkedListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        // Mappings of key->node.
        this.hashmap = {};
        // Use two dummy nodes so that we don't have to deal with the head/tail seperately.
        this.dummyHead = new DoubleLinkedListNode(null, null);
        this.dummyTail = new DoubleLinkedListNode(null, null);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    _isFull() {
        return Object.keys(this.hashmap).length === this.capacity;
    }

    _removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
        return node;
    }

    _addToHead(node) {
        const head = this.dummyHead.next;
        node.next = head;
        head.prev = node;
        node.prev = this.dummyHead;
        this.dummyHead.next = node;
    }

    get(key) {
        if (key in this.hashmap) {
            const node = this.hashmap[key];
            this._addToHead(this._removeNode(node));
            return node.value;
        } else {
            return -1;
        }
    }

    put(key, value) {
        if (key in this.hashmap) {
            // If key exists, update the corresponding node and move it to the head.
            const node = this.hashmap[key];
            node.value = value;
            this._addToHead(this._removeNode(node));
        } else {
            // If it's a new key.
            if (this._isFull()) {
                // If the cache is full, remove the tail node.
                const node = this.dummyTail.prev;
                delete this.hashmap[node.key];
                this._removeNode(node);
            }
            // Create a new node and add it to the head.
            const node = new DoubleLinkedListNode(key, value);
            this.hashmap[key] = node;
            this._addToHead(node);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


 var LRUCache = class {

    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let cache = this.cache;
        if (cache.has(key)) {
            let temp = cache.get(key)
            cache.delete(key);
            cache.set(key, temp);
            return temp;
        } else {
            return -1;
        }
    };

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let cache = this.cache;
        if (cache.has(key)) {
            cache.delete(key);
        } else if (cache.size >= this.capacity) {
            cache.delete(cache.keys().next().value);
        }
        cache.set(key, value);
    };
};


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();          //用ES6 Map作为LRU缓存的数据结构
    this.capacity = capacity;        //初始化缓存容量
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){      //缓存中含有key
        let temp = this.cache.get(key);        
        this.cache.delete(key);             //先delete，再set
        this.cache.set(key, temp);
        return temp;
    }else{
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){              //缓存中已经存在该key
        this.cache.delete(key)             //
    }else if(this.cache.size === this.capacity){         //如果此时容量已达上限
        this.cache.delete(this.cache.keys().next().value);            //删除第一个加入的key (ES6 Map key的有序性)，也就是最久未使用的key
    }
    this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


