from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Scroll down to Skills section
    page.evaluate("window.scrollBy(0, 1500)")
    page.wait_for_timeout(1000)

    # Take screenshot at the skills section
    page.screenshot(path="/home/jules/verification/screenshots/skills_grid.png")
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