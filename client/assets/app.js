let web3, contract;
let contractAddr;

$(document).ready(() => {
  web3 = await new Web3('https://bsc-dataseed1.binance.org:443');
  contract =  await new web3.eth.Contract(abi.occupy, contractAddr);
  $('.msg').html(await contract.methods.getMsg().call());
})

$('.btn.occupy').click(() => {
  try{
    const setTx = await contract.methods.setMsg($(input).text).send({from: user});
    const eventData = setTx.events.set.returnValues;
    alert(`乗っ取り成功! \nメッセージ: ${eventData.newMsg}`);
    location.reload();
  }catch(err){
    alert(err);
  }
})