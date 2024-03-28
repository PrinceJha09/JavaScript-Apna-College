let items=[250,645,300,900,50];
let idx =0;
for(let val of items){
    items[idx] = 0.9*val;
    idx++;
}
console.log(items);