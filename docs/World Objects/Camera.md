# Camera

**Reading this chapter takes about 20 minutes.**

This chapter outlines how to modify various properties of the camera to achieve a variety of camera effects.

## What is a Camera?

 To put it simply, we see things in-game through the camera. 

![img](https://arkimg-qn.ark.online/1702346777143-26.png)

- In the Object Manager's "World" section of a newly created project, there will be a built-in camera object that cannot be deleted. When the game starts, it will automatically display the scene as seen by this camera.
- You can also drag out camera objects from the Resource Repository's "Gameplay Objects" or dynamically create multiple camera objects in scripts. These camera objects can be placed at any position in the scene or attached as child objects to other objects.
- Both the World Objects - Camera and Gameplay Objects - Camera can have their effects adjusted using the properties/interfaces of the Camera class in scripts.
  - ![img](https://arkimg-qn.ark.online/1702346777132-1.png)

## Camera Configuration

### Camera Settings

#### Transformation

- The transformation refers to the offset and rotation of the camera relative to the spring arm. The definition of the spring arm will be explained in detail later. For now, you can consider the red line in the main viewport as the spring arm.
- It is recommended to adjust the camera's relative rotation only when the camera orientation mode is set to Fixed/Follow. If the camera orientation mode is set to Control, make sure to zero out the relative rotation; otherwise, the player will have difficulty controlling the camera direction.
- Please be cautious when adjusting the camera's relative position. If the relative position is not at the origin, it may cause the camera to be unable to follow the spring arm to the same side of an obstacle after the spring arm triggers a camera collision. For example, if you want to place the camera further away from the character, it is recommended to adjust the length of the spring arm rather than the camera's relative position.
- Please note the difference between the camera's relative position/rotation and the spring arm's relative position/rotation. The following text will explain the role of the spring arm's relative position/rotation in detail.

![img](https://arkimg-qn.ark.online/1702346777132-2.gif)

![img](https://arkimg-qn.ark.online/1702346777133-3.gif)

#### Preset Camera Mode

![img](https://arkimg-qn.ark.online/1702346777133-4.png)

- **Camera Mode**
  - Developers can select the camera mode in the new drop-down options in the camera properties panel to easily achieve the desired camera view. After selection, the properties panel will be refreshed in accordance with the preset value.
  - The editor provides several sets of preset camera modes. You can conveniently choose the desired camera mode using the `currentCameraMode` property in the property panel or in scripts, without the need to manually adjust numerous parameters.
  - When using a specific camera mode, the relevant camera properties will automatically refresh according to the preset values of that mode.

Due to the complexity of camera parameters, it is highly recommended for new developers to use these preset camera modes or make slight adjustments based on these presets.

| Enum Name            | Value | Description                                              |
| -------------------- | ----- | -------------------------------------------------------- |
| FirstPerson          | 0     | First-person view camera effect                          |
| ThirdPerson          | 1     | Third-person view camera effect                          |
| TopDownAngle         | 2     | Overlooking 45-degree angle camera effect                |
| Default              | 3     | Similar to the default camera of Sakura School Simulator |
| TPSOverShoulderAngle | 4     | Third-person over-the-shoulder view of the camera effect |
| FPSShootingAngle     | 5     | First-person shooting game camera effect                 |

- **Real First Person**
  - With Real First Person enabled, the camera will follow the head of the character model; if disabled, the camera will follow the movement of the character capsule. Generally used for making first-person perspective games.

#### FOV

- Field of View, or FOV, refers to the horizontal viewing angle in perspective mode. A larger FOV provides a wider visible angle.

![img](https://arkimg-qn.ark.online/1702346777133-5.png)

<center>FOV set to 60</center>

![img](https://arkimg-qn.ark.online/1702346777133-6.png)

<center>FOV set to 90</center>

![img](https://arkimg-qn.ark.online/1702346777133-7.png)

<center>FOV set to 120</center>

Note: Suppose you need to use an orthographic perspective (for example, when creating a 2D casual game with a 3D effect). In that case, it is recommended to use a FOV of 35 (or smaller) and simultaneously adjust camera distance, position, angle, and other parameters to simulate an orthographic perspective.

#### Camera Position

![img](https://arkimg-qn.ark.online/1702346777133-8.png)

- **Camera Position Mode**
  - Fixed Mode
    - The camera is fixed in a certain position and cannot be moved.
  - Follow Mode
    - The camera follows an object (the default is the character) all the way around.

#### Camera Orientation / Controlling Camera Rotation with a Controller

- Fixed Orientation: The camera has a fixed orientation towards a specific direction.
- Follow Orientation: The camera follows the target and faces its direction.
- Control Orientation: The camera rotation is controlled by a UI control, such as a camera slider. The 

Note: When enabling the use of a controller to control camera rotation, it behaves exactly the same as setting the camera orientation mode to Control Orientation. Adjusting either of these properties will affect the other. In this case, the direction of the spring arm is not directly related to the relative rotation of the spring arm (springArm.localTransform.rotation). Instead, you need to use the controller rotation (Player.getControllerRotation/Player.setControllerRotation) to obtain or set the desired rotation.

#### **Fixed Camera on Z-axis**

- Fixed camera coordinates on the Z-axis, for example, when the character is jumping, the camera will not follow the character to change the Z-axis position, often used for making top-view angle games.
- Example:

![9f34d4d3-33ac-4b51-9318-b1ba58bf368f](https://arkimg-qn.ark.online/9f34d4d3-33ac-4b51-9318-b1ba58bf368f.gif)

<center>Fixed Camera on Z-Axis enabled</center>

![3d01a83f-630a-47e7-a327-7c3cc8c2bde1](https://arkimg-qn.ark.online/3d01a83f-630a-47e7-a327-7c3cc8c2bde1.gif)

<center>Fixed Camera on Z-Axis disabled</center>

### Spring Arm Settings

- First, let's briefly go over the purpose of the camera's spring arm:
  - The spring arm provides the camera with the ability to extend or retract based on the scene's conditions. For example, it can automatically adjust the camera's position when encountering obstacles to prevent visual obstructions.
  - The direction of the spring arm can be controlled by a UI control, such as a touchpad, or by the player using a joystick. This allows for dynamic camera movement and rotation effects in the game.
  - For now, you can consider the red line in the main viewport as the representation of the spring arm.

#### Relative Position and Relative Rotation

- Relative position refers to the position of the spring arm's attachment point relative to its parent node. The parent node is typically the player character, and the camera is connected to the character through the spring arm attachment point.
  - The position of the spring arm attachment point determines around which point the camera rotates when the player changes the viewing angle. In most third-person games, the spring arm attachment point is placed at the character's head or neck to ensure that the character's upper body remains centered on the screen.
- Relative rotation refers to the angle of the spring arm relative to its default direction. In the game, dragging the screen to rotate the camera corresponds to dynamically adjusting this property. This property can be used to create fixed top-down views or angled 45-degree views. Please note:
  - When the camera orientation mode is set to Control Orientation (i.e., controlling camera rotation with a controller), the spring arm's relative rotation controlled by a UI control, such as a camera slider, will not take effect. Only the dynamically controlled rotation through the controller will be effective.
  - When the camera orientation mode is set to Fixed Orientation/Follow Orientation (i.e., not controlling camera rotation with a controller), the dynamically set spring arm's relative rotation will take effect.

![img](https://arkimg-qn.ark.online/1702346777133-11.gif)

![img](https://arkimg-qn.ark.online/1702346777134-12.gif)

Note the distinction: Camera's Relative Position/Rotation vs. Spring Arm's Relative Position/Rotation

- Adjusting the camera's relative position/rotation only affects the camera itself and does not impact the spring arm. However, when adjusting the spring arm's relative position/rotation, it will also change the position and direction of the camera along with the spring arm.
- You can think of the spring arm as a selfie stick, where the near end is held by the person taking the selfie and the far end holds the camera. The camera's relative position/rotation adjusts the position and direction of the camera at the far end without affecting the selfie stick. On the other hand, the spring arm's relative position/rotation adjusts the position and direction of the selfie stick (along with the camera).

- If you want to dynamically set the direction of the spring arm, such as resetting the camera to the front or back of the character but still allowing the player to control the arm's direction, you can follow these steps:

```TypeScript
    //Press the attack button, reset the camera to directly behind the character
    attackBtn.onPressed.add(()=>{
        Camera.currentCamera.springArm.useControllerRotation = false;
        Camera.currentCamera.springArm.localTransform.rotation=new Rotation(0,0,0)
        Camera.currentCamera.springArm.useControllerRotation = true;
    })
```

#### Spring Arm Length

- The red line in the scene can be seen as the spring arm of the camera. Modifying the spring arm length will also change the length of the red line.
  - The actual distance between the camera and the character is determined by the combination of the camera's relative position, the spring arm's relative position, and the spring arm's length.
  - If both the camera's relative position and the spring arm's relative position are set to (0,0,0), the spring arm length represents the distance between the camera and the character.
- When creating a first-person game, it is recommended to set this property to 0.
- The diagram below illustrates the adjustment of spring arm length (i.e., distance).

![img](https://arkimg-qn.ark.online/1702346777134-13.png)

![img](https://arkimg-qn.ark.online/1702346777134-14.png)

#### Camera Collision

- The camera's spring arm can interact with other objects, causing the camera's position to be pushed forward upon collision. This prevents camera clipping issues or the player character from being obstructed.
- You can think of it this way: If there are objects with collision enabled obstructing the red line in the main viewport, it triggers a camera collision.
- Example:

![c9c30d21-0844-4d71-9668-f9859a9faea9](https://arkimg-qn.ark.online/c9c30d21-0844-4d71-9668-f9859a9faea9.gif)

<center>Camera Collision Enabled</center>

### Other Settings

#### Enable Camera Position Delay

- Camera position delay introduces a delay or lag in the camera's movement and rotation as it follows the character, resulting in smoother and more immersive camera motion. When camera position delay is enabled, there will be a delayed effect in the camera's movement as the character moves.
- It controls the speed at which the camera reaches its target position when the character is in motion. Lower values result in slower movement (higher delay), higher values result in faster movement (lower delay), and a value of zero represents instant movement (no delay).
- Additionally, the delay effect is also influenced by the maximum lag distance (adjusted using the maxLagDistance property in the script). In the following animated images, the maximum lag distance is set to 100 centimeters.

| **Camera Position Delay Speed=8**             | ![eace43c4-d31e-4da7-a2dc-afbee1a20a09](https://arkimg-qn.ark.online/eace43c4-d31e-4da7-a2dc-afbee1a20a09.gif) |
| --------------------------------------------- | ------------------------------------------------------------ |
| **Camera Position Delay Speed=2**             | ![4b0aaaf9-ddcb-47c6-96ea-2b11519bb8ce](https://arkimg-qn.ark.online/4b0aaaf9-ddcb-47c6-96ea-2b11519bb8ce.gif) |
| **Camera Position Delay Speed=0 or disabled** | ![ae7ada84-f39e-4f8f-beb1-e7b98985458a](https://arkimg-qn.ark.online/ae7ada84-f39e-4f8f-beb1-e7b98985458a.gif) |

#### Enable Camera Rotation Delay

- **Camera Rotation Delay**
  - When enabled, the motion of the camera following the character will be delayed when the angle of view is rotated; otherwise, there will be no delay effect.
- **Camera Rotation Delay Speed**
  - Control the speed at which the camera reaches the target position when the angle of view is rotated. Low values are slow (high latency), high values are fast (low latency), and zero is instant (no latency).

| **Camera Rotation Delay Speed=8**             | ![1684475954189_668](https://arkimg-qn.ark.online/1684475954189_668.gif) |
| --------------------------------------------- | ------------------------------------------------------------ |
| **Camera Rotation Delay Speed=2**             | ![1684475954897_433](https://arkimg-qn.ark.online/1684475954897_433.gif) |
| **Camera Rotation Delay Speed=0 or disabled** | ![1684475954321_282](https://arkimg-qn.ark.online/1684475954321_282.gif) |

#### **Upward Angle Limit**

- The Maximum angle that the camera can rotate upward. This prevents rotation to the bottom of the character model, resulting in a see-through effect of the character.
- Value: Ranging from 0-90. The larger the value, the larger the allowed angle.

#### **Downward Angle Limit**

- The Maximum angle that the camera can rotate downward. This prevents rotation to the top of the character model, resulting in a see-through effect of the character.
- Value: Ranging from 0-90. The larger the value, the larger the allowed angle.

![img](https://arkimg-qn.ark.online/1702346777134-23.png)

#### Enable Fade Obstruction

- When enabled, if there are other obstructing objects between the camera and the character, those objects will become transparent.

#### Fade Obstruction Opacity

- Adjusts the opacity of the obstructing objects when they become transparent.

![2c37ac77-75da-4fb5-a22a-eaf47ecaa070](https://arkimg-qn.ark.online/2c37ac77-75da-4fb5-a22a-eaf47ecaa070.gif)

## How to Dynamically Modify the Camera via API?

### Example 1: Adjusting FOV and Camera Position for Sniper Scope Effect

- Let's create a sniper scope effect for a first-person shooter (FPS) game. In the non-scoped state, the camera will use a predefined FPS shooting perspective where the player can see the sniper rifle held in their hands. When entering the scoped state, the camera will display the view seen through the scope, and the player will no longer see the sniper rifle in their hands.
- To achieve this effect, we need to handle the following:
  - Reduce the field of view to simulate the view through the scope.
  - Move the camera position forward to remove the sniper rifle from the view.
  - Decrease the sensitivity of the aiming joystick to prevent overly sensitive adjustments to the aiming direction in scoped mode.
- Example Script:

```TypeScript
                //When the fire button is pressed to enter scoped mode
                fireButton.onJoyStickDown.add(() => {
                        //Reduce the field of view to simulate the view through the scope
                        Camera.currentCamera.fov=70
                        //Move the camera position forward to remove the sniper rifle from the view
                        let cameradata=Camera.currentCamera.localTransform
                        cameradata.position.x+=100
                        Camera.currentCamera.localTransform=cameradata
                        //Decrease the sensitivity of the aiming joystick to prevent overly sensitive adjustments
                        fireButton.inputScale=(new Vector2(0.04, 0.03))
                });
                
                //When the fire button is released to exit scoped mode and fire a bullet
                fireButton.onJoyStickUp.add(() => {
                        Event.dispatchToLocal("FIRE_CLICK_Gun");
                        //Restore to the preset TPS shooting perspective and reset the camera position and field of view
                        Camera.currentCamera.preset=4
                        //Restore the original sensitivity of the fire button joystick
                        fireButton.inputScale=(new Vector2(0.08, 0.06))
                });
```

### Example 2: Adjusting Camera Distance for Pinch-to-Zoom Functionality

- Let's create a pinch-to-zoom effect where the camera distance (i.e., the length of the spring arm) changes based on the distance between two fingers. When the distance between the fingers increases, the camera distance decreases, and the camera moves forward. When the distance between the fingers decreases, the camera distance increases, and the camera moves backward.
- Example Script:

```TypeScript
@Component
export default class NewScript extends Script {
    touch: TouchInput;
    touchNum: number;
    oldPointSize: number;
    /** When the script is instantiated, this function is called before the first frame update */
    protected onStart(): void {
        this.setFinger()
        
    }
    
    // Set up finger events
    private setFinger() {

        // Find the UI object "DefaultUI" and its internal UI controls
        let UI1 = UIObject.findGameObjectsByTag("DefaultUI")[0] as UIObject;
        const touchpad = UI1.uiWidgetBase.findChildByPath('Canvas/TouchPadDesigner') as TouchPad
        const canvas = UI1.uiWidgetBase.findChildByPath('Canvas') as Canvas

        
        // Enable two-finger zooming for the camera field of view
        this.touch = new TouchInput();
        // Use touchNum to keep track of the current number of touch points on the screen
        this.touchNum=0
        
        //When touching begins (including the first and second touch points)
        this.touch.onTouchBegin.add(() => {

            this.touchNum++;
            if (this.touchNum < 2)return
            //When the second touch point appears, remove the camera panning area from the UI object
            touchpad.removeObject()
            //Use oldPointSize to record the initial distance between the two touch points
            let touchPoint = this.touch.getTouchVectorArray();
            this.oldPointSize = touchPoint[0].subtract(touchPoint[1]).length;
        });

        //When touch points move (including the first and second touch points)
        this.touch.onTouchMove.add(() => {

            if (this.touchNum < 2) return
            //Calculate the latest distance between the two touch points during their movement
            let touchPoint = this.touch.getTouchVectorArray();
            let newPointSize = touchPoint[0].subtract(touchPoint[1]).length;
            //Calculate the difference between the initial distance and the latest distance
            let distance = newPointSize - this.oldPointSize;
            //Use length to keep track of the current spring arm length (camera distance), adding or subtracting the difference between the initial and latest distances of the two touch points
            let length = Camera.currentCamera.springArm.length
            length += (distance > 0 ? -1 : distance < 0 ? 1 : 0) * 1 * Math.abs(distance);
            length = Math.max(length, 60);
            length = Math.min(length, 500);
            //Apply the length to the spring arm length and use oldPointSize to record the initial distance between the two touch points again
            Camera.currentCamera.springArm.length = length;
            this.oldPointSize = newPointSize;
        });

        //When touch points end (including the first and second touch points)
        this.touch.onTouchEnd.add(() => {
            this.touchNum--;
            console.log(this.touchNum);
            //When the last touch point leaves the screen, reattach the camera panning area to the UI object
            if (this.touchNum < 1) {
                canvas.addChild(touchpad)
            }
        })}
}
```

### Example 3: Dynamically Switching Camera Position and Orientation

- You can dynamically switch the camera's position mode and orientation by adjusting the properties `positionMode` and `rotationMode`.
- You can also enable the `useControllerRotation` property to switch the camera's orientation.
- When `rotationMode` is set to `RotationControl`, the direction of the spring arm does not correspond to the rotation of the spring arm itself (`springArm.localTransform.rotation`). Instead, you need to use controller rotation (`Player.getControllerRotation` / `Player.setControllerRotation`) to obtain or set the desired orientation.

```TypeScript
import DefaultUI_generate from "./ui-generate/DefaultUI_generate";

@UIBind('')
export default class UIDefault extends DefaultUI_generate {

    protected onStart() { 

        this.canUpdate = false;


        //LocationFixed
        this.mStaleButton.onClicked.add(() => {
                        Camera.currentCamera.positionMode=0
        })
        //LocationFollow
                this.mStaleButton_1.onClicked.add(() => {
                        Camera.currentCamera.positionMode=1
        })

        //RotationFixed
        this.mStaleButton_2.onClicked.add(() => {
                        Camera.currentCamera.rotationMode=0
                })
        //RotationFollow
        this.mStaleButton_3.onClicked.add(() => {
                        Camera.currentCamera.rotationMode=1
                })
        //RotationControl
        this.mStaleButton_4.onClicked.add(() => {
                        Camera.currentCamera.rotationMode=2
                })
    }
}
```

### Example 4: Implementing Camera Switching between Multiple Cameras

- As mentioned earlier, besides the default camera object that cannot be deleted in the Object Manager - World Objects, we can also drag out or dynamically create multiple camera objects from the Resource Repository - Gameplay Objects. Now let's demonstrate how to freely switch between multiple camera objects using the switch interface.
- When using the `switch` interface to switch cameras, you can instantly switch to a new camera or use various blending effects provided by the editor to achieve smooth and variable-speed camera transitions.
- Tip: Each camera object and its spring arm properties are independent. If you want to achieve different camera effects in the game, you can consider two approaches:
  - If the differences between camera effects are minimal, you can use the same camera object and modify its properties to achieve effect transitions.
  - If the differences between camera effects are significant and require adjustments to multiple properties, you can create multiple camera objects, each dedicated to a specific effect, and use the switch interface to switch between them.
- Script example:

```TypeScript
 @Component
 export default class Example_Camera_Switch extends Script {
     // This function is called after the script instance is created, but before the first frame update.
     protected onStart(): void {
         // The following code is only executed on the client-side.
         if(SystemUtil.isClient()) {
             // Get the current camera.
             let myCamera = Camera.currentCamera;
             let curCameraIndex = -1;
             // Create 5 random cameras in the scene.
             let cameraArray = new Array<Camera>();
             for (let i = 0; i< 5;i++) {
                 let camera = GameObject.spawn("Camera") as Camera;
                 camera.worldTransform.position = new Vector(MathUtil.randomInt(-1000, 1000), MathUtil.randomInt(-1000, 1000),MathUtil.randomInt(0, 1000));
                 camera.worldTransform.rotation = new Rotation(MathUtil.randomInt(-90, 90), MathUtil.randomInt(-30, 30),MathUtil.randomInt(-150, 150));
                 cameraArray.push(camera);
                 camera.onSwitchComplete.add(() => {
                     console.log("Camera number " + i);
                     curCameraIndex = i;
                 });
             }
             // Add a key method: Press the "1" key to switch cameras.
             InputUtil.onKeyDown(Keys.One, () => {
                 console.log("Switch Camera");
                 let newCamera = (curCameraIndex + 1) % 5;
                 Camera.switch(cameraArray[newCamera], 5, CameraSwitchBlendFunction.Linear);
             });
             // Add a key method: Press the "2" key to switch back to the default camera.
             InputUtil.onKeyDown(Keys.Two, () => {
                 console.log("Switch Default Camera");
                 Camera.switch(myCamera);
             });
         }
     }
 }
```

- Effect:

![4cf2a507-a038-4615-9c1e-ff583cf640f3](https://arkimg-qn.ark.online/4cf2a507-a038-4615-9c1e-ff583cf640f3.gif)