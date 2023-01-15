# Credit_Card_Valiation
This is a mini program, implemented using javaScript, which is used to check the validity of a credit card. Master card specifically

The valid Master Card number must satisfy the following conditions. 
- It should be 16 digits long. 
- It should start with either two digits numbers may range from 51 to 55 
- Or four digits numbers may range from 2221 to 2720

APPROACH

Get the String. Create a regular expression to check valid Master Card number as mentioned below:

regex = /^(?:5[1-5][0-9]{14})$/;

‘ ^ ‘  is representing the starting of the Pattern.

‘ 5[1-5]{1} ‘ is representing that the First letter must be 5 and the second letter can be within 1 to 5.

‘ [0-9]{14}
Above represents the rest of the number can be within 0-9.

‘$’ represents the end of the pattern.

TEST CASES;
You can test it using the following Test Master Credit Card Number;
- 5555555555554444 
- 5105105105105100
- 5506920809243667

Make sure to use "npm install" to access the "prompt-sync" module package.
