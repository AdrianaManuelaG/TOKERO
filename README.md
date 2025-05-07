
This project contains end-to-end automated tests written with Playwright and TypeScript for the Tokero website.

--Technology Stack Choice--
For this project, I chose Playwright with TypeScript because I'm already familiar with this stack and have previous experience writing E2E tests in this environment.
Although the ideal stack suggested was Playwright with .NET, I haven't yet worked with it. However, I plan to study it further and integrate it into future test automation projects.

Before running the tests, make sure you have the necessary dependencies installed. Follow the steps below:

1. Clone the repository
bash : git clone https://github.com/AdrianaManuelaG/TOKERO.git

2. Install Dependencies
Install the necessary dependencies, including Playwright and browsers:

bash : npm install
       npx playwright install --with-deps

3. Run Tests
-You can run the Playwright tests with the following command:

bash : npx playwright test

-You can run a specific test file by using the following command:

bash: npx playwright test -g 'file name'

-To generate a report, run the tests with the following command:

bash: npx playwright show-report

Tests Included:
1. Multi-language Testing
-Tested languages: RO, FR, DE
-Each language tested in its own file

2. Policies Page Testing
-Total of 6 tests related to the policy pages
-Navigates to each individual policy page from the footer

3. Performance Test
-Measures time to fully load the homepage
-Throws error if load time > 4000ms

4. Title Verification
-Ensures the page title matches expected values on the homepage

** Technologies Used
-Playwright
-TypeScript
-Git

**This project is integrated with GitHub Actions to automate the execution of Playwright tests. When changes are pushed to the main or master branches, or when a pull request is created, the tests are automatically triggered.

!!!Trade-offs Made!!!

-Due to limited time and a focus on functional test coverage:

-Tests were kept simple and direct

-No Page Object Model (POM) used

-Code structure doesn't follow DRY/KISS or advanced best practices

-Tests were split into individual files for faster debugging and readability




