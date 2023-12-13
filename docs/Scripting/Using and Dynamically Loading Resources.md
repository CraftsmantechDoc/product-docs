**Reading this chapter takes about 10 minutes.**

# Methods and Examples of Using and Dynamically Loading Resources

## Getting existing objects in the scene

### Function:

#### **[getChildren() : Array]**

 get all child objects().

 **The client does not maintain a parent-child relationship. It's recommended to use asyncFind instead.**

```TypeScript
let goList = this.gameObject.getChildren();
goList.forEach(element => {
    console.log(`${this.gameObject.name} | ${element.name}`);
});
```

#### **[getChildByName(name: string) : GameObject]**

Get child objects by name (object name).

```TypeScript
let childrenObj = this.gameObject.getChildByName("MyChildrenName");
```

#### **[getChildByGuid(guid: string) : GameObject]**

Get child objects by GUID (object GUID).

```TypeScript
let childrenObjByGUID = this.gameObject.getChildByGuid("MyChildrenGUID");
```

### **Static Functions:**

#### **[find(guid: string) : GameObject]**

Find current object (object GUID).

You can find all the objects that inherit from Core.GameObject.

```TypeScript
//find GameObject
let goByfind = Gameplay.GameObject.find("GameObjectGUID");

//find Other Object eg.
let myTrigger = Gameplay.GameObject.find("TriggerObjGUID") as Gameplay.BoxTrigger;
```

#### **[asyncFind(guid: string) : Promise]**

Asynchronous lookup of the current object (GUID of the object).

You can find all the objects that inherit from Core.GameObject.

```TypeScript
@Core.Class
export default class GetObj extends Core.Script {
    
    protected async OnStart(): Promise<void> {

       let goByAsyfind = await Gameplay.GameObject.asyncFind("GameObjectGUID");

    }
    
}
```

When using asynchronous loading, the await modifier is required and the asynchronous modifier (async) is included in the function

#### **[getGameObjectsByName(name: string) : Array]**

Find all objects by name (object name).

```TypeScript
@Core.Class
export default class GetObj extends Core.Script {
    
    protected OnStart(): void {

       let goListByName = Gameplay.GameObject.getGameObjectsByName("GameObjectsName");
       goListByName.forEach(element => {

           console.log(`${this.gameObject.name} | ${element.name} | ${element.guid}`);

       });

    }
    
}
```

#### **[getGameObjectByName(name: string) : GameObject]**

 Find all objects by name (object name).

 **Return the first found object. If there are multiple objects with the same name, return a random one.**

```TypeScript
let goByName = Gameplay.GameObject.getGameObjectByName("GameObjectName");
```

#### **[findGameObjectByTag(InTag: string) : Array]**

​      Get `GameObject` by custom` tag( )`.

```Scala
@Core.Class
export default class GetObj extends Core.Script {
    
    protected OnStart(): void {

       let goListByTag = Gameplay.GameObject.findGameObjectByTag("GameObjectsTag");
       goListByTag.forEach(element => {

           console.log(`${this.gameObject.name} | ${element.name} | ${element.getTag()}`);

       });

    }
    
}
```

## 1.2 Cloning Existing Objects in the Scene

####  **[Clone() : GameObject]**

 Clone object（return object: `GameObject`）

```JavaScript
let goClone = this.gameObject.Clone();
```

## Generating Objects from the Repository in the Scene

####  **[SpawnGameObject(assetId: string, bInReplicates?: boolean) : GameObject]**

​      Construct a `GameObject` based on the GUID (GUID of the resource, synchronized or not).

```TypeScript
@Core.Class
export default class GetObj extends Core.Script {

    @Core.Property()
    preloadAssets = "AssetID,EffectAssetID";

    /** When the script is instantiated, this function will be called before the first frame is updated */
    protected OnStart(): void {

        //Create GameObject
        let assetGameObject = Gameplay.GameObject.SpawnGameObject("AssetID");
        
        //Create Other Object eg.
        let effectObj = Gameplay.GameObject.SpawnGameObject("EffectAssetID") as Gameplay.EffectSystem;

    }

}
```

When using the SpawnGameObject function, the resource ID to be generated needs to be preloaded

Use the above method and add it to the script

​    **@Core.Property()**

​    **preloadAssets = "AssetID,EffectAssetID";**



# Difference Between Using and Loading Resources

**The most essential difference is between Get and New.**

## Using Resource

 **All functions in 1.1** serve **to Get Resources, that is to Use Resources**

 Using a resource will point the object's memory address to the used variable, without generating new memory consumption.

## Loading Resource

 **All functions in 1.2, 1.3, and 1.4 serve to create New, that is to Load Resource**

 Loading a resource requests a new block of memory from the editor to store the new object.

 Whether copying or generating, new memory consumption will be generated.

 It is recommended to make a pool of objects that need to be repeatedly created and destroyed in logic to avoid excessive memory consumption.

# Notes on Using and Loading Resources

1. The object you get through the parent node can only be written on the Server side, the Client side currently does not maintain the parent-child node relationship.

If the logic needs to determine the parent-child node relationship on the client side, it can be made into an interface to verify on the server side.



2. It is best to make an object pool management when creating and destroying objects frequently (e.g. bullets)

This is to reduce the program memory and execution efficiency overhead.



3. All resource objects obtained should be nulled before use to prevent the code from running



4. Resources that need to be loaded dynamically (resources in the repository) must be preloaded (preloaded) first, otherwise they will not be created

 @Core.Property()

  preloadAssets = "Resource ID";

 **Notes:**

 Method 1: You can load resources into the project asynchronously by means of AssetUtil.asyncDownloadAsset

 Method 2: You can drag and drop the resources that need to be dynamically loaded to the priority load for marking (same as preload in principle)



 5. Suggestions on how to use synchronous and asynchronous find objects (`find` and `asyncFind`) 

 During code execution, if the timing of the logic is important, it is recommended to use asynchronous loading. If it is not important, use synchronous loading.

 Asynchronous loading will cause the code execution to block temporarily, and then execute the rest of the logic when the loading is complete.

 **Asynchronous loading example:**

 When scene 1 jumps to scene 2, we can use UI to block the process of scene loading.

 Use asynchronous loading to wait for feedback, wait until all resources in the scene are loaded, and then cancel UI masking

 **Synchronous loading case:**

 When we need to initialize many resources at the same time, and the resources are not used in time, we can use synchronous loading to facilitate the program to load multiple resources at the same time and speed up the progress.