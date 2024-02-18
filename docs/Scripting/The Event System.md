# The Event System

**Reading this chapter takes about 20 minutes.**

This chapter outlines the rules and considerations for dispatching events between scripts in the editor.

## What is the Event System?

The event system consists of **Dispatchers** and **Listeners.**

The event system mainly handles **the transfer of user input state, data transfer between client and server, and data transfer between local scripts.**

### Client Listener

#### System Events

##### onKeyDown

When the user has pressed a button in the terminal, the system will notify the client of the event trigger. **This event is only triggered on the client side.**

For example, if the user pressed the button 'K': 

```TypeScript
Util.InputUtil.onKeyDown(Type.Keys.K,()=>{

    console.log(`The user presses the K key`);
            
});
```

##### onKeyUp

When the user lifts a pressed button at the terminal, the system will notify the client of the event trigger. **This event is triggered only on the client side.**

For example, when the user raises the 'K' button.

```TypeScript
Util.InputUtil.onKeyUp(Type.Keys.K,()=>{

    console.log(`The user lifted the K key`);
            
});
```

##### onKeyPress

When the user holds down a pressed button at the terminal, the system will notify the client of the event trigger. **This event is triggered only on the client side.**

For example, when the user presses and holds the 'K' button.

```TypeScript
Util.InputUtil.onKeyPress(Type.Keys.K,()=>{

    console.log(`The user holds down the K key`);
    console.log(`Current time ${Global.ElapsedTime()`);
            
});
```

#### Custom Events

##### LocalListener

This event is only triggered locally and used for data transfer between scripts.

Client to Client

Server to Server

For example, when a user presses a button, the event needs to be listened for in other scripts.

```TypeScript
Events.addLocalListener("onXXXButtonClick",()=>{

    console.log(`The user pressed the XXX button`);
            
});
```

##### ServerListener

 The client can listen for events through this function when the server passes data to the client.

 This event is only triggered on the client side.

 For example, when the server side notifies the client that the player has leveled up.

```TypeScript
Events.addServerListener("LevelUp",(lv:number)=>{

    console.log(`User upgraded to level ===> ${lv}`);      

});
```

### Server Listener

#### ClientListener

 When the client dispatches data to the server, the server can listen for events through this function

 **This event is only triggered on the server side**

 For example, when the player performs an attack

```TypeScript
Events.addClientListener("Attack",(player:Gameplay.Player,skills:number)=>{

    console.log(`The player(${player.guid}) uses skill ${skills} to launch an attack.`);

});
```

#### Room Events

##### PlayerJoinedListener

When a player enters a room, the server notifies the server side script.

**This event is only triggered on the server side.**

For example, when the server needs to broadcast the information about the player entering the room.

```JavaScript
Events.addPlayerJoinedListener((player:Gameplay.Player)=>{

    console.log(`The player(${player.guid}) enters the room`);

});
```

##### PlayerLeftListener 

When a player leaves a room, the server notifies the server-side script.

**This event is only triggered on the server side.**

For example, when the server needs to broadcast information about the player leaving the room.

```TypeScript
Events.addPlayerLeftListener((player:Gameplay.Player)=>{

    console.log(`Players(${player.guid}) left the room`);

});
```

### Client Dispatcher

#### dispatchLocal 

In relation to 2.1.1, when the user presses a button, the event needs to be listened for by other scripts.

This script can be written as follows. **This event can only be dispatched locally.**

```Apache
Events.dispatchLocal("onXXXButtonClick");
```

#### dispatchToServer

In relation to 2.2.1, when a user launches an attack using a skill, the server needs to be notified for synchronization.

This script can be written as follows. **This event can only be dispatched on the client side.**

```TypeScript
let skills:number = 6; 
Events.dispatchToServer("Attack",skills);
```

### Server Dispatcher

#### dispatchToClient

In relation to 2.1.2 - 2, combined with 2.2.1.

When a player launches an attack and the server receives a message that the player needs to be notified of the level-up.

This script can be written as follows, this event can only be dispatched on the server side.

```TypeScript
Events.addClientListener("Attack",(player:Gameplay.Player,skills:number)=>{

    console.log(`The player(${player.guid}) uses skill ${skills} to launch an attack.`);

    let level:number = 66;

    //Notify player to receive the LevelUp event, event data is level
    Events.dispatchToClient(player,"LevelUp",level);
    
});
```

#### dispatchToAllClient

Like above, if you want to synchronize the upgrade message of the player to all clients.

This script can be written as follows, this event can only be dispatched on the server side.

```TypeScript
Events.addClientListener("Attack",(player:Gameplay.Player,skills:number)=>{

    console.log(`The player(${player.guid}) uses skill ${skills} to launch an attack.`);

    let level:number = 66;
    
    //Notify all players to receive LevelUp event, the diffusion range is centered on the player, the event data is player upgraded to level
    Events.dispatchToAllClient(player,"LevelUp",player,level);
    
});
```

#### dispatchToLocal

This event can only be dispatched locally.

```Apache
Events.dispatchToLocal("eventName");
```

## Notes and Tips on Using the Event System

### Distinguish the Runtime Environment of the Script

The dispatchers and listeners have strict runtime environment requirements.

They must be run in the corresponding runtime environment to be effective.

It is recommended, when using the event system, to determine the script runtime environment in the outer layer.

**this.isRunningClient()        ===>        Check if it's the client**

**GamePlay.isClient()            ===>        Check if it's the client**

**GamePlay.isServer()           ===>        Check if it's the server**

### Write Server-side Related Code in a Separate Script

In the editor, server-side and client-side can be written in the same project file.

To prevent the access of properties in the same script, leading to logic conflict due to the different environments, it is recommended to write the server-side code in a separate script, so as to locate the problem quickly when things go wrong.

### Close the dispatchers and listeners after the object is destroyed

Dispatchers and listeners in the event system are not destroyed according to the script lifecycle. It is recommended to close the connection of dispatchers and listeners in onDestroy of the script lifecycle.

Example:

```TypeScript
@Core.Class
export default class TestEvents extends Core.Script {

    //Declaring an array of events
    myEvents = new Array<Events.EventListener>();

    //Declare a count variable
    public temp:number;

    protected async onStart(): Promise<void> {

        //Initialize count variable to 0
        this.temp = 0;

        //Holding a cube object based on a GUID
        let cube = await Core.GameObject.find(`48A8055A40BBA143D723B19BDB2D21ED`);

        //Add a local event listener and save the listener object to the event array
        this.myEvents.push(Util.InputUtil.addLocalListener("TestEvent1",()=>{
            console.log("========================>");
            console.log(`this.temp ===> ${this.temp}`);
        }));

        this.myEvents.push(Util.InputUtil.onKeyDown(Type.Keys.one,()=>{
            this.temp ++;
            Events.dispatchLocal("TestEvent1");
        }));

        this.myEvents.push(Util.InputUtil.onKeyDown(Type.Keys.Two,()=>{
            cube.destroy();
            Events.dispatchLocal("TestEvent1");
        }));
    }

    protected onDestroy(): void {

        console.log(`Into onDestroy()`);

        //Iterate over all event objects and close all event listeners when the object is destroyed
        this.myEvents.forEach(element => {
            element.disconnect();
        });
    }
} 
```