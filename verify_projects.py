from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Scroll down to Projects section
    page.evaluate("window.scrollBy(0, 1500)")
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollBy(0, 1500)")
    page.wait_for_timeout(1000)

    # Click on the first project (Ethiopian Shipping And Logistics)
    page.locator("text=Read Case Study").first.click(force=True)
    page.wait_for_timeout(2000)

    # Scroll through the case study page
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(1000)

    # Take screenshot at the gallery section
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()