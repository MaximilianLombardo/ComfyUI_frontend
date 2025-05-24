/**
 * BioKit PrimeVue Theme Configuration
 * Comprehensive theme preset that integrates BioKit design system with PrimeVue components
 */
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export const BioKitPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFF5F3',
      100: '#FFE8E4',
      200: '#FFD1C9',
      300: '#FFAB9D',
      400: '#FF7B65',
      500: '#FF5335',
      600: '#E64A30',
      700: '#CC3F2A',
      800: '#B33525',
      900: '#992B1F',
      950: '#661C14'
    },
    colorScheme: {
      light: {
        primary: {
          color: '#FF5335',
          inverseColor: '#FFFFFF',
          hoverColor: '#E64A30',
          activeColor: '#CC3F2A'
        },
        surface: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F8F8F8',
          200: '#F3F3F3',
          300: '#E5E5E5',
          400: '#D0D0D0',
          500: '#B0B0B0',
          600: '#999999',
          700: '#666666',
          800: '#444444',
          900: '#333333',
          950: '#1A1A1A'
        },
        formField: {
          background: '#F8F8F8',
          disabledBackground: '#F0F0F0',
          filledBackground: '#F3F3F3',
          filledHoverBackground: '#E5E5E5',
          borderColor: '#E5E5E5',
          hoverBorderColor: '#D0D0D0',
          focusBorderColor: '#FF5335',
          invalidBorderColor: '#EF4444',
          color: '#000000',
          disabledColor: '#999999',
          placeholderColor: '#999999',
          floatLabelColor: '#666666',
          floatLabelFocusColor: '#FF5335',
          floatLabelInvalidColor: '#EF4444',
          iconColor: '#666666',
          shadow: '0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000'
        },
        content: {
          background: '#FFFFFF',
          hoverBackground: '#F8F8F8',
          borderColor: '#E5E5E5',
          color: '#000000',
          hoverColor: '#000000'
        },
        highlight: {
          background: '#FF5335',
          focusBackground: '#E64A30',
          color: '#FFFFFF',
          focusColor: '#FFFFFF'
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.4)',
          color: '#000000'
        },
        navigation: {
          item: {
            focusBackground: '#F8F8F8',
            activeBackground: '#F3F3F3',
            color: '#000000',
            focusColor: '#000000',
            activeColor: '#FF5335',
            icon: {
              color: '#666666',
              focusColor: '#666666',
              activeColor: '#FF5335'
            }
          }
        },
        overlay: {
          select: {
            background: '#FFFFFF',
            borderColor: '#E5E5E5',
            color: '#000000'
          },
          popover: {
            background: '#FFFFFF',
            borderColor: '#E5E5E5',
            color: '#000000'
          },
          modal: {
            background: '#FFFFFF',
            borderColor: '#E5E5E5',
            color: '#000000'
          }
        }
      },
      dark: {
        primary: {
          color: '#FF5335',
          inverseColor: '#FFFFFF',
          hoverColor: '#FF7755',
          activeColor: '#E64A30'
        },
        surface: {
          0: '#000000',
          50: '#111111',
          100: '#1A1A1A',
          200: '#222222',
          300: '#333333',
          400: '#444444',
          500: '#666666',
          600: '#888888',
          700: '#999999',
          800: '#B0B0B0',
          900: '#CCCCCC',
          950: '#E5E5E5'
        },
        formField: {
          background: '#222222',
          disabledBackground: '#1A1A1A',
          filledBackground: '#333333',
          filledHoverBackground: '#444444',
          borderColor: '#444444',
          hoverBorderColor: '#666666',
          focusBorderColor: '#FF5335',
          invalidBorderColor: '#EF4444',
          color: '#FFFFFF',
          disabledColor: '#666666',
          placeholderColor: '#666666',
          floatLabelColor: '#999999',
          floatLabelFocusColor: '#FF5335',
          floatLabelInvalidColor: '#EF4444',
          iconColor: '#999999',
          shadow: '0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000'
        },
        content: {
          background: '#1A1A1A',
          hoverBackground: '#222222',
          borderColor: '#444444',
          color: '#FFFFFF',
          hoverColor: '#FFFFFF'
        },
        highlight: {
          background: '#FF5335',
          focusBackground: '#FF7755',
          color: '#FFFFFF',
          focusColor: '#FFFFFF'
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.8)',
          color: '#FFFFFF'
        },
        navigation: {
          item: {
            focusBackground: '#222222',
            activeBackground: '#333333',
            color: '#FFFFFF',
            focusColor: '#FFFFFF',
            activeColor: '#FF5335',
            icon: {
              color: '#999999',
              focusColor: '#999999',
              activeColor: '#FF5335'
            }
          }
        },
        overlay: {
          select: {
            background: '#1A1A1A',
            borderColor: '#444444',
            color: '#FFFFFF'
          },
          popover: {
            background: '#1A1A1A',
            borderColor: '#444444',
            color: '#FFFFFF'
          },
          modal: {
            background: '#1A1A1A',
            borderColor: '#444444',
            color: '#FFFFFF'
          }
        }
      }
    }
  },
  components: {
    button: {
      borderRadius: '8px',
      paddingX: '24px',
      paddingY: '12px',
      sm: {
        fontSize: '0.875rem',
        paddingX: '16px',
        paddingY: '8px'
      },
      lg: {
        fontSize: '1.125rem',
        paddingX: '32px',
        paddingY: '16px'
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '#FF5335',
              hoverBackground: '#E64A30',
              activeBackground: '#CC3F2A',
              borderColor: '#FF5335',
              hoverBorderColor: '#E64A30',
              activeBorderColor: '#CC3F2A',
              color: '#FFFFFF',
              hoverColor: '#FFFFFF',
              activeColor: '#FFFFFF',
              focusRing: {
                color: 'rgba(255, 83, 53, 0.2)',
                shadow: '0 0 0 0.2rem rgba(255, 83, 53, 0.2)'
              }
            },
            secondary: {
              background: 'transparent',
              hoverBackground: 'transparent',
              activeBackground: '#FF5335',
              borderColor: '#000000',
              hoverBorderColor: '#FF5335',
              activeBorderColor: '#FF5335',
              color: '#000000',
              hoverColor: '#FF5335',
              activeColor: '#FFFFFF',
              focusRing: {
                color: 'rgba(255, 83, 53, 0.2)',
                shadow: '0 0 0 0.2rem rgba(255, 83, 53, 0.2)'
              }
            }
          }
        },
        dark: {
          root: {
            primary: {
              background: '#FF5335',
              hoverBackground: '#FF7755',
              activeBackground: '#E64A30',
              borderColor: '#FF5335',
              hoverBorderColor: '#FF7755',
              activeBorderColor: '#E64A30',
              color: '#FFFFFF',
              hoverColor: '#FFFFFF',
              activeColor: '#FFFFFF',
              focusRing: {
                color: 'rgba(255, 83, 53, 0.2)',
                shadow: '0 0 0 0.2rem rgba(255, 83, 53, 0.2)'
              }
            },
            secondary: {
              background: 'transparent',
              hoverBackground: 'transparent',
              activeBackground: '#FF5335',
              borderColor: '#FFFFFF',
              hoverBorderColor: '#FF5335',
              activeBorderColor: '#FF5335',
              color: '#FFFFFF',
              hoverColor: '#FF5335',
              activeColor: '#FFFFFF',
              focusRing: {
                color: 'rgba(255, 83, 53, 0.2)',
                shadow: '0 0 0 0.2rem rgba(255, 83, 53, 0.2)'
              }
            }
          }
        }
      }
    },
    inputtext: {
      borderRadius: '8px',
      colorScheme: {
        light: {
          root: {
            background: '#F8F8F8',
            disabledBackground: '#F0F0F0',
            filledBackground: '#F3F3F3',
            filledHoverBackground: '#E5E5E5',
            borderColor: '#E5E5E5',
            hoverBorderColor: '#D0D0D0',
            focusBorderColor: '#FF5335',
            invalidBorderColor: '#EF4444',
            color: '#000000',
            disabledColor: '#999999',
            placeholderColor: '#999999',
            shadow: '0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000',
            paddingX: '16px',
            paddingY: '12px',
            transition: {
              duration: '150ms',
              shadow: '0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000',
              focusRing: {
                width: '2px',
                style: 'solid',
                color: '#FF5335',
                offset: '0',
                shadow: 'none'
              }
            }
          }
        },
        dark: {
          root: {
            background: '#222222',
            disabledBackground: '#1A1A1A',
            filledBackground: '#333333',
            filledHoverBackground: '#444444',
            borderColor: '#444444',
            hoverBorderColor: '#666666',
            focusBorderColor: '#FF5335',
            invalidBorderColor: '#EF4444',
            color: '#FFFFFF',
            disabledColor: '#666666',
            placeholderColor: '#666666',
            shadow: '0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000',
            paddingX: '16px',
            paddingY: '12px',
            transition: {
              duration: '150ms',
              shadow: '0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000',
              focusRing: {
                width: '2px',
                style: 'solid',
                color: '#FF5335',
                offset: '0',
                shadow: 'none'
              }
            }
          }
        }
      }
    },
    select: {
      borderRadius: '8px',
      colorScheme: {
        light: {
          root: {
            background: '#F8F8F8',
            disabledBackground: '#F0F0F0',
            borderColor: '#E5E5E5',
            hoverBorderColor: '#D0D0D0',
            focusBorderColor: '#FF5335',
            invalidBorderColor: '#EF4444',
            color: '#000000',
            disabledColor: '#999999',
            placeholderColor: '#999999',
            shadow: '0 0 #0000'
          },
          overlay: {
            background: '#FFFFFF',
            borderColor: '#E5E5E5',
            color: '#000000'
          },
          item: {
            focusBackground: '#F8F8F8',
            selectedBackground: '#FF5335',
            selectedFocusBackground: '#E64A30',
            color: '#000000',
            focusColor: '#000000',
            selectedColor: '#FFFFFF',
            selectedFocusColor: '#FFFFFF'
          }
        },
        dark: {
          root: {
            background: '#222222',
            disabledBackground: '#1A1A1A',
            borderColor: '#444444',
            hoverBorderColor: '#666666',
            focusBorderColor: '#FF5335',
            invalidBorderColor: '#EF4444',
            color: '#FFFFFF',
            disabledColor: '#666666',
            placeholderColor: '#666666',
            shadow: '0 0 #0000'
          },
          overlay: {
            background: '#1A1A1A',
            borderColor: '#444444',
            color: '#FFFFFF'
          },
          item: {
            focusBackground: '#333333',
            selectedBackground: '#FF5335',
            selectedFocusBackground: '#FF7755',
            color: '#FFFFFF',
            focusColor: '#FFFFFF',
            selectedColor: '#FFFFFF',
            selectedFocusColor: '#FFFFFF'
          }
        }
      }
    },
    checkbox: {
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      colorScheme: {
        light: {
          root: {
            borderColor: '#E5E5E5',
            background: '#FFFFFF',
            hoverBackground: '#F8F8F8',
            hoverBorderColor: '#D0D0D0',
            checkedBackground: '#FF5335',
            checkedHoverBackground: '#E64A30',
            checkedBorderColor: '#FF5335',
            checkedHoverBorderColor: '#E64A30',
            disabledBackground: '#F0F0F0'
          },
          icon: {
            color: '#FFFFFF',
            hoverColor: '#FFFFFF',
            checkedColor: '#FFFFFF',
            checkedHoverColor: '#FFFFFF'
          }
        },
        dark: {
          root: {
            borderColor: '#444444',
            background: '#222222',
            hoverBackground: '#333333',
            hoverBorderColor: '#666666',
            checkedBackground: '#FF5335',
            checkedHoverBackground: '#FF7755',
            checkedBorderColor: '#FF5335',
            checkedHoverBorderColor: '#FF7755',
            disabledBackground: '#1A1A1A'
          },
          icon: {
            color: '#FFFFFF',
            hoverColor: '#FFFFFF',
            checkedColor: '#FFFFFF',
            checkedHoverColor: '#FFFFFF'
          }
        }
      }
    },
    radiobutton: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      colorScheme: {
        light: {
          root: {
            borderColor: '#E5E5E5',
            background: '#FFFFFF',
            hoverBackground: '#F8F8F8',
            hoverBorderColor: '#D0D0D0',
            checkedBackground: '#FF5335',
            checkedHoverBackground: '#E64A30',
            checkedBorderColor: '#FF5335',
            checkedHoverBorderColor: '#E64A30',
            disabledBackground: '#F0F0F0'
          },
          icon: {
            color: '#FFFFFF',
            hoverColor: '#FFFFFF',
            checkedColor: '#FFFFFF',
            checkedHoverColor: '#FFFFFF'
          }
        },
        dark: {
          root: {
            borderColor: '#444444',
            background: '#222222',
            hoverBackground: '#333333',
            hoverBorderColor: '#666666',
            checkedBackground: '#FF5335',
            checkedHoverBackground: '#FF7755',
            checkedBorderColor: '#FF5335',
            checkedHoverBorderColor: '#FF7755',
            disabledBackground: '#1A1A1A'
          },
          icon: {
            color: '#FFFFFF',
            hoverColor: '#FFFFFF',
            checkedColor: '#FFFFFF',
            checkedHoverColor: '#FFFFFF'
          }
        }
      }
    },
    dialog: {
      borderRadius: '12px',
      padding: '24px',
      gap: '16px',
      header: {
        gap: '16px'
      },
      colorScheme: {
        light: {
          root: {
            background: '#FFFFFF',
            borderColor: '#E5E5E5',
            color: '#000000',
            shadow:
              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          },
          header: {
            color: '#000000'
          }
        },
        dark: {
          root: {
            background: '#1A1A1A',
            borderColor: '#444444',
            color: '#FFFFFF',
            shadow:
              '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
          },
          header: {
            color: '#FFFFFF'
          }
        }
      }
    },
    toast: {
      borderRadius: '8px',
      colorScheme: {
        light: {
          blur: '0',
          info: {
            background: '#3B82F6',
            borderColor: '#3B82F6',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          },
          success: {
            background: '#10B981',
            borderColor: '#10B981',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          },
          warn: {
            background: '#F59E0B',
            borderColor: '#F59E0B',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          },
          error: {
            background: '#EF4444',
            borderColor: '#EF4444',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          },
          secondary: {
            background: '#F3F3F3',
            borderColor: '#F3F3F3',
            color: '#000000',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          },
          contrast: {
            background: '#000000',
            borderColor: '#000000',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }
        },
        dark: {
          blur: '0',
          info: {
            background: '#3B82F6',
            borderColor: '#3B82F6',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          },
          success: {
            background: '#10B981',
            borderColor: '#10B981',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          },
          warn: {
            background: '#F59E0B',
            borderColor: '#F59E0B',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          },
          error: {
            background: '#EF4444',
            borderColor: '#EF4444',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          },
          secondary: {
            background: '#333333',
            borderColor: '#333333',
            color: '#FFFFFF',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          },
          contrast: {
            background: '#FFFFFF',
            borderColor: '#FFFFFF',
            color: '#000000',
            shadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          }
        }
      }
    }
  }
})
