
export class Vector3 {
    x;
    y;
    z;

    /**
     * Creates a new Vector3 with the given coordinates.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     */
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Creates a new Vector3 from an array.
     * @param {Number[]} array
     * @returns {Vector3} a new Vector3
     * @static
     */
    static from_array(array) {
        return new Vector3(array[0], array[1], array[2]);
    }

    /**
     * Creates a new Vector3 clone from this vector.
     * @returns {Vector3} a new Vector3
     */
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }

    /**
     * Sets the coordinates of this vector.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @returns {Vector3} this vector
     */
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /**
     * Sets the coordinates of this vector to the given vector's coordinates.
     * @param {Vector3} vector
     * @returns {Vector3} this vector
     */
    set(vector) {
        return this.set(vector.x, vector.y, vector.z);
    }

    /**
     * Adds the given coordinates to this vector.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @returns {Vector3} this vector
     */
    add(x, y, z) {
        this.x += x;
        this.y += y;
        this.z += z;
        return this;
    }

    /**
     * Adds the given vector to this vector.
     * @param {Vector3} vector
     * @returns {Vector3} this vector
     */
    add(vector) {
        return this.add(vector.x, vector.y, vector.z);
    }

    /**
     * Subtracts the given coordinates from this vector.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @returns {Vector3} this vector
     */
    subtract(x, y, z) {
        this.x -= x;
        this.y -= y;
        this.z -= z;
        return this;
    }

    /**
     * Subtracts the given vector from this vector.
     * @param {Vector3} vector
     * @returns {Vector3} this vector
     */
    subtract(vector) {
        return this.subtract(vector.x, vector.y, vector.z);
    }

    /**
     * Multiplies this vector by the given scalar.
     * @param {Number} scalar
     * @returns {Vector3} this vector
     */
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }

    /**
     * Divides this vector by the given scalar.
     * @param {Number} scalar
     * @returns {Vector3} this vector
     * @throws {Error} if scalar is zero
     */
    divide(scalar) {
        if (scalar === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
        return this;
    }

    /**
     * Calculates the cross product of this vector and the given vector.
     * @param {Vector3} vector
     * @returns {Vector3} this vector
     */
    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    /**
     * Calculates the cross product of this vector and the given vector.
     * @param {Vector3} vector
     * @returns {Vector3} this vector
     */
    get_magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Normalizes this vector.
     * @returns {Vector3} this vector
     */
    normalize() {
        let magnitude = this.get_magnitude();
        this.divide(magnitude);
        return this;
    }

    /**
     * Returns a normalized copy of this vector.
     * @returns {Vector3} a normalized copy of this vector
     */
    get_normalized() {
        return this.clone().normalize();
    }
}
