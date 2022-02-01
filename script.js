'use strict';

//language 0 = it; language 1 = en

function sLanguage(selection)
{
    if(selection.selectedIndex === 1)
    {
        document.querySelector('.it').style.display = 'none';
        document.querySelector('.en').style.display = 'flex';
    }
    else
    {
        document.querySelector('.it').style.display = 'block';
        document.querySelector('.en').style.display = 'none';
    }

}