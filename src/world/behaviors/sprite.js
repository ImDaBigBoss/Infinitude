import { ObjectBehavior } from "./object_behavior";

export class Sprite extends ObjectBehavior {
    /**
     * @type {Image}
     * @private
     */
    #image = null;
    /**
     * @type {Number}
     * @private
     */
    #width = 0;
    /**
     * @type {Number}
     * @private
     */
    #height = 0;

    /**
     * Creates a new Sprite with the given image source.
     * @param {Number} width
     * @param {Number} height
     * @param {String} image_src can be a url or a base64 encoded image
     * @returns {Sprite} a new Sprite
     */
    constructor(width, height, image_src) {
        super();
        this.#width = width;
        this.#height = height;
        this.set_image(image_src);
    }

    /**
     * Gets the image of this sprite.
     * @returns {Image} the image
     */
    get_image() {
        return this.#image;
    }

    /**
     * Sets the image of this sprite.
     * @param {String} image_src can be a url or a base64 encoded image
     */
    set_image(image_src) {
        this.#image = new Image();
        this.#image.src = image_src;
    }

    /**
     * Gets the width of this sprite.
     * @returns {Number} the width
     */
    get_width() {
        return this.#width;
    }

    /**
     * Sets the width of this sprite.
     * @param {Number} width
     */
    set_width(width) {
        this.#width = width;
    }

    /**
     * Gets the height of this sprite.
     * @returns {Number} the height
     */
    get_height() {
        return this.#height;
    }

    /**
     * Sets the height of this sprite.
     * @param {Number} height
     */
    set_height(height) {
        this.#height = height;
    }
}
