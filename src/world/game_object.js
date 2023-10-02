import { Vector3 } from "../utils/vector3";
import { ObjectBehavior } from "./behaviors/object_behavior";

export class GameObject {
    /**
     * @type {Vector3}
     * @private
     */
    #local_position = null;

    /**
     * @type {GameObject}
     * @private
     */
    #parent = null;
    /**
     * @type {GameObject[]}
     * @private
     */
    #children = [];

    /**
     * @type {ObjectBehavior[]}
     * @private
     */
    #behaviours = [];

    /**
     * Creates a new GameObject with the given coordinates.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     */
    constructor(x, y, z) {
        this.#local_position = new Vector3(x, y, z);
    }

    /**
     * Creates a new GameObject from a Vector3 position.
     * @param {Vector3} position
     * @returns {GameObject} a new GameObject
     * @static
     */
    static from_position(position) {
        return new GameObject(position.x, position.y, position.z);
    }

    /**
     * Gets the position of this GameObject relative to its parent. (If it has one)
     * @returns {Vector3} the local space position (reference)
     */
    get_local_position() {
        return this.#local_position;
    }

    /**
     * Gets the position of this GameObject relative to the world.
     * @returns {Vector3} the world space position (clone)
     */
    get_world_position() {
        if (this.#parent) {
            return this.#parent.get_world_position().clone().add(this.#local_position);
        }
        return this.#local_position.clone();
    }

    /**
     * Sets the position of this GameObject relative to its parent. (If it has one)
     * @param {Vector3} position the local space position
     */
    set_local_position(position) {
        this.#local_position = position.clone();
    }

    /**
     * Sets the position of this GameObject relative to the world.
     * @param {Vector3} position the world space position
     */
    set_world_position(position) {
        if (this.#parent) {
            this.#local_position = position.clone().subtract(this.#parent.get_world_position());
        } else {
            this.#local_position = position.clone();
        }
    }

    /**
     * Sets the parent of this GameObject.
     * @param {GameObject} parent (null to remove parent)
     */
    set_parent(parent) {
        if (parent == this.#parent) {
            return;
        }

        //Traverse the tree to make sure we aren't creating a loop
        let current = parent;
        while (current) {
            if (current == this) {
                throw new Error("Parenting loop detected!");
            }
            current = current.#parent;
        }

        //Remove this from the old parent's children
        if (this.#parent != null) {
            this.#parent.#children.splice(this.#parent.#children.indexOf(this), 1);
        }

        this.#parent = parent;
        if (parent != null) {
            parent.#children.push(this);
        }
    }

    /**
     * Adds a behaviour to this GameObject.
     * @param {ObjectBehavior} behaviour 
     */
    add_behaviour(behaviour) {
        this.#behaviours.push(behaviour);

        behaviour.set_object(this);
        behaviour.on_create();
    }

    /**
     * Removes a behaviour from this GameObject.
     * @param {ObjectBehavior} behaviour 
     */
    remove_behaviour(behaviour) {
        if (!this.#behaviours.includes(behaviour)) {
            throw new Error("Behaviour not attached to this GameObject!");
        }

        this.#behaviours.splice(this.#behaviours.indexOf(behaviour), 1);
    }

    /**
     * Gets the behaviours attached to this GameObject.
     * @returns {ObjectBehavior[]} the behaviours
     */
    get_behaviours() {
        return this.#behaviours;
    }
}
