// SPDX-License-Identifier: Unlicence
pragma solidity 0.8.13;

contract occupy {
  string massage;
  event set(string newMsg);

  constructor(){
      massage = "not occupied";
  }

  function getMsg() view public returns(string memory){
      return massage;
  }

  function setMsg(string memory _newMsg) public{
      massage = _newMsg;
      emit set(_newMsg);
  }
}