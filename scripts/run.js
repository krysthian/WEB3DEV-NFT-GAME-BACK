const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  
    const gameContract = await gameContractFactory.deploy(
        ["Saski", "Naruto", "Akastuki"],
		[
			"QmQBAHiKhks1yQrRysa9ef1Wj93oYUUe7dWSLqiqf8bUb1",
			"QmWVzB2Lta63jAW1P8GbdyGcm1N57hL3UeqEZHEMFAce7w",
			"QmdTZot4bGVbc5Ye2XQKSyyWZS9J4p1RKEDhu5PV3bdzqs",
      // "https://i.imgur.com/kvNognn.png",
			// "https://i.imgur.com/rSmJtFS.png",
			// "https://i.imgur.com/ncQMQs5.png",
		],
        [200, 400, 500], // HP values
        [100, 150, 50], // Attack damage values
        "Itachi",
        //"https://i.imgur.com/k4D60oH.png",
        "QmaFgA7VuTMWdmm8do9sHNLYVm9mYAo4wWxKa38HEM5BKq",
        500,
        50
      );
  
    await gameContract.deployed();
    console.log("Contrato deployado no endereço:", gameContract.address);
  
    //let txn;
    // Só temos 3 personagens.
    // Uma NFT com personagem no index 2 da nossa array.
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
  
    // txn = await gameContract.attackBoss();
    // await txn.wait();
  
    // txn = await gameContract.attackBoss();
    // await txn.wait();
  
    console.log("Done!");
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();