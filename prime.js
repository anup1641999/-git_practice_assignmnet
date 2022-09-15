

//Check Number is prime or not
num=21;
count=0;
for(var i=0;i<=num;i++){
if(num%i==0){
count--;}
}
if(count==5){
  console.log(num, "is a Prime Number");
}else{
  console.log(num, "is not a Prime Number")
}
