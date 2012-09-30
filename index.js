
/**
 * Expose `Vector`.
 */

module.exports = Vector;

/**
 * Initialize a new `Vector` with x / y.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function Vector(x, y) {
  if (!(this instanceof Vector)) return new Vector(x, y);
  this.x = x;
  this.y = y;
}

/**
 * Return a negated vector.
 *
 * @return {Vector}
 * @api public
 */

Vector.prototype.negate = function(){
  return new Vector(-this.x, -this.y);
};

/**
 * Add x / y.
 *
 * @param {Vector} p
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.add = function(p){
  return new Vector(this.x + p.x, this.y + p.y);
};

/**
 * Sub x / y.
 *
 * @param {Vector} p
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.sub = function(p){
  return new Vector(this.x - p.x, this.y - p.y);
};

/**
 * Multiply x / y.
 *
 * @param {Vector} p
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.mul = function(p){
  return new Vector(this.x * p.x, this.y * p.y);
};

/**
 * Divide x / y.
 *
 * @param {Vector} p
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.div = function(p){
  return new Vector(this.x / p.x, this.y / p.y);
};

/**
 * Check if these vectors are the same.
 *
 * @param {Vector} p
 * @return {Boolean}
 * @api public
 */

Vector.prototype.equals = function(p){
  return this.x == p.x && this.y == p.y;
};

/**
 * Return a clone of this vector.
 *
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.clone = function(){
  return new Vector(this.x, this.y);
};

/**
 * Return angle in radians.
 *
 * @return {Number}
 * @api public
 */

Vector.prototype.angle = function(){
  return Math.atan2(this.x, this.y);
};

/**
 * Return angle in degrees.
 *
 * @return {Number}
 * @api public
 */

Vector.prototype.degrees = function(){
  return this.angle() * 180 / Math.PI;
};

/**
 * Return the distance between vectors.
 *
 * @param {Vector} p
 * @return {Number}
 * @api public
 */

Vector.prototype.distance = function(p){
  var x = this.x - p.x;
  var y = this.y - p.y;
  return Math.sqrt(x * x + y * y);
};

/**
 * Return "(x, y)" string representation.
 *
 * @return {String}
 * @api public
 */

Vector.prototype.toString = function(){
  return '(' + this.x + ', ' + this.y + ')';
};


