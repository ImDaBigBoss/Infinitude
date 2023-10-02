
let show_stats = false;
let stats_element = null;

let last_frame_time = 0;
export let frame_time = 0;
export let frames_per_second = 0;

let frame_last_average = 0;
let frame_list = [];

function calculateAverageFrameTime() {
    if (frame_list.length > 100) {
        frame_list.shift();
    }
    frame_list.push(frames_per_second);

    return Math.round(frame_list.reduce((a, b) => a + b, 0) / frame_list.length);
}

export function frameRendered() {
    const now = performance.now();
    frame_time = now - last_frame_time;
    last_frame_time = now;
    frames_per_second = Math.floor(1000 / frame_time);

    if (show_stats) {
        let avg = calculateAverageFrameTime();
        if (avg != frame_last_average) {
            stats_element.innerHTML = "FPS: " + calculateAverageFrameTime();
            frame_last_average = avg;
        }
    }
}

export function setVisible(show) {
    if (stats_element == null) { //First time
        stats_element = document.createElement("div");
        stats_element.style.position = "fixed";
        stats_element.style.top = "0";
        stats_element.style.right = "0";
        stats_element.style.padding = "0.5em";
        stats_element.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        stats_element.style.color = "white";
        stats_element.style.fontFamily = "monospace";
        stats_element.style.fontSize = "1.5em";
        stats_element.style.zIndex = "100";
        document.body.appendChild(stats_element);
    }

    show_stats = show;
    if (show) {
        stats_element.style.display = "block";
    } else {
        stats_element.style.display = "none";
        frame_list = [];
    }
}

export function isVisible() {
    return show_stats;
}
