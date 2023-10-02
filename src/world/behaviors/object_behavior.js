import { GameObject } from "../game_object";

export class ObjectBehavior {
    /**
     * @type {GameObject}
     * @private
     */
    #object = null;

    /**
     * Gets the object this behavior is attached to.
     * @returns {GameObject} the object this behavior is attached to
     */
    get_object() {
        return this.#object;
    }

    /**
     * WARNING: DO NOT CALL THIS FUNCTION. This function is to be called by the game engine.
     * 
     * Sets the object this behavior is attached to.
     * @param {GameObject} object the object this behavior is attached to
     */
    set_object(object) {
        if (this.#object != null) {
            throw new Error("Cannot set object of behavior twice");
        }

        this.#object = object;
    }

    /**
     * Called when the behavior is created and associated with an object.
     */
    on_create() { }

    /**
     * Called just before the frame is rendered.
     */
    before_frame() { }

    /**
     * Called just after the frame is rendered.
     */
    after_frame() { }
}
