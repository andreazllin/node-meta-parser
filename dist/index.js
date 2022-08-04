"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavicon = exports.parseMetadata = void 0;
const node_html_parser_1 = require("node-html-parser");
const getPropertyContent = (metaElement, name) => {
    const propertyName = metaElement.getAttribute("property") || metaElement.getAttribute("name");
    return propertyName == name ? metaElement.getAttribute("content") || "" : null;
};
const parseMetadata = (html, properties) => {
    const $ = (0, node_html_parser_1.parse)(html);
    const metas = $.querySelectorAll("meta");
    const metadatas = {};
    metas.forEach((meta) => {
        properties.forEach((prop) => {
            const content = getPropertyContent(meta, prop);
            if (content) {
                metadatas[prop] = content;
            }
        });
    });
    return metadatas;
};
exports.parseMetadata = parseMetadata;
const getFavicon = (html) => {
    const $ = (0, node_html_parser_1.parse)(html);
    const links = $.querySelectorAll("link");
    const icon = links.find((link) => { var _a; return (_a = link.getAttribute("rel")) === null || _a === void 0 ? void 0 : _a.includes("icon"); });
    return icon === null || icon === void 0 ? void 0 : icon.getAttribute("href");
};
exports.getFavicon = getFavicon;
