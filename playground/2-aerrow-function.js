// const square = function(x){
//     return x*x;
// }

const square = (x)=>{
    return x*x
}
console.log(square(3));

const event = {
    name : 'Birthday Party',
    guestList : ['Meet' , 'Khush' , 'Dharmik' , 'Krish' , 'Jay'],
    printList(){
        this.guestList.forEach(guest => {
            console.log(guest + " is attending " + this.name);
        });
    }
}
event.printList();
