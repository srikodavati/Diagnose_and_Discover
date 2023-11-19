# DiagnoseAndDiscover

CS567 Team 2 Final Project

**Type**: Interface with System(A)

**Team Members**:

SriLekha Kodavati (sk121)

Sindhu Vydana (svydana2)

Ruthwik Pala (ruthwik2)

Vishnu Deep Mandava(vm28)

# Game Overview

1.**Structure**: The game consists of 5 rounds with roles reversing each round.

2. **Role**s: Each round features one player as the clue giver and the other as the guesser.
3. **Clue Giving**:
   A 'taboo' card displays words the clue giver cannot use.
   The clue giver provides a single-word clue within 90 seconds.
4. **Guessing**:
   The guesser tries to guess the word within 90 seconds.
   A correct first guess earns 5 points.
5. **Second Clue**:
   If the first guess is incorrect, the clue giver offers a second clue.
   A correct guess after the second clue earns 3 points.
6. **Discussion**:
   After each question, the answer and the source are revealed.
   Players can discuss about the question and strategize for the next rounds.

# Running the game locally

1) npm has to be installed - npm install
2) Node.js should be initialized for Backend - npm  init
3) Run the following commands to install modules:
   - npm install react-scripts --save
   - npm install web-vitals
   - npm install express socket.io
   - npm install socket.io-client
