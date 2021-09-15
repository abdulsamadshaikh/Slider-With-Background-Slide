/*  
Project Name: Slider With Background Slide
Description: Full body background slider. Get to know about your favorite movie. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Version: 1.0
Tags: Mobile-friendly, All-Devices-Supported. 
*/

const slideBg = document.querySelector('.container')
const slides = document.querySelectorAll('.slide')
const leftArrow = document.getElementById('left')
const rightArrow = document.getElementById('right')

let activeSlide = 0

const getInterbalTime =  setInterval( function() { 
        activeSlide++

        if (activeSlide > slides.length - 1) {
            activeSlide = 0
        }

        setBgToBack()
        setActiveSlide()
    }, 3000)

rightArrow.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBack()
    setActiveSlide()
})

leftArrow.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBack()
    setActiveSlide()
})

function setBgToBack() {
    slideBg.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
setBgToBack()

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
        slide.addEventListener('mouseover', () => clearInterval(getInterbalTime))
    })

    slides[activeSlide].classList.add('active')
}