//access the last element of an array
let arr1=[3,7,34,90,12]
let arr2=arr1[arr1.leghth =1]
console.log(arr2)
let arr3=[true,"green","where",12,56]
let arr4= arr3[arr3.leghth -1]
console.log(arr4)
//join to astring
const mypets=["cow","bird","snake","dog"]
console.log(mypets.join())

var arr5=[-5,9,5,3,2,-3,6,8,4,1]
let sorted=arr5.sort((a,b)=>a-b)
console.log(sorted)

//
var arry =["apple","mango","apple","orange","mango","mango"]
function exclude(arr){
    return arry.filter((item,
        index) =>arry.indexOf(item)===index);
}
console.log(exclude(arry));

//search for a word
let arr6=["the","way","x",4]
let names="we"
if(arr6.includes(names)){
console.log(names + "was found")

}
else{
    console.log("the search was not found")
}
//sort a string
let words ="sevink"
function ReverseString(str){
    return str.split('').reverse().join('')
}
