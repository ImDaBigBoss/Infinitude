// Global variables

const INFINITUDE_VERSION = "0.0.1";

// Functions

function main() {
    const canvas = document.getElementById("canvas");
    const gl = canvas.getContext("webgl");

    if (!gl) {
        alert("The Infinitude Engine requires WebGL to run and your browser does not seem to support it.");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

// Main

main();
