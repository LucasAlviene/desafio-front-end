const sleep = async(seconds) => await new Promise(resolve => setTimeout(resolve, 1000 * seconds));

export default sleep;