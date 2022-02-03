'use strict';

//set language to default value if the page is been reloaded
if (window.performance)
{
    document.getElementsByClassName('selectLanguage')[0].selectedIndex = 0;
}

function sLanguage(selection)
{
    if(selection.selectedIndex === 1)
    {
        document.querySelector('.it').style.display = 'none';
        document.querySelector('.en').style.display = 'block';
    }
    else
    {
        document.querySelector('.it').style.display = 'block';
        document.querySelector('.en').style.display = 'none';
    }
}

function buttonRed()
{
    document.querySelector('.buttonDestroy').style.backgroundColor = 'red';
    document.querySelector('.explode').style.display = 'block';
}
function buttonWhite()
{
    document.querySelector('.buttonDestroy').style.backgroundColor = 'white';
    document.querySelector('.explode').style.display = 'none';
}

function stopAll()
{
    alert('Stoooop!!');

}

function getStarted()
{
    let intervalId = setInterval(buttonRed, 100);
    let intervalId2 = setInterval(buttonWhite, 150);

    setTimeout(function() {
        alert('Stoooop!!!');
        clearInterval(intervalId); clearInterval(intervalId2);
        document.querySelector('.buttonDestroy').style.backgroundColor = 'white';
        document.querySelector('.explode').style.display = 'none';
    }, 2500);
}