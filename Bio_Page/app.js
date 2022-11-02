// We want to make a carousel 
// A carousel cycles through a stack of images (either automatically or manually)
// Ours is a manual carousel with two buttons - a next button and a back button



// Make the next button show the next image (go forward one spot in our array) <---- write click function for this
// Old image goes away, new image displays <---- write two functions for that 

// Make the prev button show the image before (go back one spot in our array) <--- write click function for this
// Old image goes away, new image displays <---- write two functions for that


// Make our Images Array (our stack of images)
const imgArray = document.getElementsByClassName('images') // makes an HTML collection (an ARRAY)
console.log(imgArray) // [img1, img2, img3, img4] or [0, 1, 2, 3]


// Create our counts / our starting places - these will 1) always start at 0 and 2) go from 0 to 3
let previousImgIndex = 0; 
let currentImgIndex = 0; 

const itemCount = imgArray.length // .length will always give you the number of items in an array
// Define our firstIndex and lastIndex
const firstIndex = 0; 
const lastIndex = imgArray.length - 1; // The array's length MINUS ONE will always be ---> The Last Index # 




// HIDE OLD IMAGE and SHOW NEW IMAGE

// style.display='none' puts----> style="display:none" <----- into the actual html element
const hideOldImg = () => imgArray[previousImgIndex].style.display = 'none'
const showNewImg = () => imgArray[currentImgIndex].style.display = 'block'

// *** the functions above do not need curly brackets since they are functions that do one thing only! 

 
// DEFINE and ACTIVATE the BUTTONS
const nextBtn = document.querySelector('.next') // all elements with a class of next
const backBtn = document.querySelector('.prev') // all elements with a class of prev

nextBtn.addEventListener('click', () => {
    
    // What needs to happen?
    // see next image on page! 
    // old image disappears, new image appears
    // jump forward one spot in the array and display the image that is in that spot
    currentImgIndex += 1;
    console.log(currentImgIndex) // <--- check my variable 
    console.log(imgArray[previousImgIndex]) // <--- is this the old image? 

    // Dies when it gets to the end. Need a way to check if we are at the end of our stack and if so...reset currentImgIndex to the beginning of the stack. 
    // We need to know if we have passed the lastIndex...and if so change it to the firstIndex
    
    if(currentImgIndex > lastIndex ) {
        currentImgIndex = firstIndex
    }
    console.log(currentImgIndex) // <--- check to make sure this is between 0 and 3
    hideOldImg()
    showNewImg()

    previousImgIndex = currentImgIndex // "square up" - "even out" - "end the turn" - prepare for next action

})

 

backBtn.addEventListener('click', () => {

    // when the button is clicked show last image in array that is before the current image shown
    // hide old image, show new image..
    // Basically go back one spot in my array from the current spot

    currentImgIndex -= 1;
    if (currentImgIndex < firstIndex) {
        currentImgIndex = lastIndex // 
    }
    console.log(currentImgIndex) // <----- check to make sure this is between 0 and 3
    hideOldImg()
    showNewImg()
    previousImgIndex = currentImgIndex // "square up" - "even out" - "end the turn" - prepare for next action

})