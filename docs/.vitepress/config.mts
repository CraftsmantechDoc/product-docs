import type { DefaultTheme } from 'doc-theme-323'
import { defineConfigWithTheme } from 'vitepress'
export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Home',
    collapsed: false,
    collapsible: true,
    items: [
      { text: 'Introduction', link: '/index.md' },
      { text: 'System Requirements', link: '/System Requirements.md' },
      { text: 'Update Log', link: '/Update Log.md' }
    ]
  },
  {
    text: 'Editor',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Editor Window Interface',
        link: '/Editor/Editor Window Interface.md'
      },
      {
        text: 'Graphics Quality Settings',
        link: '/Editor/Graphics Quality Settings.md'
      },
      { text: 'Prefabs', link: '/Editor/Prefabs.md' },
      { text: 'Reconnection', link: '/Editor/Reconnection.md' },
      { text: 'Draw Mode', link: '/Editor/Draw Mode.md' },
      {
        text: 'Screen Orientation & Resolution Simulation',
        link: '/Editor/Screen Orientation & Resolution Simulation.md'
      },
      { text: 'Character Editor', link: '/Editor/Character Editor.md' },
      {
        text: 'Automatic Culling & Custom Culling',
        link: '/Editor/Automatic Culling & Custom Culling.md'
      }
    ]
  },
  {
    text: 'UI',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Creating User Interfaces (UI)',
        link: '/UI/Creating User Interfaces (UI).md'
      },
      {
        text: 'Basic Properties of UI Widgets',
        link: '/UI/Basic Properties of UI Widgets.md'
      },
      { text: 'UI Widget - Canvas', link: '/UI/UI Widget - Canvas.md' },
      { text: 'UI Widget - Image', link: '/UI/UI Widget - Image.md' },
      { text: 'UI Widget - Text', link: '/UI/UI Widget - Text.md' },
      { text: 'UI Widget - Input Box', link: '/UI/UI Widget - Input Box.md' },
      { text: 'UI Widget - Button', link: '/UI/UI Widget - Button.md' },
      {
        text: 'UI Widget - Masked Button',
        link: '/UI/UI Widget - Masked Button.md'
      },
      {
        text: 'UI Widget - Progress Bar',
        link: '/UI/UI Widget - Progress Bar.md'
      },
      { text: 'UI Widget - Scroll Bar', link: '/UI/UI Widget - Scroll Bar.md' },
      { text: 'UI Widget - Joystick', link: '/UI/UI Widget - Joystick.md' },
      { text: 'UI Widget - Touchpad', link: '/UI/UI Widget - Touchpad.md' },
      {
        text: 'UI Widget - Loading Icon',
        link: '/UI/UI Widget - Loading Icon.md'
      },
      {
        text: 'UI Widget - Color Picker',
        link: '/UI/UI Widget - Color Picker.md'
      },
      { text: 'Rich Text', link: '/UI/Rich Text.md' },
      { text: 'UI Designer', link: '/UI/UI Designer.md' },
      {
        text: 'PC Key Binding and UI Presets',
        link: '/UI/PC Key Binding and UI Presets.md'
      },
      {
        text: 'UI Performance and Optimization',
        link: '/UI/UI Performance and Optimization.md'
      },
      {
        text: 'Life Cycle and Event Description of UI Scripts',
        link: '/UI/Life Cycle and Event Description of UI Scripts.md'
      },
      {
        text: 'UI Drag and Drop Events',
        link: '/UI/UI Drag and Drop Events.md'
      }
    ]
  },
  {
    text: 'Physics',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Physics Object', link: '/Physics/Physics Object.md' },
      { text: 'Thrusters', link: '/Physics/Thrusters.md' }
    ]
  },
  {
    text: 'Gameplay Objects',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Advanced Vehicle',
        link: '/Gameplay Objects/Advanced Vehicle.md'
      },
      { text: 'Navigation Area', link: '/Gameplay Objects/Navigation Area.md' },
      { text: 'Interactors', link: '/Gameplay Objects/Interactors.md' },
      { text: 'World UI', link: '/Gameplay Objects/World UI.md' },
      { text: 'Trigger', link: '/Gameplay Objects/Trigger.md' },
      { text: 'Anchor', link: '/Gameplay Objects/Anchor.md' },
      { text: 'Hot Weapon', link: '/Gameplay Objects/Hot Weapon.md' },
      { text: 'Swimming Area', link: '/Gameplay Objects/Swimming Area.md' },
      { text: 'Spawn Point', link: '/Gameplay Objects/Spawn Point.md' },
      { text: 'Object Launcher', link: '/Gameplay Objects/Object Launcher.md' },
      { text: 'Blocking Area', link: '/Gameplay Objects/Blocking Area.md' },
      { text: 'Sound Effect', link: '/Gameplay Objects/Sound Effect.md' },
      { text: 'Particle Effect', link: '/Gameplay Objects/Particle Effect.md' }
    ]
  },
  {
    text: 'Motion Control Objects',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Impulse Object',
        link: '/Motion Control Objects/Impulse Object.md'
      },
      {
        text: 'Integrated Mover',
        link: '/Motion Control Objects/Integrated Mover.md'
      }
    ]
  },
  {
    text: 'World Objects',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Camera', link: '/World Objects/Camera.md' },
      { text: 'Post-Processing', link: '/World Objects/Post-Processing.md' },
      { text: 'Skybox', link: '/World Objects/Skybox.md' },
      { text: 'Environment Fog', link: '/World Objects/Environment Fog.md' }
    ]
  },
  {
    text: 'Scripting',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Script Life Cycle', link: '/Scripting/Script Life Cycle.md' },
      { text: 'Data Storage', link: '/Scripting/Data Storage.md' },
      {
        text: 'Developing Standalone Games',
        link: '/Scripting/Developing Standalone Games.md'
      },
      { text: 'The Event System', link: '/Scripting/The Event System.md' },
      {
        text: 'Using and Dynamically Loading Resources',
        link: '/Scripting/Using and Dynamically Loading Resources.md'
      },
      {
        text: 'Network Synchronization Structure and Mechanics',
        link: '/Scripting/Network Synchronization Structure and Mechanics.md'
      }
    ]
  },
  {
    text: 'Resource',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Resources', link: '/Resource/Resources.md' },
      {
        text: 'Resource Loading and Downloading',
        link: '/Resource/Resource Loading and Downloading.md'
      },
      {
        text: 'Resource Upload Tool',
        link: '/Resource/Resource Upload Tool.md'
      }
    ]
  },
  {
    text: 'Localization',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Localization',
        link: '/Localization/Language Localization.md'
      }
    ]
  }
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  ignoreDeadLinks: true,
  title: 'Editor Doc',
  appearance: false,
  description: 'Welcome to the GPark Editor Documentation!',
  outDir: '../dist',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo2.png'
      }
    ]
  ],
  themeConfig: {
    pandora: {
      type: 'template'
      // version: '027'
    },
    logo: '/logo2.png',
    feedback: 'https://github.com/CraftsmantechDoc/product-docs/',
    feedbackText: 'Feedback',
    siteTitle: 'Editor Doc',
    nav: [
      {
        text: 'GPark',
        link: 'https://gpark.io/'
      },
      {
        text: 'Download',
        link: ''
      },
      {
        text: 'Editor',
        link: 'https://docs.gpark.io/'
      },
      {
        text: 'API',
        link: ''
      }
    ],
    socialLinks: [
      {
        link: 'https://github.com/CraftsmantechDoc/product-docs/issues',
        icon: {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#676D77"/>
          <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5V6.5C16 5.67163 15.3284 5 14.5 5H5.49999C4.67163 5 4 5.67163 4 6.5V13.5C4 14.3284 4.67163 15 5.49999 15H7.74998L10.75 18V15H14.5Z" fill="white"/>
          <path d="M10.0003 13.2857C10.3553 13.2857 10.6431 12.9979 10.6431 12.6429C10.6431 12.2878 10.3553 12 10.0003 12C9.64524 12 9.35742 12.2878 9.35742 12.6429C9.35742 12.9979 9.64524 13.2857 10.0003 13.2857Z" fill="#676D77"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19627 6.55985C9.57999 6.4009 10.0022 6.35932 10.4096 6.44035C10.817 6.52137 11.1911 6.72138 11.4848 7.01507C11.7785 7.30876 11.9785 7.68295 12.0596 8.09031C12.1406 8.49767 12.099 8.91991 11.94 9.30363C11.7811 9.68735 11.5119 10.0153 11.1666 10.2461C10.9911 10.3633 10.8 10.4528 10.5999 10.5125V11C10.5999 11.3314 10.3313 11.6 9.9999 11.6C9.66853 11.6 9.3999 11.3314 9.3999 11V10.4C9.3999 9.82145 9.85795 9.47175 10.2371 9.36818C10.3301 9.34278 10.4189 9.30246 10.4999 9.24832C10.6479 9.14942 10.7633 9.00886 10.8314 8.84441C10.8995 8.67996 10.9173 8.499 10.8826 8.32441C10.8479 8.14983 10.7622 7.98947 10.6363 7.8636C10.5104 7.73773 10.3501 7.65201 10.1755 7.61729C10.0009 7.58256 9.81994 7.60038 9.65549 7.6685C9.49103 7.73662 9.35047 7.85198 9.25158 7.99998C9.15269 8.14799 9.0999 8.32199 9.0999 8.49999C9.0999 8.83137 8.83127 9.1 8.4999 9.1C8.16853 9.1 7.8999 8.83137 7.8999 8.49999C7.8999 8.08465 8.02307 7.67864 8.25382 7.3333C8.48457 6.98795 8.81254 6.71879 9.19627 6.55985ZM10.5496 10.5273C10.5496 10.5273 10.5499 10.527 10.5505 10.5268Z" fill="#676D77"/>
          </svg>
          `
        }
      }
    ],
    sidebar,
    outline: [2, 4],
    editLink: {
      pattern:
        'https://github.com/CraftsmantechDoc/product-docs/tree/main/docs/:path',
      text: 'Edit'
    },
    lastUpdatedText: 'Last Update',
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    }
  }
})
