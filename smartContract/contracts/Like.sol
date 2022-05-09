//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Like {
    bool private isLiked;

    constructor(bool _isLiked) {
        isLiked = _isLiked;
    }

    function manageLike() external {
        isLiked = !isLiked;
    }

    function likeStatus() external view returns (bool) {
        return isLiked;
    }
}

// import "hardhat/console.sol";

// contract Greeter {
//     string private greeting;

//     constructor(string memory _greeting) {
//         console.log("Deploying a Greeter with greeting:", _greeting);
//         greeting = _greeting;
//     }

//     function greet() public view returns (string memory) {
//         return greeting;
//     }

//     function setGreeting(string memory _greeting) public {
//         console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
//         greeting = _greeting;
//     }
// }
