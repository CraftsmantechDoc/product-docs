**Reading this chapter takes about 10 minutes.**

This chapter outlines how to store data for experiences through the API.

# Overview of Data Storage

For handling persistent storage of data, each player is allowed to store up to 16KB of encoded data per game. Any data exceeding this limit is not guaranteed to be stored and may be lost. Exceeding the limit will display a warning in the editor's log. 

# How to Utilize Data Storage

### Storage Environment

**Multiplayer Online Games** and **Standalone Games** are very different regarding data storage. In **Standalone Games**, temporary data is stored in the phone's local memory, and the data will be persistent until uninstalling.

In **multiplayer online games**, the data storage environment is divided into temporary data and permanent data, which is set by the **setEvn()** function, in which the default is local storage.

- If set to true, then we have **temporary data.** It will create a temporary data record based on game room, and when the game room is destroyed, the stored data will be destroyed together.
- If set to false, then we have **permanent data.** A permanent data record is created on a game-by-game basis, and this data does not disappear when the game room is destroyed.

### Setting Up Data Storage

The editor provides two ways to store data, one is customized and the other is stored on the character.

- Customized data storage
  - When using the asyncSetCustomData() method to store data, you can manage the data with custom keys.
  - For data stored using custom index values, use asyncGetCustomData() to read the data.

```TypeScript
    SaveCustomData(value) {
        //Execute on the server side
        if (Util.SystemUtil.isServer()) {
            DataStorage.setTemporaryStorage(true);  //Set to temporary data storage, store data in local process
            let myData = new CustomData();

            //You can use sizeOfData() to get the size of the current data in bytes, to make sure you don't exceed the encoded data storage limit.
            let myDataSize = DataStorage.sizeOfData(myData);
            console.log(`---Current data size: ${myDataSize}`);

            /*Store the score attribute in myData with the key name "score".
              -Parameters:key:string,value:unknown
              -Return value:Promise<DataStorageResultCode>
            */
            //Store the career attribute in myData with the key name "vocation".
            DataStorage.asyncSetCustomData("score", value).then(async (state) => {

                //Determine if the storage was successful
                if (state == DataStorage.DataStorageResultCode.Success) {

                    /*Asynchronously fetch custom data by key name
                      --Parameter set: key:string
                      -Return value: Promise<unknown>
                    */

                    //Read the data
                    this._CustomData = await DataStorage.asyncGetCustomData("score");
                    console.log(`asyncGetCustomData:${this._CustomData}`);
                } else {
                    //On store failure, return to the current store state
                    console.log(`asyncSetCustomData:"${DataStorage.DataStorageResultCode[state]}`);
                }
            });
        }
    }
```

- **Character Object Data Storage**
  - Using asyncSetPlayerData() for data storage allows each actor to manage only their own data.
  - When the data is stored, the character is used as a unique identifier, and the same character in the same game will automatically use the new data to overwrite the original data.
  - For data stored using the character object, use asyncGetPlayerData() to read the data.

```TypeScript
    SavePlayerData(playerValue:Gameplay.Player,scoreValue:number) {
        //Execute this on the server side
        if (Util.SystemUtil.isServer()) {
            DataStorage.setTemporaryStorage(true);  //Set to temporary data storage to store data in the local server process
            let myData = new CustomData();

            //You can set the data to be stored in the local server process by using sizeOfData.
            let myDataSize = DataStorage.sizeOfData(myData);
            console.log(`---Current data size:  ${myDataSize}`);

            /*Store the score attribute in myData through the player
                -Parameter setting: player:Player,value:unknown
                -Return value: Promise<DataStorageResultCode>
            */
            DataStorage.asyncSetPlayerData(playerValue, scoreValue).then(async (state) => {

                //Determine if the storage was successful
                if (state == DataStorage.DataStorageResultCode.Success) {

                    /*Asynchronously fetch custom data by key name
                      -Parameter set: key:string
                      -Return value: Promise<unknown>
                    */

                    //Read the data
                    this._CustomData = await DataStorage.asyncGetPlayerData(playerValue) as number;
                    Events.dispatchToAllClient("showScore",this._CustomData,playerValue.character.characterName);
                    console.log(`asyncGetPlayerData:${this._CustomData}`);
                } else {
                    //On store failure, return to the current store state
                    console.log(`asyncSetPlayerData:"${DataStorage.DataStorageResultCode[state]}`);
                }
            });
        }
    }
```

# Notes on Data Storage 

Data storage-related APIs can only be accessed through server scripts. Attempting to access them in client scripts will result in errors.