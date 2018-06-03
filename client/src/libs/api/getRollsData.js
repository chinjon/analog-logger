/**
 * @description A function that interfaces with REST API
 * 
 * @param { } none
 * 
 * @returns Body of Response object
 */
const getRollsData = async () => {
  const RESPONSE = await fetch('/api/rolls');
  const BODY = await RESPONSE.json();

  if (RESPONSE.status !== 200) throw Error(BODY.message);
  
  return await BODY;
}

export default getRollsData;