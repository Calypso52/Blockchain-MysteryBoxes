# 运行步骤

## 0. Add test Metamask wallet account

![image-20220512164223254](hardhat几个命令.assets/image-20220512164223254.png)

![image-20220512164310785](hardhat几个命令.assets/image-20220512164310785.png)

里面的空白配得和下图一样：

![image-20220512164344224](hardhat几个命令.assets/image-20220512164344224.png)

期中Currency Symbol强行写成ETH

## 1. Install dependencies

在根目录 `Blockchain-MysteryBoxes` 下：

```bash
npm install
```

## 2. Deploy contract

```bash
npx hardhat run src/backend/scripts/deploy.js --network localhost
```

## 3. Test (option) 

```bash
npx hardhat test
```

