exports.textbox=
class textbox{
constructor(page)
{
    this.page=page;
    this.headingtext=page.locator('//h1[text()="Text Box"]');
    this.fullname=page.getByPlaceholder("Full Name");
    this.email=page.getByRole('textbox', { name: /name@example\.com/i });
    this.currentadd=page.locator('#currentAddress');
    this.permenantadd=page.locator('#permanentAddress');
    this.submitbtn=page.getByRole('button',{name:"Submit"});

}
async navigateToElement()
{
await this.page.goto("https://demoqa.com/text-box");
}



}