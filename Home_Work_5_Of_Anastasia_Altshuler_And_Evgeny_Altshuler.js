"use strict"

//************************************************************************************************
// HOME WORK №5 OF ANASTASIIA ALTSHULER 
// AND EVGENY ALTSHULER 
/*************************************************************************************************/

/********************************HWTask#1+HWTask#2******************************/
//Selected the all needed elements from html file
const hwTask1 = document.getElementById('hoverBox')
//set up of function
function HWTask1()
{//Change the backgroundColor when mouse on box
  hwTask1.style.backgroundColor ='yellow';
}
function resetHWTask1()
{//Change the backgroundColor when mouse out of box
  hwTask1.style.backgroundColor = 'gray';
}

/***********************************************************************/


/********************************HWTask#3******************************/
//Selected the all needed elements from html file
const spanHWTask3 = document.getElementById('clickCount')
//Added new variable for sum of click count
let count = 0;
//set up of function
function countOfClick()
{
  count += 1//Each time you press it will add 1
  spanHWTask3.textContent = count;//Change the text contect to value of the count
}
/***********************************************************************/


/********************************Task#1******************************/
//Selected the all needed elements from html file
const task1 = document.getElementById('task1')
const button1 = document.getElementById('button1')
//Set up the function
function colorChange()
{//if color of text already blue i changed color to black text of button
  if (task1.style.color === 'blue')
  {
    task1.style.color ='black'
    button1.textContent ="Click to Change Color to Blue"
  }
  else//if color of text is blask i changed color to blue and text of button
  {
  task1.style.color='blue';
  button1.textContent = "Click to Change Color to Black"
}
}

/***********************************************************************/


/********************************Task#2******************************/
//Added additional element with what i will work in the function
const button2 = document.getElementById('button2')
//Set up the function
function hideTitle()
{//if display of text is block i changed display to none and change the text of button
  if (task1.style.display === 'block') 
    {
    task1.style.display = 'none';
    button2.textContent = "Click to show the title"
  }
  else {//if display of text is none i changed display to block and change the text of button
    task1.style.display = 'block';
    button2.textContent = "Click to Hide the title"
  }
}
/***********************************************************************/


/********************************Task#3******************************/

//Added additional element with what i will work in the function
let textForChange = document.getElementById('anotherText')
function changeText()
{//Changetext when user click on it
  textForChange.textContent='Text changed!'
}

/***********************************************************************/


/********************************Task#4******************************/
//Added additional element with what i will work in the function
const task4 = document.getElementById('task4')
const buttontask4 = document.getElementById('task4Button')
//Set up the function
function hidetexttask4()
{//if display of text is block i changed display to none and change the text of button
  if (task4.style.display === 'block') {
    task4.style.display = 'none';
    buttontask4.textContent = "Show the text"
  }
  else {//if display of text is none i changed display to block and change the text of button
    task4.style.display = 'block';
    buttontask4.textContent = "Hide the text"
  }
}

/***********************************************************************/


/********************************Task#5******************************/
//Added additional element with what i will work in the function
const clorboxTask5 = document.getElementById('colorBox')
//Set up the functions
function changeColor()
{//Change the backgroundColor
  clorboxTask5.style.backgroundColor = "red"
}
function resetColor()
{//Reset the color
  clorboxTask5.style.backgroundColor = null;
}

/***********************************************************************/
