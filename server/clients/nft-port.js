const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

const BASE_URL = 'https://api.nftport.xyz/v0';
const TEMPLATE_FILE = '/Users/mari/Documents/Play/#Machine Visions/#MINDJOURNEY/#VELVETEENS RABIT/metaversekitty_inside_white_minimal_futuristic_lab_workers_in_b_e5558508-f135-47b8-ba52-9f962faeddd2.png';

class NftPort {
  async mint({ name, description, userWallet, file }) {
    console.log('[NFT Client] Starting minting process.');

    const formData = new FormData();
    formData.append(
      'file', 
      fs.createReadStream(TEMPLATE_FILE)
    );
    
    const response = await fetch(
      `${BASE_URL}/mints/easy/files?chain=polygon&name=${name}&description=${description}&mint_to_address=${userWallet}`, 
      {
        method: 'POST',
        headers: {
          'Authorization': process.env.NFT_PORT_API_TOKEN,
          ...formData.getHeaders()
        },
        body: formData, 
      }
    );

    console.log('[NFT Client] Request to mint completed.');

    const data = await response.json();

    return data;
  }

  async getTokenId({ transactionHash }) {  
    console.log('[NFT Client] Waiting for blockchain to mine NFT');
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(10_000);
    
    const response = await fetch(
      `${BASE_URL}/mints/${transactionHash}?chain=polygon`, 
      {
        method: 'GET',
        headers: {
          'Authorization': process.env.NFT_PORT_API_TOKEN,
        },
      }
    );
    
    const data = await response.json();
    
    console.log('[NFT Client] NFT token Id retrieved.');
    
    return data.token_id;
  }
  
  async getUri({ contractAddress, tokenId }) {
    console.log('[NFT Client] Waiting for blockhain to enrich NFT metadata.');
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(10_000);

    console.log('[NFT Client] Getting NFT URI from IFPS');
    
    const response = await fetch(
      `${BASE_URL}/nfts/${contractAddress}/${tokenId}?chain=polygon`, 
      {
        method: 'GET',
        headers: {
          'Authorization': process.env.NFT_PORT_API_TOKEN,
        },
      }
      );
      
    const data = await response.json();
      
    const uri = data?.nft?.file_url ?? data?.nft?.metadata?.image;
      
    console.log('[NFT Client] NFT created! 🌈');

    return uri;
  }
}

module.exports = new NftPort();