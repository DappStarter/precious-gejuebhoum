require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain uncover heavy private flat space'; 
let testAccounts = [
"0x3925aa6e56801b38add96e974cee9bdab89a23f9d9a5a9bcae4a00abb35dd90c",
"0xe8d53c7843c1a554ff30cb9dd455162b593fd360f9efbb16b37f58a0886cb643",
"0x9fcf8d1d054d72d33eaff8608e76278bf088a8a289b76e38e1f57d319a931061",
"0x834079fbb4f0c44d303a90474f4754d69ae53283d64e58736e391fc83e6fb209",
"0x4fbdd17f3006f42f73fb078d8a3deeb02f14d6a9c8673205d8dfcab94a984b16",
"0xcf3ef22d3076a43d3cfe46e671db5240a77304e5799fcca5a6bd436330eebb80",
"0x59ced2c45a6c19e20463511c3ab3e3918777f832d231a446af723e32230e7bdc",
"0xc4b505613c6613be6a62ed926bcc04a2d9f0d44474601bfa001bdb25a0102fc8",
"0x1a0b6943737faf5f68e23ad375824e482ca9e3b975417e313649d6717a42507a",
"0x9733c5e54d382a34702ece34077d5654006b78aaf737f3910e36de2057987c38"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
