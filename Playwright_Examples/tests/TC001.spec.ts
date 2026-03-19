import {test} from '@playwright/test';
// TC001_openApplication : name of the test case reflected in HTML report
// async({page}) =>{} : callback function which will be executed when the test is executed

test('TC001_openApplication', async({page})=>{
	//navigate to the application
await	page.goto("https://ctcorphyd.com/SureshIT/login.php");
await   page.waitForTimeout(5000);
});

