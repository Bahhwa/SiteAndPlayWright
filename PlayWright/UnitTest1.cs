using System.Threading.Tasks;
using Microsoft.Playwright;

namespace ProofOfConcept
{
    class PlaywrightExample
    {
        [Test]
        public static async Task test1()
        {
            using var playwright = await Playwright.CreateAsync();
            await using var browser = await playwright.Chromium.LaunchAsync(
                new BrowserTypeLaunchOptions { Headless = false }
            );
            var page = await browser.NewPageAsync();

            await page.GotoAsync(
                "https://m5dpy25.vgnet.volgrp.com/m5web/presentation/common/CSILogon.aspX?m5site=m5dpy25ss&debug=S"
            );

            //Enter Username
            await page.Locator("#nusername").ClickAsync();
            await page.Locator("#nusername").FillAsync("DEVIN");

            //Enter Password
            await page.Locator("#password").ClickAsync();
            await page.Locator("#password").FillAsync("AW2024qa$");

            //Enter Location
            await page.Locator("#location").ClickAsync();
            await page.Locator("#location").FillAsync("DH");

            //await page.Locator("#language").ClickAsync();
            await page.Locator("#rememberMe").ClickAsync();
            await page.Locator("#loginButton").ClickAsync();

            //Wait 5 seconds
            await Task.Delay(5000);
        }
    }
}
