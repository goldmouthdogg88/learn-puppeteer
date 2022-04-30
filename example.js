const puppeteer = require("puppeteer");

const data = [
  {
    title:
      "How to write CSS like a professional. Best techniques to get from idea to polished result. | by Nick Haralampopoulos | Medium",
    url: "https://nick-haralampopoulos.medium.com/how-to-write-css-like-a-professional-best-techniques-to-get-from-idea-to-polished-result-b1c8066d3303",
    topic: "css",
  },
  {
    title: "20 web design principles to follow",
    url: "https://www.canva.com/learn/20-web-design-principles-follow/",
    topic: "css",
  },
  {
    title: "Classes - JavaScript | MDN",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    topic: "JavaScript",
  },
];

// * default arugments
// * JavaScript switch-case
function removePunctuation(inputString) {
  //   var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
  let punctuationless = inputString.replace(
    /[.,\/#!$%\^&\*;:{}=\-_`~()|]/g,
    ""
  );
  let finalString = punctuationless.replace(/\s{2,}/g, " ");

  return finalString;
}

function processImageTitles(title) {
  let punctuationless = removePunctuation(title);
  const length = 36; // limit the length of the file name to 36 words
  return punctuationless.slice(0, length).split(" ").join("-");
}

// * check for image existance
// * default arguments
// const url, path;

// url = "https://www.google.com/";
path = "/Users/ptrn158/Documents/ripoff-ejs/public/img/";

const getImages = async (url, title) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width: 320, height: 480 });
  // await page.waitForNavigation({ waitUntil: "networkidle2" });
  await page.screenshot({
    path: `${path}${processImageTitles(title)}.png`,
    fullPage: false,
  });

  await browser.close();
};

let title = data.map((x) => x.title);
let url = data.map((y) => y.url);
for (let i = 0; i < title.length; i++) {
  getImages(url[i], processImageTitles(title[i]));
}

// IIFE
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://example.com");
//   await page.screenshot({ path: "./img/example.png" });

//   await browser.close();
// })();
