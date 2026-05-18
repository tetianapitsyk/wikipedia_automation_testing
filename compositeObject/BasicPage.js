import { ToolsDropdown } from "../componentObject/ToolsDropdown";
import { WikiAppearance } from "../componentObject/WikiAppearance";
import { WikiHeader } from "../componentObject/WikiHeader";

export class BasicPage {
    constructor(page) {
        this.page = page;
        this.toolsDropdown = new ToolsDropdown(page);
        this.wikiAppearance = new WikiAppearance(page);
        this.wikiHeader = new WikiHeader(page);
    }
}