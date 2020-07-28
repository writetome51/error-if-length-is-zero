import {errorIfLengthIsZero} from './index.js';


errorIfLengthIsZero(' ');
console.log('test 1 passed');


errorIfLengthIsZero('\n');
console.log('test 2 passed');


errorIfLengthIsZero([0]);
console.log('test 3 passed');


errorIfLengthIsZero({length: 1});
console.log('test 4 passed');


let errorTriggered = false;
try {
	errorIfLengthIsZero('');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


errorTriggered = false;
try {
	errorIfLengthIsZero([]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


errorTriggered = false;
try {
	errorIfLengthIsZero({length: 0});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


errorTriggered = false;
try {
	errorIfLengthIsZero(true);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');



errorTriggered = false;
try {
	errorIfLengthIsZero(1);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');


errorTriggered = false;
try {
	errorIfLengthIsZero({length: -1});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 10 passed');
else console.log('test 10 FAILED');

