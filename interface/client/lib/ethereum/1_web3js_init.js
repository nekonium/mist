// set providor
if(typeof nekonium === 'undefined'){
  console.log("import nekonium namespace.");
  nekonium={};
}
if(typeof nekonium.web3 !== 'undefined'){
  console.info('nekonium.web3 already initialized, re-using provider.');
  nekonium.web3 = new nekonium.Web3(nekonium.web3.currentProvider);
}else{
  console.info('nekonium.web3 not yet initialized, doing so now with HttpProvider.');
  nekonium.web3 = new nekonium.Web3(new nekonium.Web3.providers.HttpProvider('http://localhost:8293'));
}
