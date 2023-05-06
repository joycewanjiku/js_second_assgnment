let people=[
    {name: 'Annh',age:20,height:"3ft"},
    {name:'Hennry',age:30,height:"7ft"},
    {name:'Jane',age:40,height:"6ft"},
  
  


]
    
// 
let ages=people.map(item=>item.age);
console.log({age});

// addation of propertys
let weights=people.map(item=>{
    return{
        ...item,
    }

})
console.log({weights});
// changing wight
let changeweight=weights.map(item=>{
    if(item.name=='Annh'){
        item.weights=60;

    }
    return item
});
console.log({changeweight});