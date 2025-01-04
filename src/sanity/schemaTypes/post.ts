import { defineField, defineType } from "sanity";

export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Post Title',
            type: 'string',
            description: 'Title of the post',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Slug of the post',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "summary",
            title: "Summary",
            type: "text",
            description: "Summary of the post",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            description: 'Main image of the post',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [{
                type: "block"
            }]
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "reference",
            to: [{
                type: "author"
            }]
        }),
        defineField({
            name: "readTime",
            title: "Read Time",
            type: "number",
            description: "Estimated read time in minutes",
            validation: Rule => Rule.required().min(1).max(60).error('Read time should be between 1 and 60 minutes')
        }),
        defineField({
            name: "publishDate",
            title: "Publish Date",
            type: "datetime",
            description: "Date and time when the post was published",
            validation: Rule => Rule.required()
        })
    ]
});
