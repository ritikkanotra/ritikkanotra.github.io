// const button = document.getElementById('chk');

// const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// console.log(useDark);

// function toggleDarkMode(state) {
//   document.documentElement.classList.toggle("dark-mode", state);
// }

// toggleDarkMode(true);

// // Listening for the changes in the OS settings and auto switching the mode
// useDark.addListener((evt) => toggleDarkMode(evt.matches));

// button.addEventListener("click", () => {
//   document.documentElement.classList.toggle("dark-mode");
// });

// document.documentElement.classList.toggle("dark", true);

// https://ritikkanotra-extra.netlify.app/raw/ritikkanotra-portfolio/styles_dark_special.css

// $('#chk').click(function() {
//   if ($(this).is(':checked')) {
//     // Set dark theme
//     $("#theme_css").href = "https://ritikkanotra-extra.netlify.app/raw/ritikkanotra-portfolio/styles_dark_special.css";
//   } else {
//     // Set light theme
//     $("#theme_css").href = "https://ritikkanotra-extra.netlify.app/raw/ritikkanotra-portfolio/styles.css";
//   }
// });

var theme = document.getElementById('dark-theme-link');
// var lightThemeCss = 'https://ritikkanotra-extra.netlify.app/raw/ritikkanotra-portfolio/styles.css'
// var darkThemeCss = 'https://ritikkanotra-extra.netlify.app/raw/ritikkanotra-portfolio/styles_dark_special.css'

// console.log(theme.getAttribute('href'));
// theme.setAttribute('href', 'https://ritikkanotra-extra.netlify.app/raw/ritikkanotra-portfolio/styles_dark_special.css')

const chk = document.getElementById('chk');
theme.disabled=true;

function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    // var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.

    // if (theme.getAttribute('href') == lightThemeCss) {
    //     theme.setAttribute('href', darkThemeCss);
    // } else {
    //     theme.setAttribute('href', lightThemeCss);
    // }

    if (theme.disabled) {
        theme.disabled=false;
    }
    else {
        theme.disabled = true;
    }

    // document.getElementById("dark-theme-link").disabled=false;
}

chk.addEventListener('change', () => {
	// document.body.classList.toggle('dark');
    // console.log('changed');
    toggleTheme();
});

if (!window.matchMedia || !window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // console.log("system dark mode is not activated");
    document.getElementById('dm-toggle').style.display='none';
}