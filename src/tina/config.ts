import { defineConfig } from "tinacms";

import { articleFields } from "./templates";
import { categoryFields } from "./templates";
import { misc__elsewhere_Fields } from "./templates";
import { publicationFields } from "./templates";
import { video__elsewhere_Fields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "assets",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "assets",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Articles",
        name: "articles",
        path: "src/_articles",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...articleFields(),
        ],
      },
      {
        format: "md",
        label: "Publications",
        name: "publications",
        path: "src/_publications",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...publicationFields(),
        ],
      },
      {
        format: "md",
        label: "Categories",
        name: "categories",
        path: "src/_categories",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...categoryFields(),
        ],
      },
      {
        format: "md",
        label: "Videos",
        name: "videos",
        path: "src/_videos_elsewhere",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...video__elsewhere_Fields(),
        ],
      },
      {
        format: "md",
        label: "Misc",
        name: "misc",
        path: "src/_misc_elsewhere",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...misc__elsewhere_Fields(),
        ],
      },
    ],
  },
});
