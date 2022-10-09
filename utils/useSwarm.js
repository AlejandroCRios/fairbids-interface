import { cssVar } from "@chakra-ui/react";
import { Bee, BeeDebug } from "@ethersphere/bee-js";
//import fs from "fs"

const useSwarm = async ({ data }) => {
  const bee = new Bee("http://localhost:1633");
  const beeDebug = new BeeDebug("http://localhost:1635");

  //const postageBatchId = await beeDebug.createPostageBatch("100", 17) // ?????
  const postageBatchId =
    "c3f185d71a22f69c4e3be4122c6ec3bfa64901276f69fe96d24bd8e8d254b2e2";

  //this is an inplementation of the upload function from the bee-js library
  // const uploadImage = async (image,  postageBatchId) => {
  //     let result = await bee.uploadFile(postageBatchId, image, "image/jpeg")
  //     return result.reference;
  // }

  // const downloadImage = async (hash) => {
  //     let result = await bee.downloadFile(hash)
  //     return result.data;
  // }

  // const content = fs.readFileSync("./image_0.jpeg");
  // const reference = uploadImage(content, postageBatchId)
  //you couls use data argument with upload
  const result = await bee.uploadData(postageBatchId, "bee is awesome");

  // prints Swarm hash of the file with which it can be retrieved
  // here it is fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780

  console.log(reference);

  const retrievedData = await bee.downloadData(result.reference);

  console.log(retrievedData.text()); // prints 'Bee is awesome!'
  return result;
};

export default useSwarm;
