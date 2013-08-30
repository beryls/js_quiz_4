//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

Array.prototype.sort = function() {
  var size = this.length;
  if (size <= 1) {
    return this;
  }
  var pivot_spot = Math.floor((size - 1) / 2);
  var pivot = this.splice(pivot_spot, 1);
  var less = [];
  var greater = [];
  for (i = 0; i < size - 1; i++) {
    if (this[i] <= pivot) {
      less.push(this[i]);
    } else {
      greater.push(this[i]);
    }
  }
  return less.sort().concat(pivot, greater.sort());
}