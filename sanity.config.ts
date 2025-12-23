/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { SanityDocument, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

import { client } from "./sanity/lib/client";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { ResolveURL } from "./sanity/lib/url";

import { SEOPane } from "sanity-plugin-seo-pane";
import { schemaMarkup } from "@operationnation/sanity-plugin-schema-markup";
import { Iframe } from "sanity-plugin-iframe-pane";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import {} from "sanity";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      // Define a function named "structure" that takes a parameter "S"
      structure: (S, context) => {
        // Return a list with a title of "Content" and items
        return S.list()
          .title("Content")
          .items([
            // Filter the document type list items and exclude the item with ID "media.tag"
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !["media.tag", "settings", "developer"].includes(
                  listItem.getId()!
                )
            ),
            orderableDocumentListDeskItem({
              type: "developer",
              title: "Developer",
              S,
              context,
            }),
            S.listItem()
              .title("Settings")
              .child(
                S.editor()
                  .title("Settings")
                  .id("settings")
                  .schemaType("settings")
                  .documentId("settings")
              ),
          ]);
      },
      defaultDocumentNode: (S) => {
        return S.document().views([
          S.view.form(),
          S.view
            .component(SEOPane)
            .options({
              // Retrieve the keywords and synonyms at the given dot-notated strings
              keywords: `seo.keywords`,
              synonyms: `seo.synonyms`,
              url: async (doc: any) => ResolveURL(doc),

              // Alternatively, specify functions (may be async) to extract values
              // keywords: doc => doc.seo?.keywords,
              // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
              // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
            })
            .title("SEO"),
          S.view
            .component(Iframe)
            .options({
              url: (doc: any) => ResolveURL(doc),
            })
            .title("Preview"),
        ]);
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    schemaMarkup(),
  ],
});
