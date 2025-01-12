import { defineType, defineField } from "sanity";

export const post = defineType({
    name: "post",
    type: "document",
    title: "Post",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Post Title",
            description: "The Title of the post",
            validation: (Rule) => Rule.required(),
        }),

        //slug field

        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength:96
            },
        }),
        defineField({
            name: "summary",
            type: "text",
            title: "Summary",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: 'Image',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type:'block'}]
        }),

    ],
});