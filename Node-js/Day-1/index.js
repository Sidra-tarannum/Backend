// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

// import chalk from 'chalk';

// const log = console.log;

// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));


// const error = chalk.bold.red;
// const warning = chalk.hex('#FFA500'); // Orange color

// console.log(error('Error!'));
// console.log(warning('Warning!'));


// const name = 'Junaid';
// console.log(chalk.green('Hello %s'), name);

// // Figlet

// import {modifierNames, foregroundColorNames} from 'chalk';

// console.log(modifierNames.includes('bold'));
// //=> true

// console.log(foregroundColorNames.includes('pink'));
// //=> false

// import figlet from "figlet";





// figlet("Hello !!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// async function doStuff() {
//   const text = await figlet.text("Sidra!");
//   console.log(text);
// }

// doStuff();



// figlet.text(
//   "Boo!",
//   {
//     font: "Ghost",
//     horizontalLayout: "default",
//     verticalLayout: "default",
//     width: 80,
//     whitespaceBreak: true,
//   },
//   function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   }
// );


// try {
//   console.log(
//     await figlet.text("Boo!", {
//       font: "Ghost",
//       horizontalLayout: "default",
//       verticalLayout: "default",
//       width: 80,
//       whitespaceBreak: true,
//     })
//   );
// } catch (err) {
//   console.log("Something went wrong...");
//   console.dir(err);
// }



// // IsEven

// // var isEven = require('is-even');
 
// // isEven(0);
// // //=> true
// // isEven('1');
// // //=> false
// // isEven(2);
// // //=> true
// // isEven('3');
// //=> false
