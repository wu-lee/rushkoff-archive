import type { TinaField } from "tinacms";
export function articleFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "string",
      name: "publication",
      label: "publication",
      options: [],
      required: true,
    },
    {
      type: "string",
      name: "blurb",
      label: "blurb",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "refs",
      label: "refs",
    },
    {
      type: "string",
      name: "sources",
      label: "sources",
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
  ] as TinaField[];
}
export function categoryFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
  ] as TinaField[];
}
export function misc__elsewhere_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
  ] as TinaField[];
}
export function publicationFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "string",
      name: "url",
      label: "url",
    },
  ] as TinaField[];
}
export function video__elsewhere_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "string",
      name: "video_url",
      label: "video_url",
      required: true,
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
  ] as TinaField[];
}
