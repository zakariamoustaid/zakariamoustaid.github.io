'use strict';

//set language to default value if the page is been reloaded
if (window.performance.navigation)
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