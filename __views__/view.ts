import { getFullUrl } from 'data/links'

export default abstract class View {
  abstract pageUrl: string

  openPage() {
    if (this.isPageOpened()) {
      browser.refresh()
    } else {
      browser.url(this.pageUrl)
    }
  }

  isPageOpened(): boolean {
    return browser.getUrl() === getFullUrl(this.pageUrl)
  }
}
