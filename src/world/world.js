import { GameObject } from "./game_object";

/**
 * @type {GameObject[]}
 */
let game_objects = [];

/**
 * Registers a GameObject with the world.
 * @param {GameObject} game_object the GameObject to register
 */
export function register_game_object(game_object) {
    if (game_objects.includes(game_object)) {
        throw new Error("GameObject already registered!");
    }
    game_objects.push(game_object);
}

/**
 * Unregisters a GameObject from the world.
 * @param {GameObject} game_object the GameObject to unregister
 */
export function unregister_game_object(game_object) {
    if (!game_objects.includes(game_object)) {
        throw new Error("GameObject not registered!");
    }
    game_objects.splice(game_objects.indexOf(game_object), 1);
}

/**
 * WARNING: DO NOT CALL THIS FUNCTION. This function is to be called by the game engine.
 */
export function pre_frame_update() {
    for (let game_object of game_objects) {
        for (let behavior of game_object.get_behaviours()) {
            behavior.before_frame();
        }
    }
}

/**
 * WARNING: DO NOT CALL THIS FUNCTION. This function is to be called by the game engine.
 */
export function post_frame_update() {
    for (let game_object of game_objects) {
        for (let behavior of game_object.get_behaviours()) {
            behavior.after_frame();
        }
    }
}

/**
 * Gets all the GameObjects in the world.
 * @returns {GameObject[]} all the GameObjects in the world
 */
export function get_game_objects() {
    return game_objects;
}
