# Unexpected Token in JSON Response: Missing Closing Brace

This repository demonstrates a common yet easily overlooked error in Node.js:  sending an invalid JSON response that results in an "Unexpected token" error in the client.

The `bug.js` file contains the problematic code. The server attempts to send a JSON response, but a missing closing brace causes a syntax error.

The `bugSolution.js` file provides a corrected version, highlighting the importance of properly formatted JSON responses.