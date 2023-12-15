# Developing Standalone Games

**Reading this chapter takes about 10 minutes.**

This chapter outlines what processes and coding style considerations need to be taken into account when trying to develop a standalone game in the editor.

## Standalone Game Characteristics 

To facilitate the conversion between standalone game development and multiplayer online game development, the standalone mode in the editor uses the concept of a local area network. It can be simply understood as the standalone mode making the game client act as both the client and server.

## The Difference in Runtime Environment

- The online game logic using [if(isServer){...}else{...}], [if(isClient){...}else{...}] will only execute the if statement.
- The [Client1&Host] side has isServer always as true.

```TypeScript
//This will always be true and only execute if
if(Gameplay.isServer())
{
    //...
}
else{//will never execute
    //...
}
//---------------------------------------------------
//This will always be true and only execute if
if(Gameplay.isClient())
{
    //...
}
else{//will never execute
    //...
}
```

**The above logic can be changed to the following format**

```TypeScript
if(Gameplay.isServer()){
    //...
}

if(Gameplay.isClient()){
    //...
}
```

## Effect of Standalone Mode on RPC

**In the standalone game mode, take the [Client1&Host] side as an example**

The host side is both client and server side, so you can write the code of the server side in the client side

Example:

if(Gameplay.isClient())

{

Events.addClientListener("xxx",(player:Gameplay.Player)=>{ });

}

if(Gameplay.isServer())

{

Events.addServerListener("xxx",(player:Gameplay.Player)=>{ });

}

If the logic needs to filter the information sent and received by itself:

- When the dispatchToServer command is connected with addClientListener, there is a Player parameter, this command is not changed in LS, so it can be used to filter information by Player to determine whether it is sent to itself
- dispatchToClient, dispatchToAllClient, these two instructions originally do not have the Player parameter, the developer needs to manually identify in the event parameters to filter the information

## Notes on Converting Standalone Games to Online Games

- For determining changes to the runtime environment: [Gameplay.isServer()], [Gameplay.isClient()].
- Clients of standalone games can use addClientListener, but not for clients of multiplayer online game.
- Standalone game hosts can use [Player] for filtering messages. For online games, the game server cannot use `getCurrentPlayer`.

## Data Storage for Standalone Games

Please refer to the Data Storage chapter for more details.