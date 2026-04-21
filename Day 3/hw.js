const student = {
  name: "Anuj",
  age: 20,
  marks: [10, 15, 30]
};

function calculateAvg(marks){
    let sum=0;
    for(let i=0;i<marks.length;i++){
        sum+=marks[i]
    }
    return sum/marks.length
}

const avg=calculateAvg(student.marks)
console.log("Average Marks ",avg);

if(avg>=50){
    console.log(student.name +" Pass");
    
}else{
    console.log(student.name +" Fail");
}
