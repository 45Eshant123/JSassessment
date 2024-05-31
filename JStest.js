/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,gender,eye_color,shirt_type,bling) {
    const NFT={
        "name":name,
        "gender":gender,
        "eyecolor":eye_color,
        "shirttype":shirt_type,
        "bling":bling
    }
    NFTs.push(NFT);
    console.log("Minted --> "+name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length; i++){
        console.log("\n ID --> "+(i+1));
        console.log("\n Name --> "+NFTs[i].name);
        console.log("\n gender --> "+NFTs[i].gender);
        console.log("\n eye color --> "+NFTs[i].eyecolor);
        console.log("\n shirt type --> "+NFTs[i].shirttype);
        console.log("\n bling --> "+NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);
}

// call your functions below this line
mintNFT("riya","female","pink","tank top","diamond chain");
mintNFT("raj","male","black","t-shirt","gold chain");
mintNFT("ravi","male","red","shirt","silver chain");
listNFTs();
getTotalSupply(); 
