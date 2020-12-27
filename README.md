# Temperatuur LCD Display by Robin Deleu

[![NPM Version](https://img.shields.io/npm/v/lcd-temperature-robind.svg)](https://www.npmjs.com/package/lcd-temperature-robind)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
![NPM Downloads](https://img.shields.io/npm/dw/lcd-temperature-robind)

This program acts as a temperaturedisplay. When you give input the program it show you the temperature in *digitstyle*.

## Getting Started

### Prerequisites

You will need to instal node.js and ts-node to be able to run this program.

Instal node.js:

```bash
cinst nodejs.install
```

Instal ts-node

```bash
npm install -g ts-node
```

Or you just can use the npm library like this:

```bash
npm i lcd-temperature-robind
```

### Using the program

The program is ready to use, if you want to use all functions you will need to edit some things.
The options are set a frame around the display, the other option is to make all digits bigger.

You can edit everything in the configurationfile in the src directory.

```ts
const framework = 1
const bignumbers = 1
```

Framework stands for the frame around the digits.
If you leave it on 1 it will have the frame, if you set it to 0 the frame will not be displayed.

Bignumbers stands how big the numbers would be (small or large).
If you leave it on 1 it will have the big numbers, if you set it to 0 the numbers will be displayed smaller.

If you want to edit the temperature that will be displayed you can change the value on the temperatuur file that is located in the src directory.

```ts
const temp = 67.89
```

The temperature is in °C and is limited to 2 digits after the decimal point.

If you want to run the program, you will need to run this command:

```bash
ts-node .\index.ts
```

## Examples of code output

### Example one

The settings are: frame on, bignumbers on and it's 67,89 °C.

```ts
const framework = 1
const bignumbers = 1
const temp = 67.89
```

output:

```bash
 -------

 |  --  |
 | |    |
 | |    |
 |  --  |
 | |  | |
 | |  | |
 |  --  |


 |  --  |
 |    | |
 |    | |
 |    | |
 |    | |


 |      |
 |   /  |


 |  --  |
 | |  | |
 | |  | |
 |  --  |
 | |  | |
 | |  | |
 |  --  |


 |  --  |
 | |  | |
 | |  | |
 |  --  |
 |    | |
 |    | |
 |  --  |


 |  --  |
 | |  | |
 | |  | |
 |  --  |

 |  --  |
 | |    |
 | |    |
 | |    |
 | |    |
 |  --  |

 -------
```

### Example two

The settings are: frame off, bignumbers on and it's 20,54 °C.

```ts
const framework = 0
const bignumbers = 1
const temp = 20.54
```

output:

```bash
   --
    |
    |
  --
 |
 |
  --


  --
 |  |
 |  |
 |  |
  --



  /


  --
 |
 |
  --
    |
    |
  --


 |  |
 |  |
  --
    |
    |


  --
 |  |
 |  |
  --

  --
 |
 |
 |
 |
  --
```

### Example three

The settings are: frame off, bignumbers off and it's 11,86 °C.

```ts
const framework = 0
const bignumbers = 0
const temp = 11.86
```

output:

```bash

   |
   |


   |
   |



  /


  -
 | |
  -
 | |
  -


  -
 |
  -
 | |
  -


  -
 | |
  -

  -
 |
 |
  -
```

### Example four

The settings are: frame on, bignumbers off and it's 97,42 °C.

```ts
const framework = 1
const bignumbers = 0
const temp = 97.42
```

output:

```bash
 -------

 |  -  |
 | | | |
 |  -  |
 |   | |
 |  -  |


 |  -  |
 |   | |
 |   | |


 |     |
 |  /  |


 | | | |
 |  -  |
 |   | |


 |  -  |
 |   | |
 |  -  |
 | |   |
 |  -  |


 |  -  |
 | | | |
 |  -  |

 |  -  |
 | |   |
 | |   |
 |  -  |

 -------
```

## Documentation

[Link to extra documentation](https://vives-software-engineering-2020.github.io/examenopdracht-robindeleu/)

## Authors

* **Robin Deleu** - *Student VIVES University of Applied Sciences*

## License

This project is licensed under the MIT License see the [LICENSE.md](LICENSE.md) file for details
