# Asset Loading and Downloading

**Reading this chapter takes about 10 minutes.**

Assets need to be downloaded and loaded before use. Learning about asset downloading and loading can help users optimize the order and timing of asset loading and improve game performance.

## Overview

Asset downloading refers to downloading assets from the cloud Asset Library to the local machine for use. Asset loading is the process of loading local assets into the game cache for convenient use during gameplay. 

Both asset downloading and loading take time, and how to handle this time is a key consideration for game developers. In the editor, users don't need to pay too much attention to asset downloading, but developers need to choose an appropriate way to balance memory usage, game start-up time, and CPU performance when it comes to asset loading.

## Asset Downloading

Within the editor's "Asset Library", a variety of assets such as models, materials, textures, effects, animations, and sounds are provided for user utilization. To use these assets during the project development process, you need to download them first. When you drag assets from the library and place them in the "Scene" or under the "Object Manager," the download process will be automatically initiated, and objects in the scene will be displayed once the download is complete.

![img](https://arkimg-qn.ark.online/1702537617912-4.png)

Downloaded assets can be placed in the "Scene" or the "Object Manager" and customized.

![img](https://arkimg-qn.ark.online/1702537617905-1.png)

## Asset Loading

Asset loading refers to the process of loading assets that have already been used or will be used in the game into the cache during gameplay. This avoids the situation where the game has to wait for assets to load each time they are used. The example below shows the delay caused by changing the "Jump" button image of the "Default UI" in a project to an unloaded UI texture asset. In the "Script" column of the "Project Content" view, find the "UIDefault" script and replace the "onStart" method with the following code: pressing the "Jump" button will switch the button texture to "14126".

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

To avoid loading assets when they are needed, the editor provides two static methods to help users preload assets that will be used. The method is to drag the assets that will be used into the "Preload" column in the "Object Manager". 

The assets used by objects in the "Object Manager" will be loaded automatically after the game starts, just like when they are dragged into the "Preload" column. However, it's important to note that the more assets that are preloaded, the slower the game's startup time will be. In PIE, it mainly affects the time it takes to load assets into the cache, while in the published online game, it also includes the time it takes to download assets.

### Preload Column

The assets in the "Preload" column will be loaded automatically after the game starts, and dragging assets into this column will mark them as "need to preload". assets that have already been used by objects in the "Object Manager" do not need to be dragged into the "Preload" column again. After dragging the assets into the column, save the project.

![img](https://arkimg-qn.ark.online/1702537617905-3.png)

## Dynamic Downloading and Loading in Code

As the number of preloaded assets increases, the game's startup time will also increase. Therefore, to solve this problem and meet the demand for dynamic loading and displaying different assets, the editor provides two ways to dynamically load assets to assist developers in downloading/loading assets in a more flexible and active way.

### Using Asset Download/Loading Interface

The editor provides asset download/loading interfaces for users to decide when to execute asset download/loading operations during gameplay. Users only need to pass in the asset ID. The "assetLoaded" interface can check whether a certain asset is loaded, while "asyncDownloadAsset" will download and load the corresponding asset. Examples of how to use them are shown below:

```TypeScript
/**
 * @groups UTILITY
 * @description Check if a asset is loaded
 * @effect Effective at the calling end
 * @param InAssetId usage: asset GUID
 * @returns Returns false if the asset is not loaded
 */
function assetLoaded(InAssetId: string): boolean;

/**
 * @description Download a asset
 * @groups UTILITY
 * @effect Effective at the calling end
 * @param InAssetId usage:asset GUID
 * @returns Returns false if the download fails
 */
function asyncDownloadAsset(InAssetId: string): Promise<boolean>;
protected async onStart(): Promise<void> {
    AssetUtil.asyncDownloadAsset("14126").then((result: boolean) => {
        console.log("asset 14126 " + result);
    });

    // Same as above
    // let result = await AssetUtil.asyncDownloadAsset("14126");
    // console.log("asset 14126 " + result);
    
    console.log("asset 14144 " + AssetUtil.assetLoaded("14144"));
}
```

The asset download process is asynchronous, but the asset loading process is not. Therefore, dynamically loading assets will occupy the game's main thread, which can significantly impact CPU performance, so use it carefully.

### Using Assets with Asynchronous Interfaces

If the delay caused by loading assets is not important or does not affect the game process, you can use supported asynchronous interfaces to directly use the corresponding assets. This is usually used for asynchronously generating some asset objects, such as effects, sounds, or static models. The asynchronous interface can ensure that the corresponding object can be obtained after the asset is downloaded and loaded, without causing code errors due to delays.

```TypeScript
let newSound = await GameObject.asyncSpawn({guid: "110607"}) as Sound;
```

## Dynamic Loading vs Static Loading

|      | Static Loading                                               | Dynamic Loading                                              |
| :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Pros | The loading process can be completed during scene loading, so the asset has no performance issues during scene runtime; also, there is no need to worry about the delay when using assets. | Depending on the game design requirements, some assets cannot be determined at the start of the scene, so they must be dynamically loaded. Dynamic assets can be loaded at any time during scene runtime, giving developers great flexibility and proactivity. |
| Cons | Only supports immutable static assets and cannot flexibly replace different assets based on actual game needs; also, the scene loading time will significantly increase. | Dynamic asset loading requires higher skills from developers, and once not properly controlled, performance issues and memory leaks cannot be avoided. |