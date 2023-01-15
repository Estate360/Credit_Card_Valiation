# Credit_Card_Valiation
This is a mini program, implemented using javaScript, which is used to check the validity of a credit card. Master card specifically

The valid Master Card number must satisfy the following conditions. 
- It should be 16 digits long. 
- It should start with either two digits numbers may range from 51 to 55 
- Or four digits numbers may range from 2221 to 2720

APPROACH

Get the String. Create a regular expression to check valid Master Card number as mentioned below:

regex = /^(?:5[1-5][0-9]{14})$/;

Where: ^ represents the starting of the string. 4 represents the string that should start with 4. [0-9]{12} represents the next twelve digits should be any between 0-9. ( represents the start of the group. ? represents the 0 or 1 time. [0-9]{3} represents the next three digits should be any between 0-9. ) represents the ending of the group. ? represents the 0 or 1 time. $ represents the ending of the string. Match the given string with the Regular Expression. In Java, this can be done by using Pattern.matcher(). In C++, this can be done by using regex_match(). Return true if the string matches with the given regular expression, else return false.

TEST CASES RESULTS; true true false false false false
