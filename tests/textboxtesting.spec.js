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