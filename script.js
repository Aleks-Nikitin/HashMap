class HashMap{
    constructor(){
        this.loadFactor = 0.6;
        this.capacity = 16;
        this.storage = new Array(this.capacity);
    }
    check(){
            let previousEntries = this.entries();
            this.clear();
            this.capacity = this.capacity * 2;
            this.storage = new Array(this.capacity);
            previousEntries.forEach(key =>{
                this.set(key[0],key[1]);
            });

          
        
    }
    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i<key.length; i++){
            hashCode = hashCode*primeNumber + key.charCodeAt(i);
        }
        return hashCode;
    }
    set(key,value){
        let num = Number(this.length());
        if(this.capacity *this.loadFactor < (num+1)) {
            this.check();
        }
        let index =this.hash(key)%this.capacity;
        if (index < 0 || index >= this.storage.length) {
        throw new Error("Trying to access index out of bounds");
        }
        this.storage[index] = {[key]:value};

    }
    get(key){
        let val=this.storage[this.hash(key)% this.capacity][key];
        if(val){
            return val
        }else{
            return null
        }
    }
    has(key){
        return (Object.keys(this.storage[(this.hash(key)% this.capacity)])).includes(key) ? true : false;
        
    }
    remove(key){
        if(this.has(key)){
            this.storage[(this.hash(key)% this.capacity)]= new Array();
            return true
        }
        return false
    }
    length(){
        let sum=0;
        for (const element of this.storage) {
            if(element && element !=''){
                sum++
            }
        }
        return sum
    }
    clear(){
       this.storage = new Array(this.capacity);
    }
    keys(){
        let sum=[];
        for (const element of this.storage) {
            if(element && element !=''){
                sum.push((Object.keys(element)).toString());
            }
        }
        return sum
    }
    values(){
        let sum =[]
        for (const element of this.storage) {
            if(element && element !=''){
                sum.push((Object.values(element)).toString());
            }
        }
        return sum
    }
    entries(){
        let entryArr =[];
        let counter=0;
        for (const element of this.storage) {
            if(element && element !=''){
                entryArr[counter]=[];
                entryArr[counter][0]=((Object.keys(element)).toString());
                entryArr[counter][1]=((Object.values(element)).toString());
                counter++;
            }
        }
        counter=0;
        return entryArr;
    }

}

let bob = new HashMap();

