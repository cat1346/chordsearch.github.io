window.onload = function () {
chord();
};

//select監聽
document.addEventListener('change',chord,false);

	function chord(){

var w = 0;
var b = 0;
while(w < 21){
document.getElementsByClassName('whitekey')[w].style["background-color"] = 'white';
w++;
}
while(b < 15){
document.getElementsByClassName('blackkey')[b].style["background-color"] = 'black';
b++;
}

//取得每一個值	
var accidental = document.getElementById("accidental").value;
var tonic = document.getElementById("tonic").value;
var attributes = document.getElementById("attributes").value;
var chordtype = document.getElementById("chordtype").value;

	var ontonic = document.getElementById("onaccidental").value;
	var ontonic = document.getElementById("ontonic").value;


//根音
if(tonic == 'C'){
tonic = 1;
var div2 = 'C';
}
else if(tonic == 'D'){
tonic = 3;
var div2 = 'D';
}
else if(tonic == 'E'){
tonic = 5;
var div2 = 'E';
}
else if(tonic == 'F'){
tonic = 6;
var div2 = 'F';
}
else if(tonic == 'G'){
tonic = 8;
var div2 = 'G';
}
else if(tonic == 'A'){
tonic = 10;
var div2 = 'A';
}
else{
tonic = 12;
var div2 = '';
};

//升降記號
if(accidental == '×'){
tonic = tonic;
var div1 = '';
}
else if(accidental == '♭'){
tonic -= 1;
var div1 = '♭';
} 
else{
tonic += 1;
var div1 = '♯';
};
//降C 根音
if(tonic == 0){
tonic = 12;
}
//和弦屬性
if(attributes == 'major(M、Δ)'){
note1 = tonic;
note2 = note1 + 4;
note3 = note2 + 3;
note4 = note3 + 4;
note5 = note4 + 3;
note6 = note5 + 3;
note7 = note6 + 4;
var div3 = 'M';
//alert(note1+'-'+note2+'-'+note3+'-'+note4+'-'+note5+'-'+note6+'-'+note7+'-')
}
else if(attributes == 'minor(m、-)'){
note1 = tonic;
note2 = note1 + 3;
note3 = note2 + 4;
note4 = note3 + 3;
note5 = note4 + 4;
note6 = note5 + 3;
note7 = note6 + 4;
var div3 = 'm';
}
else if(attributes == 'dominant(dom)'){
note1 = tonic;
note2 = note1 + 4;
note3 = note2 + 3;
note4 = note3 + 3;
note5 = note4 + 4;
note6 = note5 + 3;
note7 = note6 + 4;
var div3 = '';
}
else if(attributes == 'minor/major(mM)'){
note1 = tonic;
note2 = note1 + 3;
note3 = note2 + 4;
note4 = note3 + 4;
note5 = note4 + 3;
note6 = note5 + 3;
note7 = note6 + 4;
var div3 = 'Mm';
}
else if(attributes == 'aug(+)'){
note1 = tonic;
note2 = note1 + 4;
note3 = note2 + 4;
note4 = note3 + 3;
note5 = note4 + 3;
note6 = 99;
note7 = 99;
var div3 = '+';
}
else if(attributes == 'dim(o)'){
note1 = tonic;
note2 = note1 + 3;
note3 = note2 + 3;
note4 = note3 + 3;
note5 = note4 + 5;
note6 = 99;
note7 = 99;
var div3 = 'o';
}
else{
note1 = tonic;
note2 = note1 + 3;
note3 = note2 + 3;
note4 = note3 + 4;
note5 = note4 + 4;
note6 = 99;
note7 = 99;
var div3 = 'ø';
};

//chordtype
if(chordtype == 3){
document.getElementById("key"+note1).style.backgroundColor = "red";
document.getElementById("key"+note2).style.backgroundColor = "red";
document.getElementById("key"+note3).style.backgroundColor = "red";
var div4 = '';
}
else if(chordtype == 7){
document.getElementById("key"+note1).style.backgroundColor = "red";
document.getElementById("key"+note2).style.backgroundColor = "red";
document.getElementById("key"+note3).style.backgroundColor = "red";
document.getElementById("key"+note4).style.backgroundColor = "red";
var div4 = '7';
}
else if(chordtype == 9){
document.getElementById("key"+note1).style.backgroundColor = "red";
document.getElementById("key"+note2).style.backgroundColor = "red";
document.getElementById("key"+note3).style.backgroundColor = "red";
document.getElementById("key"+note4).style.backgroundColor = "red";
document.getElementById("key"+note5).style.backgroundColor = "red";
var div4 = '9';
}
else if(chordtype == 11){
document.getElementById("key"+note1).style.backgroundColor = "red";
document.getElementById("key"+note2).style.backgroundColor = "red";
document.getElementById("key"+note3).style.backgroundColor = "red";
document.getElementById("key"+note4).style.backgroundColor = "red";
document.getElementById("key"+note5).style.backgroundColor = "red";
document.getElementById("key"+note6).style.backgroundColor = "red";
var div4 = '11';
}
else{
document.getElementById("key"+note1).style.backgroundColor = "red";
document.getElementById("key"+note2).style.backgroundColor = "red";
document.getElementById("key"+note3).style.backgroundColor = "red";
document.getElementById("key"+note4).style.backgroundColor = "red";
document.getElementById("key"+note5).style.backgroundColor = "red";
document.getElementById("key"+note6).style.backgroundColor = "red";
document.getElementById("key"+note7).style.backgroundColor = "red";
var div4 = '13';
};
/*
//sus
if(document.querySelector('input[name="sus"]:checked').value == '×'){
var div5 = '';
}
else if(document.querySelector('input[name="sus"]:checked').value == 2){
var div5 = 'sus2';
}
else if(document.querySelector('input[name="sus"]:checked').value == 4){
var div5 = 'sus';
}
else{
var div5 = 'sus24';
};
*/
//add
if(document.getElementById("addset").value == '×'){
var div6 = '';
}
else if(document.getElementById("addset").value == 2){
var addnote = tonic+2;
document.getElementById("key"+addnote).style.backgroundColor = "red";
var div6 = 'add2';
}
else if(document.getElementById("addset").value == 4){
var addnote = tonic+5;
document.getElementById("key"+addnote).style.backgroundColor = "red";
var div6 = 'add4';
}
else if(document.getElementById("addset").value == 6){
var addnote = tonic+9;
document.getElementById("key"+addnote).style.backgroundColor = "red";
var div6 = 'add6';
}
else if(document.getElementById("addset").value == 9){
var addnote = tonic+14;
document.getElementById("key"+addnote).style.backgroundColor = "red";
var div6 = 'add9';
}
else if(document.getElementById("addset").value == 11){
var addnote = tonic+17;
document.getElementById("key"+addnote).style.backgroundColor = "red";
var div6 = 'add11';
}
else{
var addnote = tonic+21;
document.getElementById("key"+addnote).style.backgroundColor = "red";
var div6 = 'add13';
};

















var chorddiv = document.getElementById("chorddiv");
chorddiv.innerHTML = div1+div2+div3+div4+div6

//函式結尾
}

/*
//播放
	function play(){
alert("play");


//函式結尾
}


//播放2
	function play2(){
alert("play2");


//函式結尾
}
*/

//清除
	function clearbutton(){
//document.getElementById("accidental").selectedIndex = '×'; 
location.reload();
}