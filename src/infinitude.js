import * as world from "./world/world.js";
import * as renderer from "./rendering/renderer.js";
import * as stats_viewer from "./utils/stats_viewer.js";

export const VERSION = "0.0.1";

let running = false;

function drawFrame() {
    world.pre_frame_update();
    renderer.renderFrame();
    world.post_frame_update();

    if (running) {
        requestAnimationFrame(drawFrame);
        stats_viewer.frameRendered();
    } else {
        stop_internal();
        return;
    }
}

export function initialise(canvas) {
    console.info("Infinitude v" + VERSION);

    renderer.initRenderer(canvas);
}

export function start() {
    running = true;

    requestAnimationFrame(drawFrame);
}

function stop_internal() {
    console.log("Stopping engine...");

    stats_viewer.setVisible(false);
    //TODO

    console.log("Engine stopped.");
    alert("Engine stopped");
}
export function stop() {
    running = false;
}
