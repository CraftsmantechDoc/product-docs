# Resource Loading and Downloading

**Reading this chapter takes about 10 minutes.**

Resources need to be downloaded and loaded before use. Learning about resource downloading and loading can help users optimize the order and timing of resource loading and improve game performance.

## Overview

Resource downloading refers to downloading resources from the cloud resource repository to the local machine for use. Resource loading is the process of loading local resources into the game cache for convenient use during gameplay. 

Both resource downloading and loading take time, and how to handle this time is a key consideration for game developers. In the editor, users don't need to pay too much attention to resource downloading, but developers need to choose an appropriate way to balance memory usage, game start-up time, and CPU performance when it comes to resource loading.

## Resource Downloading

Within the editor's "Resource Repository", a variety of resources such as models, materials, textures, effects, animations, and sounds are provided for user utilization. To use these resources during the project development process, you need to download them first. When you drag resources from the library and place them in the "Scene" or under the "Object Manager," the download process will be automatically initiated, and objects in the scene will be displayed once the download is complete.

![img](https://arkimg-qn.ark.online/1702537617912-4.png)

Downloaded resources can be placed in the "Scene" or the "Object Manager" and customized.

![img](https://arkimg-qn.ark.online/1702537617905-1.png)

## Resource Loading

Resource loading refers to the process of loading resources that have already been used or will be used in the game into the cache during gameplay. This avoids the situation where the game has to wait for resources to load each time they are used. The example below shows the delay caused by changing the "Jump" button image of the "Default UI" in a project to an unloaded UI texture resource. In the "Script" column of the "Project Content" view, find the "UIDefault" script and replace the "onStart" method with the following code: pressing the "Jump" button will switch the button texture to "14126".

```TypeScript
protected onStart() { 
    this.canUpdate = false;
        const jumpBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_Jump') as Button
    JumpBtn.onPressed.add(()=>{
            if (this.character) {
                this.character.jump();
            } else {
                Player.asyncGetLocalPlayer().then((player) => {
                    this.character = player.character;
                    this.character.jump();
                });
            }
        }
        JumpBtn.pressedImageGuid = "180897";
        JumpBtn.disableImageGuid = "180897";
        JumpBtn.normalImageGuid = "180897";
    });
}
```

To avoid loading resources when they are needed, the editor provides two static methods to help users preload resources that will be used. The method is to drag the resources that will be used into the "Preload" column in the "Object Manager". 

The resources used by objects in the "Object Manager" will be loaded automatically after the game starts, just like when they are dragged into the "Preload" column. However, it's important to note that the more resources that are preloaded, the slower the game's startup time will be. In PIE, it mainly affects the time it takes to load resources into the cache, while in the published online game, it also includes the time it takes to download resources.

### Preload Column

The resources in the "Preload" column will be loaded automatically after the game starts, and dragging resources into this column will mark them as "need to preload". Resources that have already been used by objects in the "Object Manager" do not need to be dragged into the "Preload" column again. After dragging the resources into the column, save the project.

![img](https://arkimg-qn.ark.online/1702537617905-3.png)

## Dynamic Downloading and Loading in Code

As the number of preloaded resources increases, the game's startup time will also increase. Therefore, to solve this problem and meet the demand for dynamic loading and displaying different resources, the editor provides two ways to dynamically load resources to assist developers in downloading/loading resources in a more flexible and active way.

### Using Resource Download/Loading Interface

The editor provides resource download/loading interfaces for users to decide when to execute resource download/loading operations during gameplay. Users only need to pass in the resource ID. The "assetLoaded" interface can check whether a certain resource is loaded, while "asyncDownloadAsset" will download and load the corresponding resource. Examples of how to use them are shown below:

```TypeScript
/**
 * @groups UTILITY
 * @description Check if a resource is loaded
 * @effect Effective at the calling end
 * @param InAssetId usage: Resource GUID
 * @returns Returns false if the resource is not loaded
 */
function assetLoaded(InAssetId: string): boolean;

/**
 * @description Download a resource
 * @groups UTILITY
 * @effect Effective at the calling end
 * @param InAssetId usage:Resource GUID
 * @returns Returns false if the download fails
 */
function asyncDownloadAsset(InAssetId: string): Promise<boolean>;
protected async onStart(): Promise<void> {
    AssetUtil.asyncDownloadAsset("14126").then((result: boolean) => {
        console.log("Resource 14126 " + result);
    });

    // Same as above
    // let result = await AssetUtil.asyncDownloadAsset("14126");
    // console.log("Resource 14126 " + result);
    
    console.log("Resource 14144 " + AssetUtil.assetLoaded("14144"));
}
```

The resource download process is asynchronous, but the resource loading process is not. Therefore, dynamically loading resources will occupy the game's main thread, which can significantly impact CPU performance, so use it carefully.

### Using Resources with Asynchronous Interfaces

If the delay caused by loading resources is not important or does not affect the game process, you can use supported asynchronous interfaces to directly use the corresponding resources. This is usually used for asynchronously generating some resource objects, such as effects, sounds, or static models. The asynchronous interface can ensure that the corresponding object can be obtained after the resource is downloaded and loaded, without causing code errors due to delays.

```TypeScript
let newSound = await GameObject.asyncSpawn({guid: "110607"}) as Sound;
```

## Dynamic Loading vs Static Loading

|      | Static Loading                                               | Dynamic Loading                                              |
| :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Pros | The loading process can be completed during scene loading, so the resource has no performance issues during scene runtime; also, there is no need to worry about the delay when using resources. | Depending on the game design requirements, some resources cannot be determined at the start of the scene, so they must be dynamically loaded. Dynamic resources can be loaded at any time during scene runtime, giving developers great flexibility and proactivity. |
| Cons | Only supports immutable static resources and cannot flexibly replace different resources based on actual game needs; also, the scene loading time will significantly increase. | Dynamic resource loading requires higher skills from developers, and once not properly controlled, performance issues and memory leaks cannot be avoided. |