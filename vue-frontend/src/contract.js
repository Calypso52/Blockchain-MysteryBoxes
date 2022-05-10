import Mcp from "./mcp";

const abi = require("./abi.json");

const mcp = new Mcp();

mcp.Contract.setProvider("http://13.212.177.203:8765");

const core = '0x3B1F19151FFb22434d2492E20df61e56bE7DB781';

const Contract = new mcp.Contract(abi, core);

export default Contract;
