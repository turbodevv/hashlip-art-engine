const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "";
const description = "TipsyTiger Club is a collection of 8000 randomly generated and stylistically curated NFTs that exist on the Ethereum Blockchain. TipsyTiger holders can participate in exclusive events such as worldwide parties, profit-sharing, community giveaways, and more. Visit https://www.tipsytigerclub.com/ to learn more";
const baseUri = "ipfs://QmPhcHUK9xDN595778toqSFqmQ4ZsR7UnpypwLDpUHB1jc";

const solanaMetadata = {  
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 7995,
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "SKIN" },
      { name: "CLOTHES" },
      { name: "NECKLACE" },
      { name: "MOUTH" },
      { name: "EYES" },
      { name: "HAT" },
      
    ],

  },
];
// earring before mouth

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "100%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
