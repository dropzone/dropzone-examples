import Dropzone from "dropzone";
// Optionally, import the dropzone file to get default styling.
import "dropzone/dist/dropzone.css";
import "./style.css";

Dropzone.autoDiscover = false;

const myDropzone = new Dropzone("#my-form");

const output = document.querySelector("#output");

myDropzone.on("addedfile", (file) => {
  // Add an info line about the added file for each file.
  output.innerHTML += `<div>File added: ${file.name}</div>`;
});
