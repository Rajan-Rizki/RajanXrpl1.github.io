let operator = prompt("Berapakah nilai UTS anda?", 0);

if(operator <= 66){
    document.write("F-")
}else if (operator <= 75){
    document.write("F")
}else if (operator <= 80){
    document.write("E")
}else if (operator <= 85){
    document.write ("D")
}else if (operator <= 90){
    document.write ("C")
}else if (operator <= 95){
    document.write ("B")
}else if (operator <= 99){
    document.write("A")
}

if (operator < 0 || operator > 99)
document.write("erorr")