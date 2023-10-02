import * as infinitude from "./infinitude/infinitude.js";
import * as world from "./infinitude/world/world.js";
import * as stats_viewer from "./infinitude/utils/stats_viewer.js";
import { Sprite } from "./infinitude/world/behaviors/sprite.js";
import { GameObject } from "./infinitude/world/game_object.js";

function main() {
    const canvas = document.getElementById("canvas");
    infinitude.initialise(canvas);

    //Setup the game
    let player = new GameObject(0, 0, 0);
    player.add_behaviour(new Sprite(512, 512, "https://www.connexal.com/logo.png"));
    world.register_game_object(player);

    //Bind stats viewer to F1
    window.addEventListener("keydown", (event) => {
        if (event.key == "F1") {
            stats_viewer.setVisible(!stats_viewer.isVisible());
        }
    });
    //Bind program stop to F2
    window.addEventListener("keydown", (event) => {
        if (event.key == "F2") {
            infinitude.stop();
        }
    });

    //Start game loop and start rendering
    infinitude.start();
}

main();
