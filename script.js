function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    from = from;
    to = to;
    step = step || 1;
    document.write("<table border='1' cellspacing='0'>");
    for (var x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}
function quadratic(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}
let expr = prompt("input expression for function")
let f;
let functionStr = "f = function(x){return "+ expr + ";}";
eval(functionStr);
let start = +prompt("Enter number(From what we start)");
let finish = +prompt("Enter other number(To what we go)");
let interval = +prompt("Enter interval");
if(finish<=start|| interval >= finish-start)("Blbjn")
else printTable(start, finish, interval, f);