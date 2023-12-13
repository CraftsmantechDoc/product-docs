**Reading this chapter takes about 15 minutes.**

This article outlines the concept of environment fog, all its basic properties, and how to use environment fog in the editor.

## What is Environment Fog?

Environment Fog in the editor simulates fog in real life. It mainly uses fog effects to blur the surrounding environment.

<video controls src="https://arkimg-qn.ark.online/1683197169744_337.mp4"></video>

## How to Edit Environment Fog?

In the "Object Manager" - "World" list, find the "Environment Fog" object.

![img](https://arkimg-qn.ark.online/1702347548337-2.png)

You can adjust the fog effect according to your needs. Then, click on the "Environment Fog" object to edit it in the property panel (default is bottom right). Checking whether to enable the fog effect will display the fog effect in the scene, and unchecking it will remove the fog effect from the scene. The specific properties of the environment fog are described below:

![img](https://arkimg-qn.ark.online/1702347548316-1.png)

### Enable Environment Fog

- Property Description: Enable or disable the environment fog effect. When enabled, the fog effect will be displayed in the scene. When disabled, there will be no fog effect in the scene.

<video controls src="https://arkimg-qn.ark.online/fog2.mp4"></video>

- Application: Because the environment fog is a client-side effect, the effect displayed by each client can be completely different. In other words, we can create several different environment regions. When players enter the desert area, the desert fog effect will be displayed. Other players who do not enter the desert will not have the fog effect enabled.
- Implementation: First, we place the trigger object in the scene and then bind the following script to achieve a desert environmental region.

```TypeScript
@Core.Class
export default class NewScript extends Core.Script {

    fog: Gameplay.ExponentialHeightFog

    /** This function is called before the first frame update */
    protected async onStart(): Promise<void> {
        //Find the environment fog object by object ID
        this.fog = await Core.GameObject.asyncFind("22F16EC4") as Gameplay.ExponentialHeightFog
        //Declare the trigger
        let trigger = this.gameObject as Gameplay.Trigger;

        //When the character enters the trigger, the environment fog is turned on and set to the desert fog
        trigger.onEnter.add(() => {

            //Enable the environment fog
            this.fog.fogEnable = true;
            //Environment fog preset: desert fog
            this.fog.setPresetByIndex(4)

        });

        //When the character leaves the trigger, the environment fog is turned off
        trigger.onLeave.add(() => {

            //Disable the environment fog
            this.fog.fogEnable = false;

        });

    }
}
```

<video controls src="https://arkimg-qn.ark.online/fog3.mp4"></video>

### Environment Fog Preset

- Property Description: The environment fog provides convenient preset effects for users to choose from. More environmental fog effects may be added in the future.

| **Enum Name**  | **Value** | **Description**                                            |
| -------------- | --------- | ---------------------------------------------------------- |
| Default        | 0         | Default effect, moderate distance, and concentration.      |
| NearFog        | 1         | Environment fog in the foreground with a shorter distance. |
| FarFog         | 2         | Environment fog in the background with a longer distance.  |
| UndergroundFog | 3         | Environmental effect of dark underground caves.            |
| DesertFog      | 4         | Environmental effect of desert areas.                      |

- Application: We can switch between different environment fog presets based on different environments, and easily complete the switching of environment fog without having to set every parameter. We can also use the preset function to quickly restore the settings.
- Implementation: First, we add several UI buttons to facilitate the switching of environment fog presets, and of course, other mechanisms can be used for switching. Then, we write the UI script.

```TypeScript
@UI.UICallOnly('')
export default class UIDefault extends UI.UIBehavior {
    Character: Gameplay.Character;

    /*Called once on non-template instances during game time */
    protected onStart() {
        //Set whether to trigger onUpdate every frame
        this.canUpdate = false;

        //Find the corresponding jump button
        const JumpBtn = this.uiWidgetBase.findChildByPath('MWCanvas/MWButton_Jump') as UI.StaleButton
        //Find the corresponding preset 1 button
        const Preset1Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_11') as UI.Button
        //Find the corresponding preset 2 button
        const Preset2Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_12') as UI.Button
        //Find the corresponding preset 3 button
        const Preset3Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_13') as UI.Button
        //Find the corresponding preset 4 button
        const Preset4Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_14') as UI.Button
        //Find the corresponding preset 5 button
        const Preset5Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_15') as UI.Button

        //Click the jump button, asynchronously get the character and then execute the jump
        JumpBtn.onPressed.add(() => {
            if (this.Character) {
                this.Character.jump();
            } else {
                Gameplay.asyncGetCurrentPlayer().then((player) => {
                    this.Character = player.character;
                    //Character performs jump function
                    this.Character.jump();
                });
            }
        })

        //Click the button and send the preset event
        Preset1Btn.onPressed.add(() => {
            Events.dispatchLocal("Preset1");
        });

        //Click the button and send the preset event
        Preset2Btn.onPressed.add(() => {
            Events.dispatchLocal("Preset2");
        });

        //Click the button and send the preset event
        Preset3Btn.onPressed.add(() => {
            Events.dispatchLocal("Preset3");
        });

        //Click the button and send the preset event
        Preset4Btn.onPressed.add(() => {
            Events.dispatchLocal("Preset4");
        });

        //Click the button and send the preset event
        Preset5Btn.onPressed.add(() => {
            Events.dispatchLocal("Preset5");
        });

    }

}
```

- Next, we write the script that receives the events.

```TypeScript
@Core.Class
export default class NewScript extends Core.Script {

    fog:Gameplay.ExponentialHeightFog

    /** Called before the first frame update after the script is instantiated */
    protected async onStart(): Promise<void> {

        this.fog = await Core.GameObject.asyncFind("22F16EC4") as Gameplay.ExponentialHeightFog

        Events.addLocalListener("Preset1", () => {
            //Environment fog preset: Default
            this.fog.setPresetByIndex(0)
        });

        Events.addLocalListener("Preset2", () => {
            //Environment fog preset: Near Fog
            this.fog.setPresetByIndex(1)

        });

        Events.addLocalListener("Preset3", () => {
            //Environment fog preset: Far Fog
            this.fog.setPresetByIndex(2)
        });

        Events.addLocalListener("Preset4", () => {
            //Environment fog preset: Underground Fog
            this.fog.setPresetByIndex(3)

        });

        Events.addLocalListener("Preset5", () => {
            //Environment fog preset: Desert Fog
            this.fog.setPresetByIndex(4)
        });

    }

}
```

<video controls src="https://arkimg-qn.ark.online/fog4.mp4"></video>

### Fog Density

- Property Description: This is the overall density coefficient, which is the thickness of the visible fog layer.

<video controls src="https://arkimg-qn.ark.online/fog5.mp4"></video>

- Related API:

```TypeScript
//Set environment fog density
this.fog.fogDensity = 1;
```

### Fog Height

- Property Description: The starting world height of the fog effect, which is the position of the environment fog on the Z-axis. The lower the height, the lighter the fog effect, and the higher the height, the denser the fog effect.

<video controls src="https://arkimg-qn.ark.online/fog6.mp4"></video>

- Related API:

```TypeScript
//Set environment fog height
this.fog.fogHeight = 5000;
```

### Fog Height Falloff

- Property Description: As the fog effect fades from high to low, the transition effect of the fog effect gradually becomes stronger. This value controls the softness of the effect, with smaller values resulting in a softer effect.

<video controls src="https://arkimg-qn.ark.online/fog7.mp4"></video>

- Related API:

```TypeScript
//Set environment fog height falloff
this.fog.fogHeightFalloff = 0.7;
```

### Fog Scattering Color

- Property Description: Set the internal scattering color of the fog, which is the main color of the fog.

<video controls src="https://arkimg-qn.ark.online/fog8.mp4"></video>

- Related API:

```TypeScript
//Set environment fog color
this.fog.fogInscatteringColor = new Type.LinearColor(255, 0, 0);
```

### Fog Maximum Opacity

- Property Description: Controls the maximum opacity of the fog. A value of 1 makes the fog completely opaque, while a value of 0 makes the fog almost invisible.

<video controls src="https://arkimg-qn.ark.online/fog9.mp4"></video>

- Related API:

```TypeScript
//Set environment fog opacity
this.fog.fogMaxOpacity = 0.5;
```

### Start Distance

- Property Description: The distance between the fog appearing point and the camera.

<video controls src="https://arkimg-qn.ark.online/fog10.mp4"></video>

- Related API:

```TypeScript
//Set environment fog start distance
this.fog.startDistance = 1000;
```

### Sunlight Scattering Color

- Property Description: Set the scattering color of sunlight in the environment fog, which is the main color of the sunlight.

<video controls src="https://arkimg-qn.ark.online/fog10.5.mp4"></video>

- Related API:

```TypeScript
//Set directional inscattering color of sunlight
this.fog.directionalInscatteringColor = new Type.LinearColor(0, 137, 60);
```

### Sunlight Scattering Exponent

- Property Description: Controls the strength of sunlight scattering. The higher the exponent, the wider the range of scattering influenced by the color of the sunlight.

<video controls src="https://arkimg-qn.ark.online/fog11.mp4"></video>

- Related API:

```TypeScript
//Set directional inscattering exponent of sunlight
this.fog.directionalInscatteringExponent = 20;
```

### Sunlight Scattering Start Distance

- Property Description: The starting distance of sunlight scattering.

<video controls src="https://arkimg-qn.ark.online/fog12.mp4"></video>

- Related API:

```TypeScript
//Set directional inscattering start distance of sunlight
this.fog.directionalInscatteringStartDistance = 20000;
```