// Looks adapted from VS Code color themes. Each entry's `credit` names the
// extension it comes from, its author, its repository and its license. The
// colors were read from the theme's published color file; the layout (surfaces,
// text steps, backdrop) is this gallery's own.

/** @type {import('./themes.js').Look[]} */
export const IMPORTED = [
  {
    "id": "winter-is-coming-dark-blue",
    "name": "Winter is Coming (Dark Blue)",
    "mode": "dark",
    "sky": [
      "#000910",
      "#012237",
      "#011627"
    ],
    "def": {
      "label": "Winter is Coming (Dark Blue)",
      "only": "dark",
      "roles": {
        "accent": "#0476a3",
        "danger": "#ef5350",
        "success": "#22da6e",
        "warning": "#ffca28",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#011627",
            "surface-1": "#011a2f",
            "surface-2": "#011f37",
            "surface-3": "#02233e",
            "text-primary": "#a7dbf7",
            "text-secondary": "#82b0c9",
            "text-muted": "#6c95ad"
          }
        },
        "git": {
          "added": "#22da6e",
          "removed": "#ef5350",
          "modified": "#ffca28",
          "merged": "#c792ea",
          "closed": "#ef5350",
          "conflicting": "#f0a35a",
          "draft": "#4c6f85"
        }
      }
    },
    "credit": {
      "extension": "johnpapa.winteriscoming",
      "author": "johnpapa",
      "repo": "johnpapa/vscode-winteriscoming",
      "license": "MIT"
    }
  },
  {
    "id": "winter-is-coming-light",
    "name": "Winter is Coming (Light)",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#dbe5e9",
      "#ffffff"
    ],
    "def": {
      "label": "Winter is Coming (Light)",
      "only": "light",
      "roles": {
        "accent": "#03648a",
        "danger": "#ef5350",
        "success": "#08916a",
        "warning": "#c5a332",
        "pro": "#7c4dff"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#133c69",
            "text-secondary": "#37597f",
            "text-muted": "#4d6c8d"
          }
        },
        "git": {
          "added": "#08916a",
          "removed": "#ef5350",
          "modified": "#c5a332",
          "merged": "#7c4dff",
          "closed": "#ef5350",
          "conflicting": "#c76a1c",
          "draft": "#7f94ab"
        }
      }
    },
    "credit": {
      "extension": "johnpapa.winteriscoming",
      "author": "johnpapa",
      "repo": "johnpapa/vscode-winteriscoming",
      "license": "MIT"
    }
  },
  {
    "id": "one-monokai",
    "name": "One Monokai",
    "mode": "dark",
    "sky": [
      "#1b1d23",
      "#2d384e",
      "#282c34"
    ],
    "def": {
      "label": "One Monokai",
      "only": "dark",
      "roles": {
        "accent": "#528bff",
        "danger": "#c24038",
        "success": "#98c379",
        "warning": "#e5c07b",
        "pro": "#c678dd"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#282c34",
            "surface-1": "#2c3039",
            "surface-2": "#2f343d",
            "surface-3": "#323741",
            "text-primary": "#e8eaed",
            "text-secondary": "#bec0c5",
            "text-muted": "#a3a6ab"
          }
        },
        "git": {
          "added": "#98c379",
          "removed": "#c24038",
          "modified": "#e5c07b",
          "merged": "#c678dd",
          "closed": "#c24038",
          "conflicting": "#f0a35a",
          "draft": "#7e8187"
        }
      }
    },
    "credit": {
      "extension": "azemoh.one-monokai",
      "author": "azemoh",
      "repo": "azemoh/vscode-one-monokai",
      "license": "MIT"
    }
  },
  {
    "id": "palenight-theme",
    "name": "Palenight Theme",
    "mode": "dark",
    "sky": [
      "#1d202c",
      "#373651",
      "#292d3e"
    ],
    "def": {
      "label": "Palenight Theme",
      "only": "dark",
      "roles": {
        "accent": "#9575cd",
        "danger": "#ef5350",
        "success": "#a9c77d",
        "warning": "#ffca28",
        "pro": "#82aaff"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#292d3e",
            "surface-1": "#2c3143",
            "surface-2": "#2f3448",
            "surface-3": "#32374c",
            "text-primary": "#eaedf1",
            "text-secondary": "#c0c3ca",
            "text-muted": "#a5a8b1"
          }
        },
        "git": {
          "added": "#a9c77d",
          "removed": "#ef5350",
          "modified": "#ffca28",
          "merged": "#82aaff",
          "closed": "#ef5350",
          "conflicting": "#f0a35a",
          "draft": "#80838f"
        }
      }
    },
    "credit": {
      "extension": "whizkydee.material-palenight-theme",
      "author": "whizkydee",
      "repo": "whizkydee/vscode-palenight-theme",
      "license": "MIT"
    }
  },
  {
    "id": "cobalt2",
    "name": "Cobalt2",
    "mode": "dark",
    "sky": [
      "#112432",
      "#164061",
      "#193549"
    ],
    "def": {
      "label": "Cobalt2",
      "only": "dark",
      "roles": {
        "accent": "#058aff",
        "danger": "#a22929",
        "success": "#3ad900",
        "warning": "#ffc600",
        "pro": "#fb94ff"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#193549",
            "surface-1": "#1b394f",
            "surface-2": "#1d3e55",
            "surface-3": "#1f425a",
            "text-primary": "#ffffff",
            "text-secondary": "#ccd3d7",
            "text-muted": "#adb7be"
          }
        },
        "git": {
          "added": "#3ad900",
          "removed": "#a22929",
          "modified": "#ffc600",
          "merged": "#fb94ff",
          "closed": "#a22929",
          "conflicting": "#ff7200",
          "draft": "#81909b"
        }
      }
    },
    "credit": {
      "extension": "wesbos.theme-cobalt2",
      "author": "wesbos",
      "repo": "wesbos/cobalt2-vscode",
      "license": "MIT"
    }
  },
  {
    "id": "andromeda",
    "name": "Andromeda",
    "mode": "dark",
    "sky": [
      "#16181d",
      "#1e3f42",
      "#23262e"
    ],
    "def": {
      "label": "Andromeda",
      "only": "dark",
      "roles": {
        "accent": "#00e8c5",
        "danger": "#fc644d",
        "success": "#96e072",
        "warning": "#ff9f2e",
        "pro": "#ff00aa"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#23262e",
            "surface-1": "#272a33",
            "surface-2": "#2a2e37",
            "surface-3": "#2d313b",
            "text-primary": "#e4dfe6",
            "text-secondary": "#b9b6be",
            "text-muted": "#9f9da5"
          }
        },
        "git": {
          "added": "#96e072",
          "removed": "#fc644d",
          "modified": "#ff9f2e",
          "merged": "#ff00aa",
          "closed": "#fc644d",
          "conflicting": "#f0a35a",
          "draft": "#7a7981"
        }
      }
    },
    "credit": {
      "extension": "EliverLara.andromeda",
      "author": "EliverLara",
      "repo": "EliverLara/Andromeda",
      "license": "MIT"
    }
  },
  {
    "id": "atom-one-light",
    "name": "Atom One Light",
    "mode": "light",
    "sky": [
      "#e3e3e3",
      "#dfe2ef",
      "#fafafa"
    ],
    "def": {
      "label": "Atom One Light",
      "only": "light",
      "roles": {
        "accent": "#5871ef",
        "danger": "#c8372d",
        "success": "#3f8f3a",
        "warning": "#b07a10",
        "pro": "#7a4fb5"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#efefef",
            "surface-1": "#f5f5f5",
            "surface-2": "#fafafa",
            "surface-3": "#fafafa",
            "text-primary": "#383a42",
            "text-secondary": "#55575d",
            "text-muted": "#606268"
          }
        },
        "git": {
          "added": "#3f8f3a",
          "removed": "#c8372d",
          "modified": "#b07a10",
          "merged": "#7a4fb5",
          "closed": "#c8372d",
          "conflicting": "#c76a1c",
          "draft": "#8b8c90"
        }
      }
    },
    "credit": {
      "extension": "akamud.vscode-theme-onelight",
      "author": "akamud",
      "repo": "akamud/vscode-theme-onelight",
      "license": "MIT"
    }
  },
  {
    "id": "noctis",
    "name": "Noctis",
    "mode": "dark",
    "sky": [
      "#020f10",
      "#043438",
      "#052529"
    ],
    "def": {
      "label": "Noctis",
      "only": "dark",
      "roles": {
        "accent": "#009999",
        "danger": "#e34e1c",
        "success": "#16b673",
        "warning": "#e69533",
        "pro": "#df769b"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#052529",
            "surface-1": "#062c30",
            "surface-2": "#073238",
            "surface-3": "#08383e",
            "text-primary": "#dae6e7",
            "text-secondary": "#abbbbd",
            "text-muted": "#8ea1a3"
          }
        },
        "git": {
          "added": "#16b673",
          "removed": "#e34e1c",
          "modified": "#e69533",
          "merged": "#df769b",
          "closed": "#e34e1c",
          "conflicting": "#e4b781",
          "draft": "#657c7f"
        }
      }
    },
    "credit": {
      "extension": "liviuschera.noctis",
      "author": "liviuschera",
      "repo": "liviuschera/noctis",
      "license": "MIT"
    }
  },
  {
    "id": "noctis-lux",
    "name": "Noctis Lux",
    "mode": "light",
    "sky": [
      "#fce8c0",
      "#e4e7d0",
      "#fef8ec"
    ],
    "def": {
      "label": "Noctis Lux",
      "only": "light",
      "roles": {
        "accent": "#009494",
        "danger": "#ff4000",
        "success": "#009456",
        "warning": "#e69533",
        "pro": "#ff5792"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#fdf0d6",
            "surface-1": "#fdf4e2",
            "surface-2": "#fef8ec",
            "surface-3": "#fef8ec",
            "text-primary": "#003f47",
            "text-secondary": "#2f6062",
            "text-muted": "#416d6c"
          }
        },
        "git": {
          "added": "#009456",
          "removed": "#ff4000",
          "modified": "#e69533",
          "merged": "#ff5792",
          "closed": "#ff4000",
          "conflicting": "#e9a149",
          "draft": "#7a948c"
        }
      }
    },
    "credit": {
      "extension": "liviuschera.noctis",
      "author": "liviuschera",
      "repo": "liviuschera/noctis",
      "license": "MIT"
    }
  },
  {
    "id": "jellyfish",
    "name": "JellyFish",
    "mode": "dark",
    "sky": [
      "#000012",
      "#210031",
      "#00002c"
    ],
    "def": {
      "label": "JellyFish",
      "only": "dark",
      "roles": {
        "accent": "#ff0055",
        "danger": "#ff0000",
        "success": "#00ff22",
        "warning": "#ffa600",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#00002c",
            "surface-1": "#000034",
            "surface-2": "#00003c",
            "surface-3": "#000043",
            "text-primary": "#ffffff",
            "text-secondary": "#c7c7d1",
            "text-muted": "#9494a6"
          }
        },
        "git": {
          "added": "#00ff22",
          "removed": "#ff0000",
          "modified": "#ffa600",
          "merged": "#c792ea",
          "closed": "#ff0000",
          "conflicting": "#f0a35a",
          "draft": "#686882"
        }
      }
    },
    "credit": {
      "extension": "PawelBorkar.jellyfish",
      "author": "PawelBorkar",
      "repo": "pawelborkar/vscode-jellyfish",
      "license": "Apache-2.0"
    }
  },
  {
    "id": "darcula",
    "name": "Darcula",
    "mode": "dark",
    "sky": [
      "#151515",
      "#1f303b",
      "#242424"
    ],
    "def": {
      "label": "Darcula",
      "only": "dark",
      "roles": {
        "accent": "#007dd1",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#242424",
            "surface-1": "#282828",
            "surface-2": "#2c2c2c",
            "surface-3": "#303030",
            "text-primary": "#dedede",
            "text-secondary": "#b5b5b5",
            "text-muted": "#9c9c9c"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#787878"
        }
      }
    },
    "credit": {
      "extension": "rokoroku.vscode-theme-darcula",
      "author": "rokoroku",
      "repo": "rokoroku/vscode-theme-darcula",
      "license": "MIT"
    }
  },
  {
    "id": "vue-theme",
    "name": "Vue Theme",
    "mode": "dark",
    "sky": [
      "#001317",
      "#03464b",
      "#002b36"
    ],
    "def": {
      "label": "Vue Theme",
      "only": "dark",
      "roles": {
        "accent": "#19f9d8",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#002b36",
            "surface-1": "#00313e",
            "surface-2": "#003846",
            "surface-3": "#003e4d",
            "text-primary": "#ebebeb",
            "text-secondary": "#b7c1c3",
            "text-muted": "#97a7aa"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#6a8188"
        }
      }
    },
    "credit": {
      "extension": "mariorodeghiero.vue-theme",
      "author": "mariorodeghiero",
      "repo": "mariorodeghiero/vue-theme-vscode",
      "license": "MIT"
    }
  },
  {
    "id": "min-dark",
    "name": "Min Dark",
    "mode": "dark",
    "sky": [
      "#101010",
      "#2b303b",
      "#1f1f1f"
    ],
    "def": {
      "label": "Min Dark",
      "only": "dark",
      "roles": {
        "accent": "#7aa2f7",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#1f1f1f",
            "surface-1": "#232323",
            "surface-2": "#272727",
            "surface-3": "#2b2b2b",
            "text-primary": "#d7d7d7",
            "text-secondary": "#afafaf",
            "text-muted": "#959595"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#727272"
        }
      }
    },
    "credit": {
      "extension": "miguelsolorio.min-theme",
      "author": "miguelsolorio",
      "repo": "misolori/min-theme",
      "license": "MIT"
    }
  },
  {
    "id": "min-light",
    "name": "Min Light",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#e0e6f1",
      "#ffffff"
    ],
    "def": {
      "label": "Min Light",
      "only": "light",
      "roles": {
        "accent": "#2f6fdb",
        "danger": "#d32f2f",
        "success": "#77cc00",
        "warning": "#f29718",
        "pro": "#9966cc"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#212121",
            "text-secondary": "#4f4f4f",
            "text-muted": "#616161"
          }
        },
        "git": {
          "added": "#77cc00",
          "removed": "#d32f2f",
          "modified": "#f29718",
          "merged": "#9966cc",
          "closed": "#d32f2f",
          "conflicting": "#c76a1c",
          "draft": "#8d8d8d"
        }
      }
    },
    "credit": {
      "extension": "miguelsolorio.min-theme",
      "author": "miguelsolorio",
      "repo": "misolori/min-theme",
      "license": "MIT"
    }
  },
  {
    "id": "absent-contrast-rainglow",
    "name": "Absent Contrast (rainglow)",
    "mode": "dark",
    "sky": [
      "#060708",
      "#112125",
      "#0e1114"
    ],
    "def": {
      "label": "Absent Contrast (rainglow)",
      "only": "dark",
      "roles": {
        "accent": "#228a96",
        "danger": "#ba0e2e",
        "success": "#a7da1e",
        "warning": "#f7b83d",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#0e1114",
            "surface-1": "#111519",
            "surface-2": "#15191e",
            "surface-3": "#181d22",
            "text-primary": "#bdc6cf",
            "text-secondary": "#969ea6",
            "text-muted": "#888f96"
          }
        },
        "git": {
          "added": "#a7da1e",
          "removed": "#ba0e2e",
          "modified": "#f7b83d",
          "merged": "#c792ea",
          "closed": "#ba0e2e",
          "conflicting": "#f0a35a",
          "draft": "#63696f"
        }
      }
    },
    "credit": {
      "extension": "daylerees.rainglow",
      "author": "daylerees",
      "repo": "rainglow/vscode",
      "license": "MIT"
    }
  },
  {
    "id": "absent-light-rainglow",
    "name": "Absent Light (rainglow)",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#dfe9ea",
      "#ffffff"
    ],
    "def": {
      "label": "Absent Light (rainglow)",
      "only": "light",
      "roles": {
        "accent": "#228a96",
        "danger": "#ba0e2e",
        "success": "#59a50b",
        "warning": "#c48405",
        "pro": "#7a4fb5"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#333c45",
            "text-secondary": "#515961",
            "text-muted": "#5d646c"
          }
        },
        "git": {
          "added": "#59a50b",
          "removed": "#ba0e2e",
          "modified": "#c48405",
          "merged": "#7a4fb5",
          "closed": "#ba0e2e",
          "conflicting": "#c76a1c",
          "draft": "#8a8f94"
        }
      }
    },
    "credit": {
      "extension": "daylerees.rainglow",
      "author": "daylerees",
      "repo": "rainglow/vscode",
      "license": "MIT"
    }
  },
  {
    "id": "slack-theme-aubergine",
    "name": "Slack Theme Aubergine",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#f2dee4",
      "#ffffff"
    ],
    "def": {
      "label": "Slack Theme Aubergine",
      "only": "light",
      "roles": {
        "accent": "#e01e5a",
        "danger": "#e53935",
        "success": "#91b859",
        "warning": "#ecb22e",
        "pro": "#7c4dff"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#383a42",
            "text-secondary": "#56575e",
            "text-muted": "#616369"
          }
        },
        "git": {
          "added": "#91b859",
          "removed": "#e53935",
          "modified": "#ecb22e",
          "merged": "#7c4dff",
          "closed": "#e53935",
          "conflicting": "#c76a1c",
          "draft": "#8d8e93"
        }
      }
    },
    "credit": {
      "extension": "felipe-mendes.slack-theme",
      "author": "felipe-mendes",
      "repo": "felipemendes/slack-theme",
      "license": "MIT"
    }
  },
  {
    "id": "slack-theme-aubergine-felipe-mendes",
    "name": "Slack Theme Aubergine",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#f4e2e4",
      "#ffffff"
    ],
    "def": {
      "label": "Slack Theme Aubergine",
      "only": "light",
      "roles": {
        "accent": "#f4475a",
        "danger": "#e53935",
        "success": "#91b859",
        "warning": "#ffb62c",
        "pro": "#7c4dff"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#000000",
            "text-secondary": "#363636",
            "text-muted": "#666666"
          }
        },
        "git": {
          "added": "#91b859",
          "removed": "#e53935",
          "modified": "#ffb62c",
          "merged": "#7c4dff",
          "closed": "#e53935",
          "conflicting": "#c76a1c",
          "draft": "#919191"
        }
      }
    },
    "credit": {
      "extension": "felipe-mendes.slack-theme",
      "author": "felipe-mendes",
      "repo": "felipemendes/slack-theme",
      "license": "MIT"
    }
  },
  {
    "id": "electron",
    "name": "Electron",
    "mode": "dark",
    "sky": [
      "#151a23",
      "#28334a",
      "#212836"
    ],
    "def": {
      "label": "Electron",
      "only": "dark",
      "roles": {
        "accent": "#537cd1",
        "danger": "#e5646e",
        "success": "#308e68",
        "warning": "#e3c18a",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#212836",
            "surface-1": "#242c3b",
            "surface-2": "#273040",
            "surface-3": "#2a3345",
            "text-primary": "#dde2ed",
            "text-secondary": "#b4b9c5",
            "text-muted": "#9aa0ac"
          }
        },
        "git": {
          "added": "#308e68",
          "removed": "#e5646e",
          "modified": "#e3c18a",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#767c88"
        }
      }
    },
    "credit": {
      "extension": "kuscamara.electron",
      "author": "kuscamara",
      "repo": "kcmr/electron-theme-vscode",
      "license": "MIT"
    }
  },
  {
    "id": "macos-modern-dark-ventura-xcode-civic",
    "name": "MacOS Modern Dark - Ventura Xcode Civic",
    "mode": "dark",
    "sky": [
      "#131313",
      "#21303f",
      "#232222"
    ],
    "def": {
      "label": "MacOS Modern Dark - Ventura Xcode Civic",
      "only": "dark",
      "roles": {
        "accent": "#128cff",
        "danger": "#e21515",
        "success": "#4dbf57",
        "warning": "#ffc501",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#232222",
            "surface-1": "#272626",
            "surface-2": "#2b2a2a",
            "surface-3": "#2f2e2e",
            "text-primary": "#ffffff",
            "text-secondary": "#cfcece",
            "text-muted": "#a3a2a2"
          }
        },
        "git": {
          "added": "#4dbf57",
          "removed": "#e21515",
          "modified": "#ffc501",
          "merged": "#c792ea",
          "closed": "#e21515",
          "conflicting": "#f0a35a",
          "draft": "#7c7c7c"
        }
      }
    },
    "credit": {
      "extension": "davidbwaters.macos-modern-theme",
      "author": "davidbwaters",
      "repo": "davidbwaters/macos-modern-vscode-theme",
      "license": "MIT"
    }
  },
  {
    "id": "macos-modern-light-ventura-xcode",
    "name": "MacOS Modern Light - Ventura Xcode",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#dce9f5",
      "#ffffff"
    ],
    "def": {
      "label": "MacOS Modern Light - Ventura Xcode",
      "only": "light",
      "roles": {
        "accent": "#0887ff",
        "danger": "#ff0000",
        "success": "#3f8f3a",
        "warning": "#b07a10",
        "pro": "#7a4fb5"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#363b45",
            "text-secondary": "#545961",
            "text-muted": "#60646b"
          }
        },
        "git": {
          "added": "#3f8f3a",
          "removed": "#ff0000",
          "modified": "#b07a10",
          "merged": "#7a4fb5",
          "closed": "#ff0000",
          "conflicting": "#c76a1c",
          "draft": "#8c8f94"
        }
      }
    },
    "credit": {
      "extension": "davidbwaters.macos-modern-theme",
      "author": "davidbwaters",
      "repo": "davidbwaters/macos-modern-vscode-theme",
      "license": "MIT"
    }
  },
  {
    "id": "mayukai-mirage",
    "name": "Mayukai Mirage",
    "mode": "dark",
    "sky": [
      "#090b10",
      "#332c2a",
      "#141824"
    ],
    "def": {
      "label": "Mayukai Mirage",
      "only": "dark",
      "roles": {
        "accent": "#ffb454",
        "danger": "#ff6666",
        "success": "#a6cc70",
        "warning": "#ffcc66",
        "pro": "#cfbafa"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#141824",
            "surface-1": "#171b29",
            "surface-2": "#1a1f2e",
            "surface-3": "#1c2233",
            "text-primary": "#cbcebc",
            "text-secondary": "#a3a69b",
            "text-muted": "#93978e"
          }
        },
        "git": {
          "added": "#a6cc70",
          "removed": "#ff6666",
          "modified": "#ffcc66",
          "merged": "#cfbafa",
          "closed": "#ff6666",
          "conflicting": "#f0a35a",
          "draft": "#6d716e"
        }
      }
    },
    "credit": {
      "extension": "GulajavaMinistudio.mayukaithemevsc",
      "author": "GulajavaMinistudio",
      "repo": "GulajavaMinistudio/Mayukai-Theme",
      "license": "MIT"
    }
  },
  {
    "id": "narutodark",
    "name": "NarutoDark",
    "mode": "dark",
    "sky": [
      "#05050c",
      "#0b1b34",
      "#0d0d1d"
    ],
    "def": {
      "label": "NarutoDark",
      "only": "dark",
      "roles": {
        "accent": "#007acc",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#0d0d1d",
            "surface-1": "#101023",
            "surface-2": "#121228",
            "surface-3": "#14142d",
            "text-primary": "#ffffff",
            "text-secondary": "#cacacd",
            "text-muted": "#9999a0"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#6f6f79"
        }
      }
    },
    "credit": {
      "extension": "Thomaz.preparing",
      "author": "Thomaz",
      "repo": "Thomaz-Peres/Theme",
      "license": "MIT"
    }
  },
  {
    "id": "pink-cat-boo",
    "name": "Pink Cat Boo",
    "mode": "dark",
    "sky": [
      "#14161e",
      "#3d2f3c",
      "#202330"
    ],
    "def": {
      "label": "Pink Cat Boo",
      "only": "dark",
      "roles": {
        "accent": "#fe7c8e",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#202330",
            "surface-1": "#232735",
            "surface-2": "#272a3a",
            "surface-3": "#292d3e",
            "text-primary": "#fff0f5",
            "text-secondary": "#cec3ca",
            "text-muted": "#a19aa2"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#7b7680"
        }
      }
    },
    "credit": {
      "extension": "ftsamoyed.theme-pink-cat-boo",
      "author": "ftsamoyed",
      "repo": "ftsamoyed/PinkCatBoo",
      "license": "MIT"
    }
  },
  {
    "id": "gitpod-dark",
    "name": "Gitpod Dark",
    "mode": "dark",
    "sky": [
      "#070605",
      "#2b1d0a",
      "#12100c"
    ],
    "def": {
      "label": "Gitpod Dark",
      "only": "dark",
      "roles": {
        "accent": "#d67400",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#12100c",
            "surface-1": "#17140f",
            "surface-2": "#1c1913",
            "surface-3": "#201d15",
            "text-primary": "#d4d4d4",
            "text-secondary": "#a9a9a8",
            "text-muted": "#8f8e8d"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#696866"
        }
      }
    },
    "credit": {
      "extension": "gitpod.gitpod-theme",
      "author": "gitpod",
      "repo": "gitpod-io/gitpod-vscode-theme",
      "license": "MIT"
    }
  },
  {
    "id": "gitpod-light",
    "name": "Gitpod Light",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#f0e6db",
      "#ffffff"
    ],
    "def": {
      "label": "Gitpod Light",
      "only": "light",
      "roles": {
        "accent": "#cc6e00",
        "danger": "#c8372d",
        "success": "#3f8f3a",
        "warning": "#b07a10",
        "pro": "#7a4fb5"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#000000",
            "text-secondary": "#363636",
            "text-muted": "#666666"
          }
        },
        "git": {
          "added": "#3f8f3a",
          "removed": "#c8372d",
          "modified": "#b07a10",
          "merged": "#7a4fb5",
          "closed": "#c8372d",
          "conflicting": "#c76a1c",
          "draft": "#919191"
        }
      }
    },
    "credit": {
      "extension": "gitpod.gitpod-theme",
      "author": "gitpod",
      "repo": "gitpod-io/gitpod-vscode-theme",
      "license": "MIT"
    }
  },
  {
    "id": "lunar-pink",
    "name": "Lunar Pink",
    "mode": "dark",
    "sky": [
      "#080808",
      "#2b1224",
      "#131313"
    ],
    "def": {
      "label": "Lunar Pink",
      "only": "dark",
      "roles": {
        "accent": "#c90b93",
        "danger": "#ff0000",
        "success": "#2ae609",
        "warning": "#ffd900",
        "pro": "#004aaa"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#131313",
            "surface-1": "#171717",
            "surface-2": "#1b1b1b",
            "surface-3": "#1f1f1f",
            "text-primary": "#dddddd",
            "text-secondary": "#b1b1b1",
            "text-muted": "#959595"
          }
        },
        "git": {
          "added": "#2ae609",
          "removed": "#ff0000",
          "modified": "#ffd900",
          "merged": "#004aaa",
          "closed": "#ff0000",
          "conflicting": "#f0a35a",
          "draft": "#6e6e6e"
        }
      }
    },
    "credit": {
      "extension": "nicolasdschmidt.lunar-pink",
      "author": "nicolasdschmidt",
      "repo": "tronfy/lunar-pink",
      "license": "MIT"
    }
  },
  {
    "id": "black",
    "name": "Black",
    "mode": "dark",
    "sky": [
      "#010101",
      "#161c1d",
      "#000000"
    ],
    "def": {
      "label": "Black",
      "only": "dark",
      "roles": {
        "accent": "#a8dadc",
        "danger": "#d97397",
        "success": "#caffbf",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#000000",
            "surface-1": "#040404",
            "surface-2": "#080808",
            "surface-3": "#0c0c0c",
            "text-primary": "#bfd4e1",
            "text-secondary": "#95a5b0",
            "text-muted": "#7b8891"
          }
        },
        "git": {
          "added": "#caffbf",
          "removed": "#d97397",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#d97397",
          "conflicting": "#f0a35a",
          "draft": "#565f65"
        }
      }
    },
    "credit": {
      "extension": "Jaakko.black",
      "author": "Jaakko",
      "repo": "Jaakkko/vscode-black-theme",
      "license": "Unlicense"
    }
  },
  {
    "id": "hack-the-box",
    "name": "Hack The Box",
    "mode": "dark",
    "sky": [
      "#0a0f16",
      "#263825",
      "#141d2b"
    ],
    "def": {
      "label": "Hack The Box",
      "only": "dark",
      "roles": {
        "accent": "#9fef00",
        "danger": "#ff3e3e",
        "success": "#9fef00",
        "warning": "#ffaf00",
        "pro": "#9f00ff"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#141d2b",
            "surface-1": "#172131",
            "surface-2": "#192536",
            "surface-3": "#1b283b",
            "text-primary": "#cbd3e3",
            "text-secondary": "#a3abba",
            "text-muted": "#8a92a1"
          }
        },
        "git": {
          "added": "#9fef00",
          "removed": "#ff3e3e",
          "modified": "#ffaf00",
          "merged": "#9f00ff",
          "closed": "#ff3e3e",
          "conflicting": "#ffaf00",
          "draft": "#676f7e"
        }
      }
    },
    "credit": {
      "extension": "silofy.hackthebox",
      "author": "silofy",
      "repo": "silofy/hackthebox",
      "license": "MIT"
    }
  },
  {
    "id": "bear-theme",
    "name": "Bear Theme",
    "mode": "dark",
    "sky": [
      "#111113",
      "#392d29",
      "#1f2023"
    ],
    "def": {
      "label": "Bear Theme",
      "only": "dark",
      "roles": {
        "accent": "#e6844f",
        "danger": "#e6844f",
        "success": "#24936e",
        "warning": "#e5c07b",
        "pro": "#e03c8a"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#1f2023",
            "surface-1": "#232427",
            "surface-2": "#27282c",
            "surface-3": "#2a2b2f",
            "text-primary": "#ded9c7",
            "text-secondary": "#b4b0a3",
            "text-muted": "#9a978c"
          }
        },
        "git": {
          "added": "#24936e",
          "removed": "#e6844f",
          "modified": "#e5c07b",
          "merged": "#e03c8a",
          "closed": "#e6844f",
          "conflicting": "#f0a35a",
          "draft": "#75736d"
        }
      }
    },
    "credit": {
      "extension": "dahong.theme-bear",
      "author": "dahong",
      "repo": "shaodahong/theme-bear",
      "license": "MIT"
    }
  },
  {
    "id": "night-pink",
    "name": "Night Pink",
    "mode": "dark",
    "sky": [
      "#0a0a0a",
      "#322128",
      "#181818"
    ],
    "def": {
      "label": "Night Pink",
      "only": "dark",
      "roles": {
        "accent": "#e06196",
        "danger": "#f35e5e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#181818",
            "surface-1": "#1c1c1c",
            "surface-2": "#202020",
            "surface-3": "#242424",
            "text-primary": "#ffc1ef",
            "text-secondary": "#cc9cc0",
            "text-muted": "#ad85a2"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#f35e5e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#f35e5e",
          "conflicting": "#f0a35a",
          "draft": "#806479"
        }
      }
    },
    "credit": {
      "extension": "SamRC.night-pink",
      "author": "SamRC",
      "repo": "samRC/night-pink",
      "license": "MIT"
    }
  },
  {
    "id": "vim-dark-medium",
    "name": "Vim Dark Medium",
    "mode": "dark",
    "sky": [
      "#191919",
      "#2c3535",
      "#282828"
    ],
    "def": {
      "label": "Vim Dark Medium",
      "only": "dark",
      "roles": {
        "accent": "#47888b",
        "danger": "#fb4934",
        "success": "#8ec07c",
        "warning": "#d79921",
        "pro": "#b16286"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#282828",
            "surface-1": "#2c2c2c",
            "surface-2": "#303030",
            "surface-3": "#343434",
            "text-primary": "#f0e4c6",
            "text-secondary": "#c4bba3",
            "text-muted": "#a9a18e"
          }
        },
        "git": {
          "added": "#8ec07c",
          "removed": "#fb4934",
          "modified": "#d79921",
          "merged": "#b16286",
          "closed": "#fb4934",
          "conflicting": "#f0a35a",
          "draft": "#827d6f"
        }
      }
    },
    "credit": {
      "extension": "HarryHopkinson.vim-theme",
      "author": "HarryHopkinson",
      "repo": "Harry-Hopkinson/vim-vscode-theme",
      "license": "MIT"
    }
  },
  {
    "id": "vim-light-medium",
    "name": "Vim Light Medium",
    "mode": "light",
    "sky": [
      "#f8e69c",
      "#f0e1a4",
      "#fbf1c7"
    ],
    "def": {
      "label": "Vim Light Medium",
      "only": "light",
      "roles": {
        "accent": "#9e7d29",
        "danger": "#9d0006",
        "success": "#3f8f3a",
        "warning": "#d79921",
        "pro": "#b16286"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f9ecb2",
            "surface-1": "#faefbd",
            "surface-2": "#fbf1c7",
            "surface-3": "#fbf1c7",
            "text-primary": "#393534",
            "text-secondary": "#585248",
            "text-muted": "#6b6454"
          }
        },
        "git": {
          "added": "#3f8f3a",
          "removed": "#9d0006",
          "modified": "#d79921",
          "merged": "#b16286",
          "closed": "#9d0006",
          "conflicting": "#c76a1c",
          "draft": "#968d70"
        }
      }
    },
    "credit": {
      "extension": "HarryHopkinson.vim-theme",
      "author": "HarryHopkinson",
      "repo": "Harry-Hopkinson/vim-vscode-theme",
      "license": "MIT"
    }
  },
  {
    "id": "halcyon",
    "name": "Halcyon",
    "mode": "dark",
    "sky": [
      "#12161f",
      "#3a3a3a",
      "#1d2433"
    ],
    "def": {
      "label": "Halcyon",
      "only": "dark",
      "roles": {
        "accent": "#ffcc66",
        "danger": "#ef6b73",
        "success": "#bae67e",
        "warning": "#ffd580",
        "pro": "#c3a6ff"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#1d2433",
            "surface-1": "#202838",
            "surface-2": "#232b3d",
            "surface-3": "#262f42",
            "text-primary": "#dadde5",
            "text-secondary": "#b1b5be",
            "text-muted": "#979ba5"
          }
        },
        "git": {
          "added": "#bae67e",
          "removed": "#ef6b73",
          "modified": "#ffd580",
          "merged": "#c3a6ff",
          "closed": "#ef6b73",
          "conflicting": "#f0a35a",
          "draft": "#727783"
        }
      }
    },
    "credit": {
      "extension": "brittanychiang.halcyon-vscode",
      "author": "brittanychiang",
      "repo": "bchiang7/halcyon-vscode",
      "license": "MIT"
    }
  },
  {
    "id": "firefly-pro",
    "name": "FireFly Pro",
    "mode": "dark",
    "sky": [
      "#040609",
      "#1a2114",
      "#0a0f17"
    ],
    "def": {
      "label": "FireFly Pro",
      "only": "dark",
      "roles": {
        "accent": "#859900",
        "danger": "#ff3333",
        "success": "#91b362",
        "warning": "#e6b450",
        "pro": "#53bdfa"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#0a0f17",
            "surface-1": "#0c131d",
            "surface-2": "#0f1622",
            "surface-3": "#111a27",
            "text-primary": "#bbc3e2",
            "text-secondary": "#949cb5",
            "text-muted": "#858da4"
          }
        },
        "git": {
          "added": "#91b362",
          "removed": "#ff3333",
          "modified": "#e6b450",
          "merged": "#53bdfa",
          "closed": "#ff3333",
          "conflicting": "#ff5300",
          "draft": "#60677a"
        }
      }
    },
    "credit": {
      "extension": "ankitcode.firefly",
      "author": "ankitcode",
      "repo": "ankitmlive/firefly-theme",
      "license": "Apache-2.0"
    }
  },
  {
    "id": "codestackr-theme",
    "name": "codeSTACKr Theme",
    "mode": "dark",
    "sky": [
      "#04080b",
      "#291e1e",
      "#09131b"
    ],
    "def": {
      "label": "codeSTACKr Theme",
      "only": "dark",
      "roles": {
        "accent": "#ff652f",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#09131b",
            "surface-1": "#0b1721",
            "surface-2": "#0d1c27",
            "surface-3": "#0f1f2d",
            "text-primary": "#ffffff",
            "text-secondary": "#c9cbcd",
            "text-muted": "#989c9f"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#6d7378"
        }
      }
    },
    "credit": {
      "extension": "codestackr.codestackr-theme",
      "author": "codestackr",
      "repo": "codestackr/codestackr-vscode-theme",
      "license": "MIT"
    }
  },
  {
    "id": "firefox-dark",
    "name": "Firefox Dark",
    "mode": "dark",
    "sky": [
      "#1b1b1e",
      "#263649",
      "#2a2a2e"
    ],
    "def": {
      "label": "Firefox Dark",
      "only": "dark",
      "roles": {
        "accent": "#0a84ff",
        "danger": "#cc3d3d",
        "success": "#86de74",
        "warning": "#d99f2b",
        "pro": "#ff7de9"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#2a2a2e",
            "surface-1": "#2e2e32",
            "surface-2": "#323237",
            "surface-3": "#35353a",
            "text-primary": "#e7e7e8",
            "text-secondary": "#bebebf",
            "text-muted": "#a4a4a6"
          }
        },
        "git": {
          "added": "#86de74",
          "removed": "#cc3d3d",
          "modified": "#d99f2b",
          "merged": "#ff7de9",
          "closed": "#cc3d3d",
          "conflicting": "#f0a35a",
          "draft": "#7f7f82"
        }
      }
    },
    "credit": {
      "extension": "Heron.firefox-devtools-theme",
      "author": "Heron",
      "repo": "firefox-theme/visual-studio-code",
      "license": "MIT"
    }
  },
  {
    "id": "firefox-light",
    "name": "Firefox Light",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#e8dbf1",
      "#ffffff"
    ],
    "def": {
      "label": "Firefox Light",
      "only": "light",
      "roles": {
        "accent": "#8000d7",
        "danger": "#a4000f",
        "success": "#3f8f3a",
        "warning": "#ffbf00",
        "pro": "#7a4fb5"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#3b3b3f",
            "text-secondary": "#58585c",
            "text-muted": "#646467"
          }
        },
        "git": {
          "added": "#3f8f3a",
          "removed": "#a4000f",
          "modified": "#ffbf00",
          "merged": "#7a4fb5",
          "closed": "#a4000f",
          "conflicting": "#c76a1c",
          "draft": "#8f8f91"
        }
      }
    },
    "credit": {
      "extension": "Heron.firefox-devtools-theme",
      "author": "Heron",
      "repo": "firefox-theme/visual-studio-code",
      "license": "MIT"
    }
  },
  {
    "id": "xcode-classic-dark",
    "name": "Xcode Classic (Dark)",
    "mode": "dark",
    "sky": [
      "#1b1c1f",
      "#2d3642",
      "#292a30"
    ],
    "def": {
      "label": "Xcode Classic (Dark)",
      "only": "dark",
      "roles": {
        "accent": "#4984ba",
        "danger": "#e21514",
        "success": "#8ccf7e",
        "warning": "#f5c443",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#292a30",
            "surface-1": "#2d2e34",
            "surface-2": "#313239",
            "surface-3": "#34353d",
            "text-primary": "#e7e7e8",
            "text-secondary": "#bdbdbf",
            "text-muted": "#a3a3a6"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e21514",
          "modified": "#f5c443",
          "merged": "#c792ea",
          "closed": "#e21514",
          "conflicting": "#f0a35a",
          "draft": "#7e7f83"
        }
      }
    },
    "credit": {
      "extension": "MateoCERQUETELLA.xcode-12-theme",
      "author": "MateoCERQUETELLA",
      "repo": "MateoCerquetella/xcode-theme",
      "license": "MIT"
    }
  },
  {
    "id": "snazzy-operator",
    "name": "Snazzy Operator",
    "mode": "dark",
    "sky": [
      "#1b1c24",
      "#2e3e50",
      "#282a36"
    ],
    "def": {
      "label": "Snazzy Operator",
      "only": "dark",
      "roles": {
        "accent": "#57c7ff",
        "danger": "#ff5c57",
        "success": "#5af78e",
        "warning": "#e5c07b",
        "pro": "#ff6ac1"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#282a36",
            "surface-1": "#2b2e3b",
            "surface-2": "#2f313f",
            "surface-3": "#323443",
            "text-primary": "#eff0eb",
            "text-secondary": "#c3c4c3",
            "text-muted": "#a8a9aa"
          }
        },
        "git": {
          "added": "#5af78e",
          "removed": "#ff5c57",
          "modified": "#e5c07b",
          "merged": "#ff6ac1",
          "closed": "#ff5c57",
          "conflicting": "#f0a35a",
          "draft": "#828387"
        }
      }
    },
    "credit": {
      "extension": "aaronthomas.vscode-snazzy-operator",
      "author": "aaronthomas",
      "repo": "aaronthomas/vscode-snazzy-operator",
      "license": "MIT"
    }
  },
  {
    "id": "dark-low-contrast",
    "name": "Dark Low Contrast",
    "mode": "dark",
    "sky": [
      "#0f0f0f",
      "#1d2a33",
      "#1e1e1e"
    ],
    "def": {
      "label": "Dark Low Contrast",
      "only": "dark",
      "roles": {
        "accent": "#197bbd",
        "danger": "#c97260",
        "success": "#109c66",
        "warning": "#a98b06",
        "pro": "#9c389c"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#1e1e1e",
            "surface-1": "#222222",
            "surface-2": "#262626",
            "surface-3": "#2a2a2a",
            "text-primary": "#d5d5d5",
            "text-secondary": "#adadad",
            "text-muted": "#949494"
          }
        },
        "git": {
          "added": "#109c66",
          "removed": "#c97260",
          "modified": "#a98b06",
          "merged": "#9c389c",
          "closed": "#c97260",
          "conflicting": "#f0a35a",
          "draft": "#707070"
        }
      }
    },
    "credit": {
      "extension": "EvgeniyPetukhov.dark-low-contrast",
      "author": "EvgeniyPetukhov",
      "repo": "evgeniyp/vscode-dark-low-contrast",
      "license": "MIT"
    }
  },
  {
    "id": "pitch-black",
    "name": "Pitch Black",
    "mode": "dark",
    "sky": [
      "#010101",
      "#101520",
      "#000000"
    ],
    "def": {
      "label": "Pitch Black",
      "only": "dark",
      "roles": {
        "accent": "#7aa2f7",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#000000",
            "surface-1": "#040404",
            "surface-2": "#080808",
            "surface-3": "#0c0c0c",
            "text-primary": "#d4d4d4",
            "text-secondary": "#a5a5a5",
            "text-muted": "#888888"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#5f5f5f"
        }
      }
    },
    "credit": {
      "extension": "viktorqvarfordt.vscode-pitch-black-theme",
      "author": "viktorqvarfordt",
      "repo": "ViktorQvarfordt/vscode-pitch-black-theme",
      "license": "MIT"
    }
  },
  {
    "id": "netbeans-light-theme",
    "name": "NetBeans Light Theme",
    "mode": "light",
    "sky": [
      "#e8e8e8",
      "#e0e6f1",
      "#ffffff"
    ],
    "def": {
      "label": "NetBeans Light Theme",
      "only": "light",
      "roles": {
        "accent": "#2f6fdb",
        "danger": "#c8372d",
        "success": "#3f8f3a",
        "warning": "#b07a10",
        "pro": "#7a4fb5"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#f4f4f4",
            "surface-1": "#fafafa",
            "surface-2": "#ffffff",
            "surface-3": "#ffffff",
            "text-primary": "#000000",
            "text-secondary": "#363636",
            "text-muted": "#666666"
          }
        },
        "git": {
          "added": "#3f8f3a",
          "removed": "#c8372d",
          "modified": "#b07a10",
          "merged": "#7a4fb5",
          "closed": "#c8372d",
          "conflicting": "#c76a1c",
          "draft": "#919191"
        }
      }
    },
    "credit": {
      "extension": "obrejla.netbeans-light-theme",
      "author": "obrejla",
      "repo": "obrejla/vscode-netbeans-light-theme",
      "license": "MIT"
    }
  },
  {
    "id": "horizon",
    "name": "Horizon",
    "mode": "dark",
    "sky": [
      "#0f1014",
      "#372531",
      "#1c1e26"
    ],
    "def": {
      "label": "Horizon",
      "only": "dark",
      "roles": {
        "accent": "#e95378",
        "danger": "#f43e5c",
        "success": "#27d797",
        "warning": "#e5c07b",
        "pro": "#26bbd9"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#1c1e26",
            "surface-1": "#1f222b",
            "surface-2": "#23252f",
            "surface-3": "#262934",
            "text-primary": "#d5d8da",
            "text-secondary": "#acafb2",
            "text-muted": "#93969a"
          }
        },
        "git": {
          "added": "#27d797",
          "removed": "#f43e5c",
          "modified": "#e5c07b",
          "merged": "#26bbd9",
          "closed": "#f43e5c",
          "conflicting": "#f0a35a",
          "draft": "#6f7277"
        }
      }
    },
    "credit": {
      "extension": "alexandernanberg.horizon-theme-vscode",
      "author": "alexandernanberg",
      "repo": "alexandernanberg/horizon-theme-vscode",
      "license": "MIT"
    }
  },
  {
    "id": "horizon-bright",
    "name": "Horizon Bright",
    "mode": "light",
    "sky": [
      "#f8cec4",
      "#f9cfc5",
      "#fdf0ed"
    ],
    "def": {
      "label": "Horizon Bright",
      "only": "light",
      "roles": {
        "accent": "#e54315",
        "danger": "#f43e5c",
        "success": "#1eb980",
        "warning": "#b07a10",
        "pro": "#ee64ac"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#fbdfd8",
            "surface-1": "#fce8e4",
            "surface-2": "#fdf0ed",
            "surface-3": "#fdf0ed",
            "text-primary": "#06060c",
            "text-secondary": "#3c3639",
            "text-muted": "#5d5355"
          }
        },
        "git": {
          "added": "#1eb980",
          "removed": "#f43e5c",
          "modified": "#b07a10",
          "merged": "#ee64ac",
          "closed": "#f43e5c",
          "conflicting": "#c76a1c",
          "draft": "#8d7d7c"
        }
      }
    },
    "credit": {
      "extension": "alexandernanberg.horizon-theme-vscode",
      "author": "alexandernanberg",
      "repo": "alexandernanberg/horizon-theme-vscode",
      "license": "MIT"
    }
  },
  {
    "id": "snazzy-light",
    "name": "Snazzy Light",
    "mode": "light",
    "sky": [
      "#dde4eb",
      "#d8e7e3",
      "#fafbfc"
    ],
    "def": {
      "label": "Snazzy Light",
      "only": "light",
      "roles": {
        "accent": "#27964c",
        "danger": "#ff5c56",
        "success": "#2dae58",
        "warning": "#cf9c00",
        "pro": "#f767bb"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#ecf0f3",
            "surface-1": "#f4f6f8",
            "surface-2": "#fafbfc",
            "surface-3": "#fafbfc",
            "text-primary": "#383945",
            "text-secondary": "#555660",
            "text-muted": "#60616b"
          }
        },
        "git": {
          "added": "#2dae58",
          "removed": "#ff5c56",
          "modified": "#cf9c00",
          "merged": "#f767bb",
          "closed": "#ff5c56",
          "conflicting": "#c76a1c",
          "draft": "#8a8c94"
        }
      }
    },
    "credit": {
      "extension": "loilo.snazzy-light",
      "author": "loilo",
      "repo": "loilo/vscode-snazzy-light",
      "license": "MIT"
    }
  },
  {
    "id": "poimandres",
    "name": "poimandres",
    "mode": "dark",
    "sky": [
      "#0f1016",
      "#2e3644",
      "#1b1e28"
    ],
    "def": {
      "label": "poimandres",
      "only": "dark",
      "roles": {
        "accent": "#add7ff",
        "danger": "#e5646e",
        "success": "#5fb3a1",
        "warning": "#fffac2",
        "pro": "#f087bd"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#1b1e28",
            "surface-1": "#1e222d",
            "surface-2": "#222532",
            "surface-3": "#242936",
            "text-primary": "#d0d4e5",
            "text-secondary": "#a9acbb",
            "text-muted": "#9093a1"
          }
        },
        "git": {
          "added": "#5fb3a1",
          "removed": "#e5646e",
          "modified": "#fffac2",
          "merged": "#f087bd",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#6d707d"
        }
      }
    },
    "credit": {
      "extension": "pmndrs.pmndrs",
      "author": "pmndrs",
      "repo": "drcmda/poimandres-theme",
      "license": "MIT"
    }
  },
  {
    "id": "monokai-vibrant",
    "name": "Monokai Vibrant",
    "mode": "dark",
    "sky": [
      "#09090c",
      "#1e263a",
      "#16171d"
    ],
    "def": {
      "label": "Monokai Vibrant",
      "only": "dark",
      "roles": {
        "accent": "#528bff",
        "danger": "#c24038",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#16171d",
            "surface-1": "#1a1b22",
            "surface-2": "#1d1e26",
            "surface-3": "#20222a",
            "text-primary": "#f8f8f0",
            "text-secondary": "#c6c7c2",
            "text-muted": "#999a97"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#c24038",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#c24038",
          "conflicting": "#f0a35a",
          "draft": "#727273"
        }
      }
    },
    "credit": {
      "extension": "s3gf4ult.monokai-vibrant",
      "author": "s3gf4ult",
      "repo": "dylantmarsh/monokai-vibrant",
      "license": "MIT"
    }
  },
  {
    "id": "code-blue",
    "name": "Code Blue",
    "mode": "dark",
    "sky": [
      "#1f2537",
      "#26444d",
      "#2a324b"
    ],
    "def": {
      "label": "Code Blue",
      "only": "dark",
      "roles": {
        "accent": "#0ec05c",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#fcc04f",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#2a324b",
            "surface-1": "#2d3550",
            "surface-2": "#303955",
            "surface-3": "#323c5a",
            "text-primary": "#f3f5f6",
            "text-secondary": "#c7cad1",
            "text-muted": "#acafb9"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#fcc04f",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#858a98"
        }
      }
    },
    "credit": {
      "extension": "Sujan.code-blue",
      "author": "Sujan",
      "repo": "sujan-s/code-blue",
      "license": "MIT"
    }
  },
  {
    "id": "august-arstotzka",
    "name": "August - Arstotzka",
    "mode": "dark",
    "sky": [
      "#060404",
      "#261010",
      "#0f0b0b"
    ],
    "def": {
      "label": "August - Arstotzka",
      "only": "dark",
      "roles": {
        "accent": "#bf2e2e",
        "danger": "#a62828",
        "success": "#678813",
        "warning": "#b19600",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#0f0b0b",
            "surface-1": "#140e0e",
            "surface-2": "#181212",
            "surface-3": "#1d1515",
            "text-primary": "#b6c4b6",
            "text-secondary": "#929c91",
            "text-muted": "#848c82"
          }
        },
        "git": {
          "added": "#678813",
          "removed": "#a62828",
          "modified": "#b19600",
          "merged": "#c792ea",
          "closed": "#a62828",
          "conflicting": "#f0a35a",
          "draft": "#61655f"
        }
      }
    },
    "credit": {
      "extension": "inci-august.august-themes",
      "author": "inci-august",
      "repo": "inci-august/august-themes",
      "license": "MIT"
    }
  },
  {
    "id": "pycharm-original-theme",
    "name": "Pycharm Original Theme",
    "mode": "dark",
    "sky": [
      "#1c1c1c",
      "#2f3740",
      "#2b2b2b"
    ],
    "def": {
      "label": "Pycharm Original Theme",
      "only": "dark",
      "roles": {
        "accent": "#4787c9",
        "danger": "#e5646e",
        "success": "#8ccf7e",
        "warning": "#e5c07b",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#2b2b2b",
            "surface-1": "#2f2f2f",
            "surface-2": "#333333",
            "surface-3": "#373737",
            "text-primary": "#e6eaef",
            "text-secondary": "#bdc0c4",
            "text-muted": "#a3a6a9"
          }
        },
        "git": {
          "added": "#8ccf7e",
          "removed": "#e5646e",
          "modified": "#e5c07b",
          "merged": "#c792ea",
          "closed": "#e5646e",
          "conflicting": "#f0a35a",
          "draft": "#7f8183"
        }
      }
    },
    "credit": {
      "extension": "nicohlr.pycharm",
      "author": "nicohlr",
      "repo": "nicohlr/vscode-pycharm-theme",
      "license": "MIT"
    }
  },
  {
    "id": "radical",
    "name": "Radical",
    "mode": "dark",
    "sky": [
      "#08080e",
      "#331930",
      "#141322"
    ],
    "def": {
      "label": "Radical",
      "only": "dark",
      "roles": {
        "accent": "#ff428e",
        "danger": "#ff1767",
        "success": "#a3ff57",
        "warning": "#ffd000",
        "pro": "#7dd9e4"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#141322",
            "surface-1": "#171627",
            "surface-2": "#1a192c",
            "surface-3": "#1d1b31",
            "text-primary": "#b5cbd6",
            "text-secondary": "#91a3ae",
            "text-muted": "#84939f"
          }
        },
        "git": {
          "added": "#a3ff57",
          "removed": "#ff1767",
          "modified": "#ffd000",
          "merged": "#7dd9e4",
          "closed": "#ff1767",
          "conflicting": "#f0a35a",
          "draft": "#626d7a"
        }
      }
    },
    "credit": {
      "extension": "dhedgecock.radical-vscode",
      "author": "dhedgecock",
      "repo": "dhedgecock/radical-vscode",
      "license": "ISC"
    }
  },
  {
    "id": "field-lights",
    "name": "Field Lights",
    "mode": "dark",
    "sky": [
      "#151920",
      "#3e3938",
      "#212733"
    ],
    "def": {
      "label": "Field Lights",
      "only": "dark",
      "roles": {
        "accent": "#ffae57",
        "danger": "#ff3333",
        "success": "#bae67e",
        "warning": "#ffcc66",
        "pro": "#d4bfff"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#212733",
            "surface-1": "#242b38",
            "surface-2": "#272f3d",
            "surface-3": "#2a3241",
            "text-primary": "#e4e3dc",
            "text-secondary": "#b9b9b7",
            "text-muted": "#9ea0a0"
          }
        },
        "git": {
          "added": "#bae67e",
          "removed": "#ff3333",
          "modified": "#ffcc66",
          "merged": "#d4bfff",
          "closed": "#ff3333",
          "conflicting": "#f0a35a",
          "draft": "#797b7f"
        }
      }
    },
    "credit": {
      "extension": "sveggiani.vscode-field-lights",
      "author": "sveggiani",
      "repo": "sveggiani/vscode-field-lights",
      "license": "MIT"
    }
  },
  {
    "id": "plastic",
    "name": "Plastic",
    "mode": "dark",
    "sky": [
      "#14161a",
      "#3a2e35",
      "#21252b"
    ],
    "def": {
      "label": "Plastic",
      "only": "dark",
      "roles": {
        "accent": "#e06c75",
        "danger": "#d74e42",
        "success": "#98c379",
        "warning": "#e9d16c",
        "pro": "#b57edc"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#21252b",
            "surface-1": "#252930",
            "surface-2": "#282d34",
            "surface-3": "#2b3038",
            "text-primary": "#dce0e7",
            "text-secondary": "#b3b7bd",
            "text-muted": "#999da4"
          }
        },
        "git": {
          "added": "#98c379",
          "removed": "#d74e42",
          "modified": "#e9d16c",
          "merged": "#b57edc",
          "closed": "#d74e42",
          "conflicting": "#f0a35a",
          "draft": "#75797f"
        }
      }
    },
    "credit": {
      "extension": "will-stone.plastic",
      "author": "will-stone",
      "repo": "will-stone/plastic",
      "license": "MIT"
    }
  },
  {
    "id": "matrix",
    "name": "Matrix",
    "mode": "dark",
    "sky": [
      "#050505",
      "#0a1c0a",
      "#0c0c0c"
    ],
    "def": {
      "label": "Matrix",
      "only": "dark",
      "roles": {
        "accent": "#008800",
        "danger": "#b40000",
        "success": "#bbffbb",
        "warning": "#cccc00",
        "pro": "#880088"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#0c0c0c",
            "surface-1": "#101010",
            "surface-2": "#141414",
            "surface-3": "#181818",
            "text-primary": "#00e000",
            "text-secondary": "#03b203",
            "text-muted": "#04a004"
          }
        },
        "git": {
          "added": "#bbffbb",
          "removed": "#b40000",
          "modified": "#cccc00",
          "merged": "#880088",
          "closed": "#b40000",
          "conflicting": "#f0a35a",
          "draft": "#067406"
        }
      }
    },
    "credit": {
      "extension": "UstymUkhman.matrix-theme",
      "author": "UstymUkhman",
      "repo": "UstymUkhman/matrix-theme",
      "license": "MIT"
    }
  },
  {
    "id": "quiet-light-for-vsc",
    "name": "Quiet Light for VSC",
    "mode": "light",
    "sky": [
      "#dedede",
      "#dadfe7",
      "#f5f5f5"
    ],
    "def": {
      "label": "Quiet Light for VSC",
      "only": "light",
      "roles": {
        "accent": "#4b83cd",
        "danger": "#660000",
        "success": "#3f8f3a",
        "warning": "#b07a10",
        "pro": "#7a4fb5"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#eaeaea",
            "surface-1": "#f0f0f0",
            "surface-2": "#f5f5f5",
            "surface-3": "#f5f5f5",
            "text-primary": "#333333",
            "text-secondary": "#505050",
            "text-muted": "#626262"
          }
        },
        "git": {
          "added": "#3f8f3a",
          "removed": "#660000",
          "modified": "#b07a10",
          "merged": "#7a4fb5",
          "closed": "#660000",
          "conflicting": "#c76a1c",
          "draft": "#8b8b8b"
        }
      }
    },
    "credit": {
      "extension": "onecrayon.theme-quietlight-vsc",
      "author": "onecrayon",
      "repo": "onecrayon/theme-quietlight-vsc",
      "license": "MIT"
    }
  },
  {
    "id": "pop-n-lock-theme-by-luxcium",
    "name": "Pop N' Lock Theme by Luxcium ✨",
    "mode": "dark",
    "sky": [
      "#151627",
      "#22314e",
      "#20213b"
    ],
    "def": {
      "label": "Pop N' Lock Theme by Luxcium ✨",
      "only": "dark",
      "roles": {
        "accent": "#3399cc",
        "danger": "#ff3366",
        "success": "#b5d033",
        "warning": "#e79931",
        "pro": "#dd6688"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#20213b",
            "surface-1": "#232440",
            "surface-2": "#262746",
            "surface-3": "#282a4a",
            "text-primary": "#e1dad3",
            "text-secondary": "#b6b1b2",
            "text-muted": "#9c989d"
          }
        },
        "git": {
          "added": "#b5d033",
          "removed": "#ff3366",
          "modified": "#e79931",
          "merged": "#dd6688",
          "closed": "#ff3366",
          "conflicting": "#f0a35a",
          "draft": "#77747f"
        }
      }
    },
    "credit": {
      "extension": "Luxcium.pop-n-lock-theme-vscode",
      "author": "Luxcium",
      "repo": "luxcium/pop-n-lock-theme-vscode",
      "license": "MIT"
    }
  },
  {
    "id": "cobalt-next",
    "name": "Cobalt Next",
    "mode": "dark",
    "sky": [
      "#111a20",
      "#243d45",
      "#1b2b34"
    ],
    "def": {
      "label": "Cobalt Next",
      "only": "dark",
      "roles": {
        "accent": "#5fb3b3",
        "danger": "#ed6f7d",
        "success": "#99c794",
        "warning": "#fac863",
        "pro": "#edcded"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#1b2b34",
            "surface-1": "#1e2f39",
            "surface-2": "#21343f",
            "surface-3": "#233843",
            "text-primary": "#ffffff",
            "text-secondary": "#cdd0d2",
            "text-muted": "#9fa6aa"
          }
        },
        "git": {
          "added": "#99c794",
          "removed": "#ed6f7d",
          "modified": "#fac863",
          "merged": "#edcded",
          "closed": "#ed6f7d",
          "conflicting": "#f0a35a",
          "draft": "#788186"
        }
      }
    },
    "credit": {
      "extension": "dline.CobaltNext",
      "author": "dline",
      "repo": "davidleininger/cobaltnext-vscode",
      "license": "MIT"
    }
  },
  {
    "id": "ui-one-dark",
    "name": "βui - One Dark",
    "mode": "dark",
    "sky": [
      "#191b20",
      "#243647",
      "#262a31"
    ],
    "def": {
      "label": "βui - One Dark",
      "only": "dark",
      "roles": {
        "accent": "#1683dc",
        "danger": "#e1747d",
        "success": "#5ea702",
        "warning": "#e7c484",
        "pro": "#c792ea"
      },
      "dark": {
        "gray": {
          "anchors": {
            "surface-0": "#262a31",
            "surface-1": "#2a2e36",
            "surface-2": "#2d323a",
            "surface-3": "#30353e",
            "text-primary": "#e5e7eb",
            "text-secondary": "#bbbdc2",
            "text-muted": "#a1a4a9"
          }
        },
        "git": {
          "added": "#5ea702",
          "removed": "#e1747d",
          "modified": "#e7c484",
          "merged": "#c792ea",
          "closed": "#e1747d",
          "conflicting": "#e7c484",
          "draft": "#7c7f85"
        }
      }
    },
    "credit": {
      "extension": "swashata.beautiful-ui",
      "author": "swashata",
      "repo": "swashata/vscode-beautiful-ui",
      "license": "MIT"
    }
  },
  {
    "id": "ui-one-light",
    "name": "βui - One Light",
    "mode": "light",
    "sky": [
      "#e3e3e3",
      "#d8deea",
      "#fafafa"
    ],
    "def": {
      "label": "βui - One Light",
      "only": "light",
      "roles": {
        "accent": "#0e46c0",
        "danger": "#e03d2e",
        "success": "#5ea702",
        "warning": "#835a00",
        "pro": "#00a7aa"
      },
      "light": {
        "gray": {
          "anchors": {
            "surface-0": "#efefef",
            "surface-1": "#f5f5f5",
            "surface-2": "#fafafa",
            "surface-3": "#fafafa",
            "text-primary": "#383942",
            "text-secondary": "#55565d",
            "text-muted": "#606168"
          }
        },
        "git": {
          "added": "#5ea702",
          "removed": "#e03d2e",
          "modified": "#835a00",
          "merged": "#00a7aa",
          "closed": "#e03d2e",
          "conflicting": "#c76a1c",
          "draft": "#8b8b90"
        }
      }
    },
    "credit": {
      "extension": "swashata.beautiful-ui",
      "author": "swashata",
      "repo": "swashata/vscode-beautiful-ui",
      "license": "MIT"
    }
  }
]
