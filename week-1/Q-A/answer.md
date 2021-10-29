Q: I have run the readFile function to read a file but in one case the read operation is not needed so I want to cancel the operation. How can I cancel the file reading operation in the continuation of the program?
<br>
A: AbortController

Q: The readFile function reads the file as a whole and takes it to memory. What can be used as an alternative to make the program use less memory?
<br>
A:createReadStream() 

