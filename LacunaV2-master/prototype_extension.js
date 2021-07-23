/**
 * @author Kishan Nirghin
 * 
 * @description Things that would make javascript slightly better
 * Mostly copied from other languages that do have these features
 * 
 * @note This extension extends existing prototypes
 */

String.prototype.insert = function (index, string) {
    if (index > 0)
      return this.substring(0, index) + string + this.substring(index, this.length);
    else
      return string + this;
};

String.prototype.splice = function(index, count, add) {
  if (index < 0) {
    index = this.length + index;
    if (index < 0) {
      index = 0;
    }
  }
  return this.slice(0, index) + (add || "") + this.slice(index + count);
}

Object.prototype.extend = function (obj) {
  for (var key in obj) {
    this[key] = obj[key];
  }
}