import { defineField, defineType } from "sanity";

export const blog = defineType({
    title: 'Blog',
    type:'document',
    name:'blog',
    fields:[
        defineField({
            name:'name',
            type:'string',
            title:'Enter Name'
        }),
        defineField({
            name:'subheading',
            type:'string',
            title:'Enter subheading'
        }),
        defineField({
            name:'author',
            type:'reference',
            title:'Enter Author',
            to: [{type:'blog'}]
        }),
        defineField({
           title:'Enter Image',
           name:'image',
           type:'image',
           fields:[
            {
                name:'caption',
                type:'string',
                title:'Enter Caption'
            },
           ]
          }),
          defineField({
            name:'address',
            type:'object',
            title:'Enter Address',
            fields:[
                {name:'street',type:'string',title:'Enter street'},
                {name: 'city', type: 'string', title: 'Enter city'},
                {name: 'country', type: 'string', title: 'Enter country'}
            ]
          }),
    ]
})