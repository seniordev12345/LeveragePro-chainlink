// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

abstract contract TypeAndVersionInterface {
  function typeAndVersion() external pure virtual returns (string memory);
}
