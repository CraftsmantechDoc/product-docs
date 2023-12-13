**Reading this chapter takes about 20 minutes.**

This chapter contains the following 2 main parts.

1. Draw Mode Introduction
2. Draw Mode User Guide

# Draw Mode Introduction

## What are Draw Modes?

Draw Mode is a mode of placing resource objects into the scene. When Draw Mode is enabled in the toolbar, the selected resource object will follow the mouse cursor in the main viewport. Left-click in the main viewport to create the object at the cursor position; long-click and drag in the main viewport to create multiple models in quick succession in the dragged area.

![img](https://arkimg-qn.ark.online/1701065152056-13.png)

![img](https://arkimg-qn.ark.online/1701065152046-1.gif)

## When to Use Draw Mode 

When you are building a scene made up of simple repetitive objects in a project, you can use the drawing mode to drastically improve your efficiency. Such as placing trees, fences, floor tiles, etc.

![img](https://arkimg-qn.ark.online/1701065152046-2.gif)

## Basic Rules for Draw Mode

- You can only place static objects with Draw Mode
- Under draw mode, non-static objects can still be added to the scene by the conventional drag-and-drop method

# Draw Mode User Guide

## Select Drawing Object

- Overview

  -  In Draw Mode, the object that you want to create in the scene with the mouse cursor in the main viewport is called a drawing object. The editor currently supports two ways of selecting drawing objects, in the resource repository and in the main viewport.

- **Selecting Drawing Objects in the resource repository**

  - 1.  In drawing mode, after clicking a static object in the repository, the model will be set as a drawing object, following the mouse cursor in the main viewport.

  - ![img](https://arkimg-qn.ark.online/1701065152046-3.gif)

- **Select Drawing Object in the main viewport**

  -  In drawing mode, right-click to select a static object in the main viewport and select "Set as Drawing Object" in the right-click menu to get the static object resource and set it as a drawing object and follow the mouse cursor in the main viewport. If the selected object has mounted child objects, only the single model selected by the cursor will be set as the drawing object.

  - ![img](https://arkimg-qn.ark.online/1701065152046-4.gif)

## Drawing in the Scene

- **Drawing a single object**
  -  When there is a drawing object on the mouse cursor, **left-clicking** in the main viewport will create the object where the cursor is located using the default parameters configured in the properties panel.

  - ![img](https://arkimg-qn.ark.online/1701065152046-5.gif)
- Drawing multiple objects
  - Method 1: Drag the mouse to create. When there is a drawing object on the mouse cursor, hold down the left button in the main viewport and drag, a predefined area will appear, and after releasing the left button, multiple objects will be created in the predefined area in succession.
  - ![img](https://arkimg-qn.ark.online/1701065152046-6.gif)

  - Method 2: Hold Ctrl and drag the gizmo to create. When there is a drawing object on the mouse cursor, hold down the Ctrl key, and the drawing object on the cursor will display gizmo. You can mark an area by dragging the pivot. After releasing the left button, multiple copies of the object are created in succession in that area.
    - ![img](https://arkimg-qn.ark.online/1701065152046-7.gif)

    - 

    -   If the Ctrl key is not released after releasing the left button, the object will be created and the pivot will be displayed on the newly drawed object, and you can continue to drag the pivot to create it.

    - ![img](https://arkimg-qn.ark.online/1701065152047-8.gif)

    - 
- **Prediction Model**
  - After creating an object in the main viewport, if the mouse cursor is on one of the faces of the enclosing box of the created object, the next placement position is automatically measured according to the axial direction of the face where the cursor is located, and a prediction model is generated.
    - ![img](https://arkimg-qn.ark.online/1701065152047-9.gif)

    - 
  - If you click the left mouse button when a prediction model has been generated, an object is generated at the location of the prediction model. The drawing object on the mouse cursor will automatically generate at the location of the next prediction model, after which a new prediction model will appear.
    - ![img](https://arkimg-qn.ark.online/1701065152047-10.gif)

    - 
  - Left-clicking without moving the cursor keeps generating new drawing objects along the prediction model.
    - ![img](https://arkimg-qn.ark.online/1701065152047-11.gif)

## Remove Drawing Objects

Right-click to remove the drawing object on your cursor.

![img](https://meta.feishu.cn/space/api/box/stream/download/asynccode/?code=OWM3ZjJhY2MwYjkxZGYwMzM5MDA5ZWVkYjcwMmZkNDlfb3JHNDZaYm85a0NMVlFYNVV0R3VpSjdtUmwwa29IclpfVG9rZW46UWlNNWJlaEFqb0hDMWZ4YjIyZ2NXUlRDbklnXzE3MDEwNjUxMzg6MTcwMTA2ODczOF9WNA)