// לולאות while	צרו תכנית שמדפיסה את המספרים 2,1,....100 כל אחד בשורה	
// function nums(){
//     var i = 1;
//     while(i<=100) {
//         console.log(i);
//         i++;
// }
// }
// nums()


// צרו תכנית שקולטת 5 מספרים מהמשתמש, מחשבת סכום וממוצע ומדפיסה למסך את הערכים שלהם. בצע בעזרת לולאה
// var i = 0;
// var sum = 0;
// while(i<5){
//   var userName = +prompt("type a number")
//   sum+=userName;
//     i++;
// }   
// console.log(sum,sum/5)



// צרו תוכנית שמדפיסה את כל המספרים השלמים הזוגיים מ2-50.
// var i = 2;
// while(i<=50){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }


// לולאות while	צרו תוכנית שמדפיסה את כל המספרים השלמים מ1-50 בקפיצות של 3 כלומר 1,4,7,...	
// var i = 1;
// while(i<50){
//     if(i%3==1){
//         console.log(i);
//     }
//     i++;
// }



// לולאות while	צרו תוכנית המקבלת מהמשתמש מספר שלם ומחשבת עצרת. לדוגמא עבור 4 נקבל : 1*2*3*4 כלומר 24	
// function azeret(){
//     var num = +prompt("type a number");
//     var sum = 1;
//     while(1<=num){
//         sum*=num;
//         num--;
//     }
//     console.log(sum)
// }
// azeret()



// צרו תכנית אשר קולטת מהמשתמש חמישה מספרים ממשים ומחשבת את המנימום והמקסימום מבינהם ומדפיסה אותו.
// var user = +prompt("type a number");
// var i = 0
// var min = 0;
// var max = 0;
// while(i<5){

// }



// חזור על תרגילים 1-4 בלולאות while בעזרת לולאת for


// לולאות 	צרו תכנית שמדפיסה את המספרים 2,1,....100 כל אחד בשורה	
// for(var i = 0;i<100;i++){
//     console.log(i)
// }


// לולאות FOR	צרו תכנית שקולטת 5 מספרים מהמשתמש, מחשבת סכום וממוצע ומדפיסה למסך את הערכים שלהם. בצע בעזרת לולאה	
// var sum = 0
// for(var i = 0 ;  i<5 ; i++){
//     var user = +prompt("type a number");
//     sum+=user;
// }
// console.log(sum,sum/5);


// פונקציה שקולטת מהמשתמש מספר ומדפיסה את ספרותיו-לדוג:
// אם המשתמש מכניס 673 אז התכנית תדפיס לך 6,7,3
// function digiPrint(){
// var num = parseInt(prompt("type a number"))
// while(num/10 != 0){
//     var result = num % 10
//     num = (num-result) /10
//     console.log(result)
// }
// }
// digiPrint()


//צור מערך אקראי של מילים ומספרים שעוברת על המערך ומחליפה את המילים במילה "not a number"

// var array = [9,"some",8,"any"]
// for(var i = 0 ; i<array.length; i++){
//     if(array[i]*0 != 0){
//         array[i]="not a number"
//     }
//     console.log(array)
// }
// ---------------------------------------------------------------------------------------------



// צרו פונקציה המקבלת סטרינג ומדפיסה את התווים בשורות נפרדות
// ------------------------------------------
// function someFunc(){
//     var myWord = "hello"
//     for(var i = 0 ; i<myWord.length; i++)
//     console.log(myWord[i]);
// }
// someFunc();


// function someFunc(){
//     var myString = "hello world"
//     for(var i = 0 ; i<myString.length;i++){
//         console.log(myString[i])
//     }
// }
// someFunc();
// -----------------------------------------------



// פונקציה שמקבלת סטרינג ומחזירה סטרינג חדש שאחרי כל אות מופיעה האינדקס שלה
// NOT FINISH
// var myString = "my name is lior"; 
// function someString(justString){
    
//     var arraystr = "";
//     for(var i = 0 ; i<justString.length;i++){
//     arraystr += justString[i]
//     }
//     return arraystr
// }
// someString(myString);



// צור פונקציה המקבלת סטרינג ומחליפה כל תו במיקום הזוגי ל-2
// function someString(object){
//     var tempString = ""
//     for(var i = 0 ; i<object.length ; i++){
//         if(i%2==0){
//             tempString += "2"
//         }
//         else{
//             tempString += object[i]
//         }
        
//     }
//     return tempString
// }
// console.log(someString("hello presentation"));



