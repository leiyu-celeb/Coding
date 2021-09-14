class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }
    get(key) {
        if(this.cache.has(key)){
            let temp = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, temp);
            return temp;
        }else{
            return -1;
        }
    }

    put(key, value) {
        if(this.cache.has(key)){
            this.cache.delete(key);
        }else if(this.cache.size === this.capacity){
            this.cache.delete(this.cache.keys().next().value);   //根据ES6 Map的key值有序性，删除第一个加入Map的key
        }
        this.cache.set(key, value);
    }
}


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