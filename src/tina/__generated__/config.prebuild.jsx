// tina/config.ts
import { defineConfig } from "tinacms";

// tina/templates.ts
function articleFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle"
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true
    },
    {
      type: "reference",
      name: "publication",
      label: "publication",
      collections: ["publications"],
      required: true
    },
    {
      type: "string",
      name: "blurb",
      label: "blurb",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "refs",
      label: "refs"
    },
    {
      type: "string",
      name: "sources",
      label: "sources"
    },
    {
      // Ideally this would be a list of references to the categories
      // collection. We can't have lists of references. And lists of objects
      // wrapping references are janky - and don't work. Because, the
      // returned items are not strings, as we need them to be, but objects.
      // Therefore, we hack this by hardwiring a list of strings which will work,
      // so long as the categories aren't changed!
      type: "string",
      label: "categories",
      name: "categories",
      list: true,
      options: [
        { value: "_categories/book-chapters.md", label: "Book Chapters" },
        { value: "_categories/fiction-miscellaneous.md", label: "Fiction and Miscellaneous" },
        { value: "_categories/journalism.md", label: "Journalism" },
        { value: "_categories/scholarship.md", label: "Scholarship" }
      ]
    }
  ];
}
function categoryFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true
    }
  ];
}
function misc__elsewhere_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true
    }
  ];
}
function publicationFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true
    },
    {
      type: "string",
      name: "url",
      label: "url"
    }
  ];
}
function video__elsewhere_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true
    },
    {
      type: "string",
      name: "video_url",
      label: "video_url",
      required: true
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true
    }
  ];
}

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "master";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "assets"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: ""
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Articles",
        name: "articles",
        path: "_articles",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...articleFields()
        ]
      },
      {
        format: "md",
        label: "Publications",
        name: "publications",
        path: "_publications",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...publicationFields()
        ]
      },
      {
        format: "md",
        label: "Categories",
        name: "categories",
        path: "_categories",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...categoryFields()
        ]
      },
      {
        format: "md",
        label: "Videos",
        name: "videos",
        path: "_videos_elsewhere",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...video__elsewhere_Fields()
        ]
      },
      {
        format: "md",
        label: "Misc",
        name: "misc",
        path: "_misc_elsewhere",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...misc__elsewhere_Fields()
        ]
      }
    ]
  }
});
export {
  config_default as default
};
