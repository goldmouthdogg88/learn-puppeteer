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
function processTitles(inputString, format = "skeletal") {
  const length = 36; // length of the image file name.
  switch (format) {
    case "skeletal":
      format = format.slice(0, length).split(" ").join("-");
  }
  return format;
}

// * check for image existance
// * default arguments
const getImages = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com/");
  await page.screenshot({ path: "./img/example.png" });

  await browser.close();
};

getImages();

// IIFE
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://example.com");
//   await page.screenshot({ path: "./img/example.png" });

//   await browser.close();
// })();
