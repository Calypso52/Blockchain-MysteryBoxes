import Contract from '../contract';

// import store from '../store'

// import Big from 'bignumber.js'

export default {
    // async approve(limit) {
    //     const approveAmount = new Big(limit).times('1e18').toString(); // send to block is defined in mcp.js which is a function to communicate with Huygens
    //     const response = await contract.Instance.methods.approve(contract.coreAddress, approveAmount).sendToBlock({ // method calling and sending transaction to the blockchain
    //         from: store.state.dapp.account,
    //         amount: new Big('0').toString()
    //     });

    //     if (response.success) {
    //         console.log('transaction success: ', response);
    //     } else {
    //         console.log('transaction failed: ', response);
    //     }

    //     return response;
    // },
    async getLikeStatus() {
        console.log('进来了')
        console.log('***', Contract)
        let res = await Contract.methods.likeStatus().call()
        console.log('结果是')
        console.log(res.toString());
    }
}