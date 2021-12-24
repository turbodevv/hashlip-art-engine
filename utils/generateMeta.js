const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require("fs");

const buildDir = `${basePath}/build/json`;

for (let i = 0; i < 8000; i++) {

let tempMetadata = {
    name: `#${i}`,
    description: "TipsyTiger Club is a collection of 8000 randomly generated and stylistically curated NFTs that exist on the Ethereum Blockchain. TipsyTiger holders can participate in exclusive events such as launch parties, profit-sharing, community giveaways, and more. Visit https://www.tipsytigerclub.com to learn more.",
    image: `ipfs://QmUfLntVZtKJHDNzqYhSwLXyLTomgNRvJFQV1G7KmAgbYd`,
  };


  fs.writeFileSync(
    `${buildDir}/${i}.json`,
    JSON.stringify(tempMetadata, null, 2)
  );
}