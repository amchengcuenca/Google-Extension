/* eslint-disable prettier/prettier */
// ideas for highlighter
// wrap the selected text with a span tag and have that default to yellow in css
// user can select the color they wanna highlight in
// user can select if they want to bold/italicize the selected text
// window.getSelection().toString()

// potential features: read highlighted text out loud
// define highlighted words
// 
// const isBolded = document.querySelector('')
/*
var range = window.getSelection().getRangeAt(0);
var selectionContents = range.extractContents();
var div = document.createElement("div");
div.style.color = "blue";
div.appendChild(selectionContents);
range.insertNode(div);
*/

// current issues, unable to access the options in our popup
// unable to save the state of our popup, closing it goes back to original state

document.addEventListener('DOMContentLoaded', () => {
    // press up
    // document.addEventListener('mouseup', () => {
    //     // this is to check if user actually highlighted, not just clicking a button or anything else
    //     if (window.getSelection()) {
    //         let range = window.getSelection().getRangeAt(0);
    //         let content = range.extractContents();
    //         // console.log('content is: ', content)
    //         // make a span element <span> </span> 
    //         let span = document.createElement('span');
    //         span.style.backgroundColor = 'yellow';
    //         span.appendChild(content);
    //         range.insertNode(span);
    //     } 
    // })


    // saving popup state to local storage
    // const color = document.getElementById("color").value;
    // const italics = document.getElementById("italics").checked;
    // const bold = document.getElementById("bold").checked;
    // const underline = document.getElementById("underline").checked;
    // chrome.storage.local.set({
    //     'popupState': {
    //       'color': color,
    //       'italics': italics,
    //       'bold': bold,
    //       'underline': underline
    //     }
    //   }, function() {
    //     console.log('State saved');
    //   });

    // chrome.storage.local.get(['popupState'], function(result) {
    //     const popupState = result.popupState;
    //     document.getElementById("color").value = popupState.color;
    //     document.getElementById("italics").checked = popupState.italics;
    //     document.getElementById("bold").checked = popupState.bold;
    //     document.getElementById("underline").checked = popupState.underline;
    // })
})

// const selectedColor = document.getElementById('color')
// const color = selectedColor.value
// const isBolded = document.getElementById('bold').checked

// const isItalicized = document.getElementById('italics').checked

// const isUnderlined = document.getElementById('underline').checked

// doesn't need to be inside DOMContent loaded because functionality can work with anything on screen
document.addEventListener('mouseup', () => {
    // this is to check if user actually highlighted, not just clicking a button or anything else
    if (window.getSelection()) {
        let range = window.getSelection().getRangeAt(0);
        let content = range.extractContents();
        // console.log('content is: ', content)
        // make a span element <span> </span> 
        let span = document.createElement('span');
        span.style.backgroundColor = 'yellow';
        if (isBolded) {
            span.style.fontWeight = 'bold';
        }
        if (isItalicized) {
            span.style.fontStyle = 'italic'
        }
        if (isUnderlined) {
            span.style.textDecoration = 'underline'
        }
        span.appendChild(content);
        range.insertNode(span);
    } 
})

