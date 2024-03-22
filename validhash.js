/ cosnt Block = reuqire("./Block.js");

// class Blockchain {
  // constructor() {
    // this.blockchain = [Block.genesis()];
    this.difficulty = 3;
  // }
  
  // get() { ... }
  // get latestBlock() { ... }

  isValidHashDifficulty(hash) {
    for (var i = 0; i < hash.length; i++) {
      if (hash[i] !== "0") {
        break;
      };
    }
    return i >= this.difficulty;
  }
// };

// module.exports = Blockchain;
