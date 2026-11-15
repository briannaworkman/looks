// The gallery's palettes, as plain data. Each entry gives `makeColors` its
// input (`def`) and the three colors of the backdrop's gradient (`sky`, top to
// bottom). Palette colors come from the open-source palettes of the same names.

/** @type {import('./themes.js').Look[]} */
export const LOOKS = [
  {
    id: 'mocha',
    name: 'Catppuccin Mocha',
    mode: 'dark',
    sky: ['#11111b', '#2a2540', '#1e1e2e'],
    def: {
      label: 'Catppuccin Mocha',
      only: 'dark',
      roles: { accent: '#cba6f7', danger: '#f38ba8', success: '#a6e3a1', warning: '#f9e2af', pro: '#89b4fa' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#1e1e2e',
            'surface-1': '#222233',
            'surface-2': '#262738',
            'surface-3': '#2a2b3c',
            'text-primary': '#cdd6f4',
            'text-secondary': '#bac2de',
            'text-muted': '#a6adc8',
          },
        },
        git: { added: '#a6e3a1', removed: '#f38ba8', modified: '#f9e2af', merged: '#cba6f7', closed: '#f38ba8', conflicting: '#fab387', draft: '#9399b2' },
      },
      codeTheme: { dark: 'catppuccin-mocha' },
    },
  },
  {
    id: 'latte',
    name: 'Catppuccin Latte',
    mode: 'light',
    sky: ['#dce0e8', '#e6e1f2', '#eff1f5'],
    def: {
      label: 'Catppuccin Latte',
      only: 'light',
      roles: { accent: '#8839ef', danger: '#d20f39', success: '#40a02b', warning: '#df8e1d', pro: '#1e66f5' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#e6e9ef',
            'surface-1': '#eff1f5',
            'surface-2': '#f4f5f8',
            'surface-3': '#f4f5f8',
            'text-primary': '#3d3f57',
            'text-secondary': '#555870',
            'text-muted': '#5f6278',
          },
        },
        git: { added: '#40a02b', removed: '#d20f39', modified: '#df8e1d', merged: '#8839ef', closed: '#d20f39', conflicting: '#fe640b', draft: '#7c7f93' },
      },
      codeTheme: { light: 'catppuccin-latte' },
    },
  },
  {
    id: 'nord',
    name: 'Nord',
    mode: 'dark',
    sky: ['#242933', '#2f3a4d', '#2e3440'],
    def: {
      label: 'Nord',
      only: 'dark',
      roles: { accent: '#88c0d0', danger: '#bf616a', success: '#a3be8c', warning: '#ebcb8b', pro: '#b48ead' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#2e3440',
            'surface-1': '#313845',
            'surface-2': '#333a47',
            'surface-3': '#353d4a',
            'text-primary': '#eceff4',
            'text-secondary': '#d8dee9',
            'text-muted': '#aab4c6',
          },
        },
        git: { added: '#a3be8c', removed: '#bf616a', modified: '#ebcb8b', merged: '#b48ead', closed: '#bf616a', conflicting: '#d08770', draft: '#81a1c1' },
      },
      codeTheme: { dark: 'nord' },
    },
  },
  {
    id: 'dracula',
    name: 'Dracula',
    mode: 'dark',
    sky: ['#1e1f29', '#34304a', '#282a36'],
    def: {
      label: 'Dracula',
      only: 'dark',
      roles: { accent: '#bd93f9', danger: '#ff5555', success: '#50fa7b', warning: '#ffb86c', pro: '#ff79c6' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#282a36',
            'surface-1': '#2c2e3b',
            'surface-2': '#303240',
            'surface-3': '#343645',
            'text-primary': '#f8f8f2',
            'text-secondary': '#d6d6e2',
            'text-muted': '#a9afd1',
          },
        },
        git: { added: '#50fa7b', removed: '#ff5555', modified: '#ffb86c', merged: '#bd93f9', closed: '#ff5555', conflicting: '#ff79c6', draft: '#8e96c0' },
      },
      codeTheme: { dark: 'dracula' },
    },
  },
  {
    id: 'tokyo-night',
    name: 'Tokyo Night',
    mode: 'dark',
    sky: ['#13141c', '#232846', '#1a1b26'],
    def: {
      label: 'Tokyo Night',
      only: 'dark',
      roles: { accent: '#7aa2f7', danger: '#f7768e', success: '#9ece6a', warning: '#e0af68', pro: '#bb9af7' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#1a1b26',
            'surface-1': '#1e202e',
            'surface-2': '#222536',
            'surface-3': '#262a3a',
            'text-primary': '#c0caf5',
            'text-secondary': '#a9b1d6',
            'text-muted': '#8f98bd',
          },
        },
        git: { added: '#9ece6a', removed: '#f7768e', modified: '#e0af68', merged: '#bb9af7', closed: '#f7768e', conflicting: '#ff9e64', draft: '#7c85ad' },
      },
      codeTheme: { dark: 'tokyo-night' },
    },
  },
  {
    id: 'gruvbox',
    name: 'Gruvbox Dark',
    mode: 'dark',
    sky: ['#1d2021', '#3a3228', '#282828'],
    def: {
      label: 'Gruvbox Dark',
      only: 'dark',
      roles: { accent: '#fe8019', danger: '#fb4934', success: '#b8bb26', warning: '#fabd2f', pro: '#d3869b' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#282828',
            'surface-1': '#2c2b2a',
            'surface-2': '#302f2d',
            'surface-3': '#343230',
            'text-primary': '#ebdbb2',
            'text-secondary': '#d5c4a1',
            'text-muted': '#a89984',
          },
        },
        git: { added: '#b8bb26', removed: '#fb4934', modified: '#fabd2f', merged: '#d3869b', closed: '#fb4934', conflicting: '#fe8019', draft: '#928374' },
      },
      codeTheme: { dark: 'gruvbox-dark-medium' },
    },
  },
  {
    id: 'rose-pine',
    name: 'Rosé Pine',
    mode: 'dark',
    sky: ['#12101c', '#2b2234', '#191724'],
    def: {
      label: 'Rosé Pine',
      only: 'dark',
      roles: { accent: '#ebbcba', danger: '#eb6f92', success: '#8fc7a0', warning: '#f6c177', pro: '#c4a7e7' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#191724',
            'surface-1': '#1d1b2a',
            'surface-2': '#211f2f',
            'surface-3': '#252336',
            'text-primary': '#e0def4',
            'text-secondary': '#c8c5de',
            'text-muted': '#908caa',
          },
        },
        git: { added: '#8fc7a0', removed: '#eb6f92', modified: '#f6c177', merged: '#c4a7e7', closed: '#eb6f92', conflicting: '#ebbcba', draft: '#6e6a86' },
      },
      codeTheme: { dark: 'rose-pine' },
    },
  },
  {
    id: 'everforest',
    name: 'Everforest',
    mode: 'dark',
    sky: ['#1e2326', '#2b3a35', '#272e33'],
    def: {
      label: 'Everforest',
      only: 'dark',
      roles: { accent: '#83c092', danger: '#e67e80', success: '#a7c080', warning: '#dbbc7f', pro: '#d699b6' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#272e33',
            'surface-1': '#2a3237',
            'surface-2': '#2d353a',
            'surface-3': '#2f383d',
            'text-primary': '#e0d5b8',
            'text-secondary': '#c4b99f',
            'text-muted': '#a3afa6',
          },
        },
        git: { added: '#a7c080', removed: '#e67e80', modified: '#dbbc7f', merged: '#d699b6', closed: '#e67e80', conflicting: '#e69875', draft: '#859289' },
      },
      codeTheme: { dark: 'everforest-dark' },
    },
  },
  {
    id: 'solarized-dark',
    name: 'Solarized Dark',
    mode: 'dark',
    sky: ['#00212b', '#073642', '#002b36'],
    def: {
      label: 'Solarized Dark',
      only: 'dark',
      roles: { accent: '#268bd2', danger: '#dc322f', success: '#859900', warning: '#b58900', pro: '#6c71c4' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#002b36',
            'surface-1': '#03303b',
            'surface-2': '#06353f',
            'surface-3': '#093a44',
            'text-primary': '#eee8d5',
            'text-secondary': '#b5bdbc',
            'text-muted': '#93a1a1',
          },
        },
        git: { added: '#859900', removed: '#dc322f', modified: '#b58900', merged: '#6c71c4', closed: '#dc322f', conflicting: '#cb4b16', draft: '#657b83' },
      },
      codeTheme: { dark: 'solarized-dark' },
    },
  },
  {
    id: 'solarized-light',
    name: 'Solarized Light',
    mode: 'light',
    sky: ['#e6dfc8', '#f1e9d0', '#fdf6e3'],
    def: {
      label: 'Solarized Light',
      only: 'light',
      roles: { accent: '#268bd2', danger: '#dc322f', success: '#859900', warning: '#b58900', pro: '#6c71c4' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#eee8d5',
            'surface-1': '#f5eedb',
            'surface-2': '#fdf6e3',
            'surface-3': '#fdf6e3',
            'text-primary': '#073642',
            'text-secondary': '#3f5a63',
            'text-muted': '#506870',
          },
        },
        git: { added: '#859900', removed: '#dc322f', modified: '#b58900', merged: '#6c71c4', closed: '#dc322f', conflicting: '#cb4b16', draft: '#657b83' },
      },
      codeTheme: { light: 'solarized-light' },
    },
  },
  {
    id: 'frappe',
    name: 'Catppuccin Frappé',
    mode: 'dark',
    sky: ['#1e2030', '#35324e', '#292c3c'],
    def: {
      label: 'Catppuccin Frappé',
      only: 'dark',
      roles: { accent: '#ca9ee6', danger: '#e78284', success: '#a6d189', warning: '#e5c890', pro: '#8caaee' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#292c3c',
            'surface-1': '#2d3040',
            'surface-2': '#303444',
            'surface-3': '#343748',
            'text-primary': '#c6d0f5',
            'text-secondary': '#b5bfe2',
            'text-muted': '#a5adce',
          },
        },
        git: { added: '#a6d189', removed: '#e78284', modified: '#e5c890', merged: '#ca9ee6', closed: '#e78284', conflicting: '#ef9f76', draft: '#949cbb' },
      },
      codeTheme: { dark: 'catppuccin-frappe' },
    },
  },
  {
    id: 'macchiato',
    name: 'Catppuccin Macchiato',
    mode: 'dark',
    sky: ['#181926', '#2e2a48', '#24273a'],
    def: {
      label: 'Catppuccin Macchiato',
      only: 'dark',
      roles: { accent: '#c6a0f6', danger: '#ed8796', success: '#a6da95', warning: '#eed49f', pro: '#8aadf4' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#24273a',
            'surface-1': '#282b3e',
            'surface-2': '#2b2e42',
            'surface-3': '#2e3145',
            'text-primary': '#cad3f5',
            'text-secondary': '#b8c0e0',
            'text-muted': '#a5adcb',
          },
        },
        git: { added: '#a6da95', removed: '#ed8796', modified: '#eed49f', merged: '#c6a0f6', closed: '#ed8796', conflicting: '#f5a97f', draft: '#939ab7' },
      },
      codeTheme: { dark: 'catppuccin-macchiato' },
    },
  },
  {
    id: 'one-dark',
    name: 'One Dark',
    mode: 'dark',
    sky: ['#1b1e24', '#2b3140', '#282c34'],
    def: {
      label: 'One Dark',
      only: 'dark',
      roles: { accent: '#61afef', danger: '#e06c75', success: '#98c379', warning: '#e5c07b', pro: '#c678dd' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#282c34',
            'surface-1': '#2c313a',
            'surface-2': '#2f343e',
            'surface-3': '#323742',
            'text-primary': '#d7dae0',
            'text-secondary': '#abb2bf',
            'text-muted': '#9ca3b0',
          },
        },
        git: { added: '#98c379', removed: '#e06c75', modified: '#e5c07b', merged: '#c678dd', closed: '#e06c75', conflicting: '#d19a66', draft: '#7f848e' },
      },
      codeTheme: { dark: 'one-dark-pro' },
    },
  },
  {
    id: 'kanagawa',
    name: 'Kanagawa',
    mode: 'dark',
    sky: ['#16161d', '#2a2a37', '#1f1f28'],
    def: {
      label: 'Kanagawa',
      only: 'dark',
      roles: { accent: '#7e9cd8', danger: '#e46876', success: '#98bb6c', warning: '#e6c384', pro: '#957fb8' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#1f1f28',
            'surface-1': '#23232d',
            'surface-2': '#262631',
            'surface-3': '#292935',
            'text-primary': '#dcd7ba',
            'text-secondary': '#c8c093',
            'text-muted': '#a6a48c',
          },
        },
        git: { added: '#98bb6c', removed: '#e46876', modified: '#e6c384', merged: '#957fb8', closed: '#e46876', conflicting: '#ffa066', draft: '#727169' },
      },
      codeTheme: { dark: 'kanagawa-wave' },
    },
  },
  {
    id: 'ayu-mirage',
    name: 'Ayu Mirage',
    mode: 'dark',
    sky: ['#171b24', '#232b3d', '#1f2430'],
    def: {
      label: 'Ayu Mirage',
      only: 'dark',
      roles: { accent: '#ffcc66', danger: '#f28779', success: '#bae67e', warning: '#ffad66', pro: '#d4bfff' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#1f2430',
            'surface-1': '#232834',
            'surface-2': '#262b37',
            'surface-3': '#292e3a',
            'text-primary': '#d9d7ce',
            'text-secondary': '#b8b9b8',
            'text-muted': '#8f96a6',
          },
        },
        git: { added: '#bae67e', removed: '#f28779', modified: '#ffcc66', merged: '#d4bfff', closed: '#f28779', conflicting: '#ffad66', draft: '#707a8c' },
      },
      codeTheme: { dark: 'ayu-mirage' },
    },
  },
  {
    id: 'github-dark',
    name: 'GitHub Dark',
    mode: 'dark',
    sky: ['#010409', '#12203a', '#0d1117'],
    def: {
      label: 'GitHub Dark',
      only: 'dark',
      roles: { accent: '#58a6ff', danger: '#f85149', success: '#3fb950', warning: '#d29922', pro: '#bc8cff' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#0d1117',
            'surface-1': '#11161d',
            'surface-2': '#151b23',
            'surface-3': '#191f27',
            'text-primary': '#e6edf3',
            'text-secondary': '#c1c9d2',
            'text-muted': '#8b949e',
          },
        },
        git: { added: '#3fb950', removed: '#f85149', modified: '#d29922', merged: '#a371f7', closed: '#f85149', conflicting: '#db6d28', draft: '#6e7681' },
      },
      codeTheme: { dark: 'github-dark' },
    },
  },
  {
    id: 'github-light',
    name: 'GitHub Light',
    mode: 'light',
    sky: ['#e6ebf1', '#e8f0fb', '#f6f8fa'],
    def: {
      label: 'GitHub Light',
      only: 'light',
      roles: { accent: '#0969da', danger: '#cf222e', success: '#1a7f37', warning: '#9a6700', pro: '#8250df' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#eff2f5',
            'surface-1': '#f6f8fa',
            'surface-2': '#fbfcfd',
            'surface-3': '#fbfcfd',
            'text-primary': '#1f2328',
            'text-secondary': '#424a53',
            'text-muted': '#59636e',
          },
        },
        git: { added: '#1a7f37', removed: '#cf222e', modified: '#9a6700', merged: '#8250df', closed: '#cf222e', conflicting: '#bc4c00', draft: '#59636e' },
      },
      codeTheme: { light: 'github-light' },
    },
  },
  {
    id: 'gruvbox-light',
    name: 'Gruvbox Light',
    mode: 'light',
    sky: ['#e3d3a5', '#efdfae', '#fbf1c7'],
    def: {
      label: 'Gruvbox Light',
      only: 'light',
      roles: { accent: '#d65d0e', danger: '#cc241d', success: '#79740e', warning: '#b57614', pro: '#8f3f71' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#ebdbb2',
            'surface-1': '#f2e5bc',
            'surface-2': '#fbf1c7',
            'surface-3': '#fbf1c7',
            'text-primary': '#3c3836',
            'text-secondary': '#504945',
            'text-muted': '#5f554e',
          },
        },
        git: { added: '#79740e', removed: '#cc241d', modified: '#b57614', merged: '#8f3f71', closed: '#cc241d', conflicting: '#af3a03', draft: '#7c6f64' },
      },
      codeTheme: { light: 'gruvbox-light-medium' },
    },
  },
  {
    id: 'rose-pine-dawn',
    name: 'Rosé Pine Dawn',
    mode: 'light',
    sky: ['#ebe0d6', '#f4e6e4', '#faf4ed'],
    def: {
      label: 'Rosé Pine Dawn',
      only: 'light',
      roles: { accent: '#d7827e', danger: '#b4637a', success: '#5f8f6b', warning: '#ea9d34', pro: '#907aa9' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#f2e9e1',
            'surface-1': '#f8f1ea',
            'surface-2': '#fffaf3',
            'surface-3': '#fffaf3',
            'text-primary': '#463f64',
            'text-secondary': '#5c5879',
            'text-muted': '#625e7e',
          },
        },
        git: { added: '#5f8f6b', removed: '#b4637a', modified: '#ea9d34', merged: '#907aa9', closed: '#b4637a', conflicting: '#d7827e', draft: '#9893a5' },
      },
      codeTheme: { light: 'rose-pine-dawn' },
    },
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    mode: 'dark',
    sky: ['#010e1a', '#0b2a4a', '#011627'],
    def: {
      label: 'Night Owl',
      only: 'dark',
      roles: { accent: '#82aaff', danger: '#ef5350', success: '#addb67', warning: '#ecc48d', pro: '#c792ea' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#011627',
            'surface-1': '#041b2d',
            'surface-2': '#072033',
            'surface-3': '#0a2438',
            'text-primary': '#d6deeb',
            'text-secondary': '#b2c0d6',
            'text-muted': '#8da3b8',
          },
        },
        git: { added: '#addb67', removed: '#ef5350', modified: '#ecc48d', merged: '#c792ea', closed: '#ef5350', conflicting: '#f78c6c', draft: '#637777' },
      },
      codeTheme: { dark: 'night-owl' },
    },
  },
  {
    id: 'synthwave',
    name: "Synthwave '84",
    mode: 'dark',
    sky: ['#1a1226', '#3a2060', '#241b2f'],
    def: {
      label: "Synthwave '84",
      only: 'dark',
      roles: { accent: '#ff7edb', danger: '#fe4450', success: '#72f1b8', warning: '#fede5d', pro: '#36f9f6' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#241b2f',
            'surface-1': '#281f34',
            'surface-2': '#2c2338',
            'surface-3': '#30273c',
            'text-primary': '#f4eef8',
            'text-secondary': '#d1c8e0',
            'text-muted': '#a99cbf',
          },
        },
        git: { added: '#72f1b8', removed: '#fe4450', modified: '#fede5d', merged: '#ff7edb', closed: '#fe4450', conflicting: '#f97e72', draft: '#848bbd' },
      },
      codeTheme: { dark: 'synthwave-84' },
    },
  },
  {
    id: 'monokai',
    name: 'Monokai',
    mode: 'dark',
    sky: ['#1c1d19', '#34352a', '#272822'],
    def: {
      label: 'Monokai',
      only: 'dark',
      roles: { accent: '#66d9ef', danger: '#f92672', success: '#a6e22e', warning: '#e6db74', pro: '#ae81ff' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#272822',
            'surface-1': '#2b2c26',
            'surface-2': '#2e2f29',
            'surface-3': '#31322c',
            'text-primary': '#f8f8f2',
            'text-secondary': '#d6d6ca',
            'text-muted': '#a9a690',
          },
        },
        git: { added: '#a6e22e', removed: '#f92672', modified: '#e6db74', merged: '#ae81ff', closed: '#f92672', conflicting: '#fd971f', draft: '#75715e' },
      },
      codeTheme: { dark: 'monokai' },
    },
  },
  {
    id: 'amber-crt',
    name: 'Amber CRT',
    mode: 'dark',
    sky: ['#0b0804', '#2a1c08', '#120e08'],
    def: {
      label: 'Amber CRT',
      only: 'dark',
      roles: { accent: '#ffb000', danger: '#ff6b4a', success: '#8fcf5a', warning: '#ffd23f', pro: '#c9a0ff' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#120e08',
            'surface-1': '#16110a',
            'surface-2': '#19140c',
            'surface-3': '#1d170e',
            'text-primary': '#ffd48a',
            'text-secondary': '#e0b070',
            'text-muted': '#b58d52',
          },
        },
        git: { added: '#8fcf5a', removed: '#ff6b4a', modified: '#ffd23f', merged: '#c9a0ff', closed: '#ff6b4a', conflicting: '#ff9a3c', draft: '#8a6a3a' },
      },
    },
  },
  {
    id: 'tokyo-night-storm',
    name: 'Tokyo Night Storm',
    mode: 'dark',
    sky: ['#16192a', '#2a3050', '#1f2335'],
    def: {
      label: 'Tokyo Night Storm',
      only: 'dark',
      roles: { accent: '#7aa2f7', danger: '#f7768e', success: '#9ece6a', warning: '#e0af68', pro: '#bb9af7' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#1f2335',
            'surface-1': '#232739',
            'surface-2': '#272b3d',
            'surface-3': '#2a2f41',
            'text-primary': '#c0caf5',
            'text-secondary': '#a9b1d6',
            'text-muted': '#9aa3c9',
          },
        },
        git: { added: '#9ece6a', removed: '#f7768e', modified: '#e0af68', merged: '#bb9af7', closed: '#f7768e', conflicting: '#ff9e64', draft: '#7c85ad' },
      },
      codeTheme: { dark: 'tokyo-night' },
    },
  },
  {
    id: 'nightfox',
    name: 'Nightfox',
    mode: 'dark',
    sky: ['#131a24', '#22304a', '#192330'],
    def: {
      label: 'Nightfox',
      only: 'dark',
      roles: { accent: '#719cd6', danger: '#c94f6d', success: '#81b29a', warning: '#dbc074', pro: '#9d79d6' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#192330',
            'surface-1': '#1d2735',
            'surface-2': '#202a38',
            'surface-3': '#242e3c',
            'text-primary': '#cdcecf',
            'text-secondary': '#aeafb0',
            'text-muted': '#9aa1ab',
          },
        },
        git: { added: '#81b29a', removed: '#c94f6d', modified: '#dbc074', merged: '#9d79d6', closed: '#c94f6d', conflicting: '#f4a261', draft: '#738091' },
      },
    },
  },
  {
    id: 'oxocarbon',
    name: 'Oxocarbon',
    mode: 'dark',
    sky: ['#0b0b0b', '#262a35', '#161616'],
    def: {
      label: 'Oxocarbon',
      only: 'dark',
      roles: { accent: '#78a9ff', danger: '#fa4d56', success: '#42be65', warning: '#f1c21b', pro: '#be95ff' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#161616',
            'surface-1': '#1b1b1b',
            'surface-2': '#1f1f1f',
            'surface-3': '#232323',
            'text-primary': '#f2f4f8',
            'text-secondary': '#dde1e6',
            'text-muted': '#a8a8a8',
          },
        },
        git: { added: '#42be65', removed: '#fa4d56', modified: '#f1c21b', merged: '#be95ff', closed: '#fa4d56', conflicting: '#ff832b', draft: '#8d8d8d' },
      },
    },
  },
  {
    id: 'material-ocean',
    name: 'Material Ocean',
    mode: 'dark',
    sky: ['#090b10', '#1a2040', '#0f111a'],
    def: {
      label: 'Material Ocean',
      only: 'dark',
      roles: { accent: '#82aaff', danger: '#ff5370', success: '#c3e88d', warning: '#ffcb6b', pro: '#c792ea' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#0f111a',
            'surface-1': '#131620',
            'surface-2': '#171a25',
            'surface-3': '#1b1e29',
            'text-primary': '#cdd3f0',
            'text-secondary': '#a6accd',
            'text-muted': '#8f95b8',
          },
        },
        git: { added: '#c3e88d', removed: '#ff5370', modified: '#ffcb6b', merged: '#c792ea', closed: '#ff5370', conflicting: '#f78c6c', draft: '#717cb4' },
      },
      codeTheme: { dark: 'material-theme-ocean' },
    },
  },
  {
    id: 'zenburn',
    name: 'Zenburn',
    mode: 'dark',
    sky: ['#232323', '#3a3a35', '#2f2f2f'],
    def: {
      label: 'Zenburn',
      only: 'dark',
      roles: { accent: '#8cd0d3', danger: '#cc9393', success: '#7f9f7f', warning: '#f0dfaf', pro: '#dc8cc3' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#2f2f2f',
            'surface-1': '#333333',
            'surface-2': '#363636',
            'surface-3': '#393939',
            'text-primary': '#e6e6d6',
            'text-secondary': '#dcdccc',
            'text-muted': '#aeae9e',
          },
        },
        git: { added: '#7f9f7f', removed: '#cc9393', modified: '#f0dfaf', merged: '#dc8cc3', closed: '#cc9393', conflicting: '#dfaf8f', draft: '#8f8f8f' },
      },
    },
  },
  {
    id: 'deep-sea',
    name: 'Deep Sea',
    mode: 'dark',
    sky: ['#06101a', '#0f3042', '#0a1822'],
    def: {
      label: 'Deep Sea',
      only: 'dark',
      roles: { accent: '#4fd1c5', danger: '#ff7d7d', success: '#7bd88f', warning: '#f5c76a', pro: '#a78bfa' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#0a1822',
            'surface-1': '#0d1c27',
            'surface-2': '#10202b',
            'surface-3': '#132430',
            'text-primary': '#d4eaf0',
            'text-secondary': '#adc8d0',
            'text-muted': '#86a5b0',
          },
        },
        git: { added: '#7bd88f', removed: '#ff7d7d', modified: '#f5c76a', merged: '#a78bfa', closed: '#ff7d7d', conflicting: '#ff9f6b', draft: '#5f808c' },
      },
    },
  },
  {
    id: 'mint-chocolate',
    name: 'Mint Chocolate',
    mode: 'dark',
    sky: ['#120d0a', '#2f221b', '#1b1410'],
    def: {
      label: 'Mint Chocolate',
      only: 'dark',
      roles: { accent: '#7ee0c0', danger: '#ff7a6b', success: '#9be07a', warning: '#f3c46b', pro: '#e69ac1' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#1b1410',
            'surface-1': '#1f1813',
            'surface-2': '#231b16',
            'surface-3': '#271e19',
            'text-primary': '#f1e3d8',
            'text-secondary': '#d3c0b2',
            'text-muted': '#ac9788',
          },
        },
        git: { added: '#9be07a', removed: '#ff7a6b', modified: '#f3c46b', merged: '#e69ac1', closed: '#ff7a6b', conflicting: '#ff9f6b', draft: '#8a7567' },
      },
    },
  },
  {
    id: 'ayu-light',
    name: 'Ayu Light',
    mode: 'light',
    sky: ['#e8eaec', '#f4ebdd', '#fcfcfc'],
    def: {
      label: 'Ayu Light',
      only: 'light',
      roles: { accent: '#f2882b', danger: '#e65050', success: '#6a9a00', warning: '#d99a25', pro: '#a37acc' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#f1f2f3',
            'surface-1': '#f8f9fa',
            'surface-2': '#fcfcfc',
            'surface-3': '#fcfcfc',
            'text-primary': '#3a3e43',
            'text-secondary': '#51565c',
            'text-muted': '#5f656c',
          },
        },
        git: { added: '#6a9a00', removed: '#e65050', modified: '#d99a25', merged: '#a37acc', closed: '#e65050', conflicting: '#f2882b', draft: '#8a9199' },
      },
      codeTheme: { light: 'ayu-light' },
    },
  },
  {
    id: 'everforest-light',
    name: 'Everforest Light',
    mode: 'light',
    sky: ['#e6e2cc', '#ede8cc', '#fdf6e3'],
    def: {
      label: 'Everforest Light',
      only: 'light',
      roles: { accent: '#35a77c', danger: '#f85552', success: '#8da101', warning: '#dfa000', pro: '#df69ba' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#efebd4',
            'surface-1': '#f4f0d9',
            'surface-2': '#fdf6e3',
            'surface-3': '#fdf6e3',
            'text-primary': '#3b464d',
            'text-secondary': '#4f5d65',
            'text-muted': '#5a666c',
          },
        },
        git: { added: '#8da101', removed: '#f85552', modified: '#dfa000', merged: '#df69ba', closed: '#f85552', conflicting: '#f57d26', draft: '#939f91' },
      },
      codeTheme: { light: 'everforest-light' },
    },
  },
  {
    id: 'nord-snow',
    name: 'Nord Snow',
    mode: 'light',
    sky: ['#d8dee9', '#e1e7f1', '#eceff4'],
    def: {
      label: 'Nord Snow',
      only: 'light',
      roles: { accent: '#5e81ac', danger: '#bf616a', success: '#7a9b5e', warning: '#d08f4a', pro: '#a27a9c' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#e5e9f0',
            'surface-1': '#eceff4',
            'surface-2': '#f4f6fa',
            'surface-3': '#f4f6fa',
            'text-primary': '#2e3440',
            'text-secondary': '#434c5e',
            'text-muted': '#4f5a6e',
          },
        },
        git: { added: '#7a9b5e', removed: '#bf616a', modified: '#d08f4a', merged: '#a27a9c', closed: '#bf616a', conflicting: '#d08770', draft: '#7b88a1' },
      },
    },
  },
  {
    id: 'paper',
    name: 'Paper Notebook',
    mode: 'light',
    sky: ['#e6dcc6', '#f0e6d0', '#faf5e9'],
    def: {
      label: 'Paper Notebook',
      only: 'light',
      roles: { accent: '#2f5d8c', danger: '#b3392f', success: '#4e7d3a', warning: '#a86f14', pro: '#6d4f94' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#efe6d3',
            'surface-1': '#f4ecdc',
            'surface-2': '#faf5e9',
            'surface-3': '#faf5e9',
            'text-primary': '#2a241d',
            'text-secondary': '#544a3d',
            'text-muted': '#6a5f50',
          },
        },
        git: { added: '#4e7d3a', removed: '#b3392f', modified: '#a86f14', merged: '#6d4f94', closed: '#b3392f', conflicting: '#c4561c', draft: '#8a7e6c' },
      },
    },
  },
  {
    id: 'sakura',
    name: 'Sakura',
    mode: 'light',
    sky: ['#efd9e0', '#f6e6ea', '#fdf6f8'],
    def: {
      label: 'Sakura',
      only: 'light',
      roles: { accent: '#c2527a', danger: '#c23b4b', success: '#5e8f6a', warning: '#c58a2b', pro: '#7a62b5' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#f3e4e8',
            'surface-1': '#f9eef1',
            'surface-2': '#fdf6f8',
            'surface-3': '#fdf6f8',
            'text-primary': '#3a2831',
            'text-secondary': '#573f49',
            'text-muted': '#69505a',
          },
        },
        git: { added: '#5e8f6a', removed: '#c23b4b', modified: '#c58a2b', merged: '#7a62b5', closed: '#c23b4b', conflicting: '#d9693d', draft: '#9a8189' },
      },
    },
  },
]
