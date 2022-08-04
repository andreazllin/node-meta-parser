export interface Metadata {
    [key: string]: string;
}
export declare const parseMetadata: (html: string, properties: string[]) => Metadata;
export declare const getFavicon: (html: string) => string | undefined;
