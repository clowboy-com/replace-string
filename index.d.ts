declare namespace replaceString {
	type ReplacementFunction = (
		needle: string,
		matchCount: number,
		input: string,
		matchIndex: number
	) => string;

	interface Options {
		/**
		Index at which to start replacing.

		@default 0
		*/
		readonly fromIndex?: number;
	}
}

/**
Replace all substring matches in a string.

@param input - String to work on.
@param needle - String to match in `input`.
@param replacement - Replacement for `needle` matches.
@returns A new string with all `needle` matches replaced with `replacement`.

@example
```
import replaceString = require('replace-string');

const string = 'My friend has a 🐑. I want a 🐑 too!';

replaceString(string, '🐑', '🦄');
//=> 'My friend has a 🦄. I want a 🦄 too!'

replaceString('Foo 🐑 Bar', '🐑', (needle, matchCount, input, matchIndex) => `${needle}❤️`);
//=> 'Foo 🐑❤️ Bar'
```
*/
declare function replaceString(
	input: string,
	needle: string,
	replacement: string | replaceString.ReplacementFunction,
	options?: replaceString.Options
): string;

export = replaceString;
