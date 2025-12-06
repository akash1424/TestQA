import {test,expect} from '@playwright/test';
import { textbox } from '../componant/textbox';

test('TextBox Test Header Visible',async ({page})=>{

const txtboxpage=new textbox(page);
await txtboxpage.navigateToElement();
await expect(txtboxpage.headingtext).toBeVisible();





})
test('TextBox Test Fill Form and Submit with invalid email',async ({page})=>{

const txtboxpage=new textbox(page);
await txtboxpage.navigateToElement();
await txtboxpage.fullname.fill("Akash Patil");
await txtboxpage.email.fill("admingmail.com");
await txtboxpage.currentadd.fill("Ravet Mukai Chowk");
await txtboxpage.permenantadd.fill("Ravet Mukai chowk");
await txtboxpage.submitbtn.click();
await expect(txtboxpage.email).toHaveClass(/field-error/);





})

test('TextBox Test Fill Form and Submit with valid email',async ({page})=>{

const txtboxpage=new textbox(page);
await txtboxpage.navigateToElement();
await txtboxpage.fullname.fill("Akash Patil");
await txtboxpage.email.fill("admin@gmail.com");
await txtboxpage.currentadd.fill("Ravet Mukai Chowk");
await txtboxpage.permenantadd.fill("Ravet Mukai chowk");
await txtboxpage.submitbtn.click();
 await expect(txtboxpage.email).not.toHaveClass(/field-error/);

    // 2️⃣ Output section should be visible
    const output = page.locator('#output');
    await expect(output).toBeVisible();

    // 3️⃣ Validate values in output
    await expect(output).toContainText("Akash Patil");
    await expect(output).toContainText("admin@gmail.com");
    await expect(output).toContainText("Ravet Mukai Chowk");
    await expect(output).toContainText("Ravet Mukai chowk");






})