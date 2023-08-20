# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Screenshot](<images/Screenshot 2023-08-18 205324.png>)

![Screenshot](<images/Screenshot 2023-08-20 215921.png>)

![Screenshot](<images/Screenshot 2023-08-20 220101.png>)

![Screenshot](<images/Screenshot 2023-08-20 220127.png>)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Managing to use .classList has been helpful as it is one of those concepts i have been learning and it makes me very happy to finally put that knowledge to use.

```js
 if (circle.style.right === "3px"){
        circle.style.right = "26px";
        document.querySelector(".body").classList.toggle("dark-mode")
        document.querySelector(".body").classList.remove("light-mode")
    }
    else {
        circle.style.right = "3px";
        document.querySelector(".body").classList.toggle("light-mode")
        document.querySelector(".body").classList.remove("dark-mode")
    }
```

### Continued development

The only things I did not account for in this particular challange is:

- Storing the preferred 'theme' when reloading the website
There're a couple of resources i managed to find and they all mention localStorage(), so this is something to include in my following projects.

- When a user has disabled animations on his/her options
(Optional, but very benefiaciary in terms of learning accessibility)

## Author

- Frontend Mentor - [@NxumaloDev](https://www.frontendmentor.io/profile/NxumaloDev)
- Instagram - [@sarcasm_emoji](https://www.twitter.com/sarcasm_emoji)

## Acknowledgments

- FrontEnd Mentor