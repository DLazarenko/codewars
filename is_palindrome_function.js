function isPalindrome(string) {
  if (string.length === 0 || string.length === 1) {
    return true;
  } else {
    let firstEl = string[0];
    let lastEl = string[string.length - 1];
    if (firstEl.toLowerCase() === lastEl.toLowerCase()) {
      return isPalindrome(string.slice(1, string.length - 1));
    }
  }
  return false;
}

console.log(isPalindrome("Kayak")); // => true
console.log(isPalindrome("NEVERODDOREVEN")); // => true
console.log(isPalindrome("Tacocat")); // => true
console.log(isPalindrome("SELFLESS")); // => false