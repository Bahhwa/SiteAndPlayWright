using System.Threading.Tasks;
using Microsoft.Playwright;
using NUnit.Framework;

namespace ProofOfConcept
{
    [TestFixture]
    public class PhotoPortfolioTests
    {
        [Test]
        public async Task NavigationTest()
        {
            using var playwright = await Playwright.CreateAsync();
            await using var browser = await playwright.Chromium.LaunchAsync(
                new BrowserTypeLaunchOptions { Headless = false }
            );
            var page = await browser.NewPageAsync();

            // Navigate to the site
            await page.GotoAsync("http://localhost:4200");
            
            // Check if we're on the home page
            await page.WaitForSelectorAsync("[data-testid='home-page']");
            Assert.IsTrue(await page.IsVisibleAsync("[data-testid='home-title']"));
            
            // Navigate to Gallery page
            await page.ClickAsync("[data-testid='nav-gallery']");
            await page.WaitForSelectorAsync("[data-testid='gallery-page']");
            Assert.IsTrue(await page.IsVisibleAsync("[data-testid='gallery-title']"));
            
            // Click on a photo to expand it
            await page.ClickAsync("[data-testid='gallery-photo-0']");
            await page.WaitForSelectorAsync("[data-testid='photo-overlay']");
            Assert.IsTrue(await page.IsVisibleAsync("[data-testid='expanded-photo']"));
            
            // Close the expanded photo
            await page.ClickAsync("[data-testid='close-overlay-btn']");
            
            // Navigate to Contact page
            await page.ClickAsync("[data-testid='nav-contact']");
            await page.WaitForSelectorAsync("[data-testid='contact-page']");
            
            // Fill out the contact form
            await page.FillAsync("[data-testid='name-input']", "Test User");
            await page.FillAsync("[data-testid='email-input']", "test@example.com");
            await page.FillAsync("[data-testid='message-input']", "This is a test message");
            
            // Submit the form
            await page.ClickAsync("[data-testid='submit-button']");
            
            // Wait for 2 seconds to see the result
            await Task.Delay(2000);
        }
    }
}