import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

import { collections } from "../content/config";

type CollectionKey = keyof typeof collections;

export interface FileNode {
    name: string;
    isDir: boolean,
    isRootFile?: boolean,
    children?: FileNode[];
}

export async function generateFileTree(collectionName: CollectionKey): Promise<FileNode> {
    const files: CollectionEntry<CollectionKey>[] = await getCollection(collectionName);
    const fileTree: FileNode = { name: "root", isDir: true, children: [] };

    files.forEach((file) => {
        const parts: string[] = file.id.split("/");
        let currentNode: FileNode = fileTree;

        if (parts.length === 1) {
            // root file
            currentNode.children?.push({ name: parts[0], isRootFile: true, isDir: false })
        }
        else {

            parts.forEach((part, index) => {
                if (index === parts.length - 1) {
                    // Last part, it's a file
                    currentNode.children?.push({ name: part, isDir: false });
                } else {
                    // Directory node
                    let dirNode = currentNode.children?.find((node) => node.name === part && node.isDir);
                    if (!dirNode) {
                        dirNode = { name: part, isDir: true, children: [] };
                        currentNode.children?.push(dirNode);
                    }
                    currentNode = dirNode;
                }
            });
        }
    });

    fileTree.children?.sort((a, b) => {
        if (!a.children && !b.children) {
            return 0;
        }
        if (!a.children) {
            return 1;
        }
        if (!b.children) {
            return -1;
        }
        return  b.children.length - a.children.length;
    })

    console.log(fileTree)
    return fileTree;
}

