# Automatic Culling & Custom Culling

**Reading this chapter takes about 5 minutes.**

This chapter outlines the editor's preset automatic culling rules and how to customize the cull distance of objects.

## Automatic Culling Rules

- **Definition of Culling and Cull Distance:** When the distance between an object and the camera exceeds a certain specific distance, the editor will automatically cull the object and not render it on the screen. This distance is called the cull distance. 
- The editor provides a set of preset automatic culling rules that can balance screen presentation and performance in most scenarios. The calculation method of these preset automatic culling rules is: 

**The actual cull distance of an object in the game (in cm) = The default cull distance of the object (determined by the object size) * Graphics quality coefficient** 

- **The default cull distance of the object** is determined by the size of the object. The larger the bounding sphere diameter of the object, the farther the default cull distance. The default cull distance of each object can be viewed in the grayed-out [Cull Distance] in [Scene Settings] for each object (the following section will introduce how to use custom cull distance; for now, just take it as the default cull distance displayed if custom culling is not enabled). This rule ensures that relatively larger objects are not easily culled. 
- The **Graphics Quality Coefficient** also has a fixed set of rules. The higher the performance level of the player's device, the larger the graphics quality coefficient (between 1.2 and 2; movie-level quality is 2). This goal is to provide players with better devices and a better gaming experience.

![img](https://arkimg-qn.ark.online/1701065663424-2.png)

For example: If the default cull distance corresponding to the size of a static model (without enabling custom culling) is 7500, and the graphics quality level of the player's device is Level 3 (the corresponding graphics quality coefficient = 1.2): 

Then when the game is running on this device, the actual cull distance (in cm) performed by this object = 7500 * 1.2 = 9000 

## How to Customize Cull Distance 

- However, to meet some situations where **some relatively important objects will not be culled according to the above automatic culling rules even if they are very far away from the player**, we can customize the cull distance of this object in [Scene Settings] - [Enable Customized Cull Distance]. 
  - If [Enable Customized Cull Distance] is not checked, the cull distance of the object will still be determined according to the fixed rules provided by the editor as mentioned earlier.
  - If [Enable Customized Cull Distance] is checked, you can further customize the [Cull distance] of this object. The actual cull distance will still be multiplied by a coefficient based on the player's device. The calculation method is: **The actual cull distance of an object in the game (in cm) = The custom cull distance of the object** Graphics quality coefficient*
- Note that when objects are automatically merged under the influence of the editor's HLOD rules (Hierarchical Level of Detail), the merged objects will still be culled according to the default cull distance (according to the bounding sphere diameter after batching) instead of applying this custom cull distance.
  - ![img](https://arkimg-qn.ark.online/1701065663424-1.png)

For example: If we check [Enable Custom culling] for a static model and set [Custom cull distance] = 1000, and the graphics quality level of the player's device is Level 3 (the corresponding graphics quality coefficient = 1.2): 

Then when the game is running on this device, the actual cull distance (in cm) performed by this object = 1000 * 1.2 = 1200 

To demonstrate the culling effect, in the project of the following video, we set the [Custom cull distance] of all black trash bags to 1500. When the distance between the camera and the black trash bags exceeds 1500, the black trash bags will not be rendered on the screen.

<video controls src="https://arkimg-qn.ark.online/20230508-103526.mp4"></video>

The method to set it in the script is as follows:

```TypeScript
    //Find the object that needs a custom cull distance
    let Obj1 = Core.GameObject.find("B48CE402") as Gameplay.Mesh
    //Set custom cull distance
    Obj1.setCullDistance(1000);
    //Turn off custom cull distance and enable automatic CullDistanceVolume function
    Obj1.setCullDistance(0);
```