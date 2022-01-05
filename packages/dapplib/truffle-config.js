require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue release pitch hole guess praise army gate'; 
let testAccounts = [
"0xadb28b9e6c1d3d7cbe3946733ae6ba0894df44e635f4a78d1f2a848868db7d88",
"0xa4ca1cc3b369a30203f5677399969edc45a9bab4119ae2e0083ee50e528f9d2f",
"0x2ca07e149bf4bdfe775abfd5e3ade6b909939a24b824e34f5f091fbd98d1568e",
"0xb15450836ecb044928e903385b8fe9d1aed4a51d889e2983aeb9622baa3cb6f7",
"0x11e977e1a1eec7e5d20bce42d46ecd53c05b34df6e9cd2fb812df92ee7600855",
"0xd99bd1366431ab79c516bed3d25d23eeea014bcb0c3a908806043cd327a2cc12",
"0xff4083d8e9fc1a43b5033770705cf28a3f201a62af7425cdd6bb30259012ccf4",
"0xc264b0acc2bf7e4c96ad1bd06b80ad40f31151755b7867ee7ad11bcba7f56676",
"0x246b7a362ac51f301f7dfa5644faa6ebdcf3c9d226c7148f8da95ab73405149b",
"0xc5a641014b527598e3fba1adc54d3bc488199db295c50e095588520cfd6defdc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


