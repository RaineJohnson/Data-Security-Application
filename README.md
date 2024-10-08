This project demonstrates the uses of secure software engineering for a basic school database set up on a simulated server. It deals with properly assigning all relevant roles and ensuring sensitive information isn't stored directly within the readable code. 

All student and teacher data is held within the data folder, and the database-api.js file handles all of the data and the surrounding logic. 

The .env file stores the API keys, the pg_hba.conf file configures server connections, the postgresql.conf file stores all of the specific roles, and the demographics.js file handles all the logic for this project, as well as handling errors and edge cases. 

In this example project, the .gitignore file is not included so you can see how I set up the server and the roles, along with storing the API keys in environment variables rather than directly in the code. Normally you absolutely must exclude these from a public repository, but for the sake of demonstration, I'm keeping them in here. 

The .gitignore file should include the .env, pg_hba.conf, and the postgresql.conf files in a serious application setting as we don't want this information to be public.
