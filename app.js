String.prototype.replaceAll = function(str1, str2) {
  return this.split('').map(a => a === str1 ? str2 : a).join('');
}
