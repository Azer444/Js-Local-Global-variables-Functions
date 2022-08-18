//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
let n = 21;
divided(n)
function divided(n) {
    if (n % 3 == 0 && n % 7 == 0) {
        console.log("Bolunur")
    } else {
        console.log("Bolunmur");
    }
}


//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

let num = 5;
let fact = 1;
factorial(num);
function factorial(num) {
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    console.log(fact)
}


//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

let nums = [1, 2, 3, 4, 5];
sum(nums)
function sum(num) {
    let squareSum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            squareSum += Math.pow(num[i], 2)
        }
    }
    console.log(squareSum);
}


//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

let email;
let password;

login("Azerrh@code.edu.az","Necesen123" );

function login(email,password){
    if(email == "Azerrh@code.edu.az" && password =="Necesen123"){
        console.log("Girish olundu");
    }else{
        console.log("Sehvdir");
    }
    
}

//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.



let arr = [1,2,3,4,5,6,7,8,9,10];
oddNums(arr);
function oddNums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 ==1){
            sum+=i;
        }   
    }
    console.log(sum);
}

//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.



let array = [1,2,3,4,5,6,7,8,9,10];
evenNums(array);
function evenNums(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 ==1){
            count++;
        }   
    }
    console.log(count);
}
