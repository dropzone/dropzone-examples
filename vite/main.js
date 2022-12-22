import "./style.css";
import javascriptLogo from "./javascript.svg";

import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite + Dropzone!</h1>
    <small>Obviously the files dropped here will fail to upload because there is no server to accept them.</small>
    <div class="card">
      <form class="dropzone" id="my-form" action="/"></form>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div class="card">
      <h1>Debug output:</h1>
      <pre id="output"></pre>
    </div>
  </div>
`;

const myDropzone = new Dropzone("#my-form");
const output = document.querySelector("#output");

myDropzone.on("addedfile", (file) => {
    // Add an info line about the added file for each file.
    output.innerHTML += `<div>File added: ${file.name}</div>`;
});

