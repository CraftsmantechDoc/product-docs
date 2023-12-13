**Reading this chapter takes about 5 minutes.**

## What is Post-Processing?

Post-processing is an object that provides scene filters, allowing you to adjust the visuals to achieve the desired effect by switching presets and customizing parameters. Post-processing cannot be stacked; there can only be one active instance in the scene. You can find it in the "World" section of the Object Manager.

![img](https://arkimg-qn.ark.online/1702350720840-9.png)

## Customize Post-Processing

### Property Panel

Select the post-processing object in the Object Manager and modify the presets and properties in the Property Panel.

![img](https://arkimg-qn.ark.online/1702350720838-1.png)

- Preset Effects

- We provide seven preset templates of post-processing with pre-configured effects. Switching templates allows you to quickly apply different post-processing effects. The default value is Default=0. Under different templates, you can further modify the post-processing properties to achieve the desired effect.

- Default = 0

  ![img](https://arkimg-qn.ark.online/1702350720838-2.png)

- Dreamy = 1

![img](https://arkimg-qn.ark.online/1702350720838-3.png)

- Contrast = 2

![img](https://arkimg-qn.ark.online/1702350720838-4.png)

- WarmSunshine = 3

  ![img](https://arkimg-qn.ark.online/1702350720838-5.png)

- OldPhoto = 4

  ![img](https://arkimg-qn.ark.online/1702350720838-6.png)

- Night = 5

  ![img](https://arkimg-qn.ark.online/1702350720838-7.png)

- WarmContrast = 6

![img](https://arkimg-qn.ark.online/1702350720839-8.png)

- Bloom

Modifying this value adjusts the bloom effect in the camera. A higher value increases the strength of the bloom. The value range is 0 to 8, with a default value of 1.5.

<video controls src="https://arkimg-qn.ark.online/20231211140705_rec_.mp4"></video>

-  Global Saturation

Modifying this value adjusts the saturation of colors in the camera. Higher saturation makes colors more vibrant. The value range is 0 to 2, with a default value of 1.2.

<video controls src="https://arkimg-qn.ark.online/20231211140807_rec_.mp4"></video>

- Global Contrast

Modifying this value adjusts the contrast of colors in the camera. Higher contrast makes colors more vivid. The value range is 0 to 5, with a default value of 1.

<video controls src="https://arkimg-qn.ark.online/20231211140744_rec_.mp4"></video>

### Dynamic Setting

Post-processing properties can be dynamically modified by obtaining the object through a script and calling the interface.

```TypeScript
@Component
export default class NewScript extends Script {

    protected onStart(): void {
        if(SystemUtil.isClient()) {
            PostProcess.bloom= 1.5;
            PostProcess.saturation = 1.1;
            PostProcess.contrast = 1;
        }
    }
}
```

## Post-Processing Config

Post-processing Config includes post-processing properties and serves as the data layer. Different post-processing configurations can be switched using the `config` property in post-processing.

```TypeScript
@Component
export default class NewScript extends Script {

    protected onStart(): void {
        if(SystemUtil.isClient()) {

            let config1 = new PostProcessConfig();
            config1.bloomIntensity = 3;

            let config2 = new PostProcessConfig();
            config2.bloomIntensity = 1;

            InputUtil.onKeyDown(Keys.One, () => {
                PostProcess.config = config1;
            });

            InputUtil.onKeyDown(Keys.Two, () => {
                PostProcess.config = config2;
            });
        }
    }
}
```