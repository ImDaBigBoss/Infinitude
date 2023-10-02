import { Vector3 } from "../utils/vector3.js";
import { Sprite } from "../world/behaviors/sprite.js";
import * as world from "../world/world.js";

let gl = null;

// --- Utils ---

/**
 * @param {Sprite} sprite 
 * @param {Vector3} position 
 */
function draw_sprite(sprite, position) {
    
}

// --- GL Utils ---

function compileShader(shaderSource, shaderType) {
    let shader = gl.createShader(shaderType);

    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }

    let error = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("Shader compilation failed: " + error);
}

function createProgram(vertexShader, fragmentShader) {
    let program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    let success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }

    let error = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error("Program linking failed: " + error);
}

// --- Main stuff ---

function resizeCanvas() {
    gl.canvas.width = window.innerWidth;
    gl.canvas.height = window.innerHeight;

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
}
export function initRenderer(canvas) {
    gl = canvas.getContext("webgl");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (!gl) {
        alert("The Infinitude Engine requires WebGL to run and your browser does not seem to support it.");
        throw new Error("WebGL not supported");
    }
}

export function renderFrame() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    for (let game_object of world.get_game_objects()) {
        let world_pos = game_object.get_world_position();

        for (let behavior of game_object.get_behaviours()) {
            //Now we look for any types we can render
            if (behavior instanceof Sprite) {
                draw_sprite(behavior, world_pos);
            }
            //TODO: Add more renderable types
        }
    }
}
