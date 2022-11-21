export default {
    name: 'localities',
    title: 'Localities',
    type: 'document',
    fields: [
        {
            name: 'place',
            title: 'Place',
            type: 'string',
        },
        {
            name: 'noOfPlaces',
            title: 'Number of Places',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'place',
                maxLength: 90,
            }
        }
    ]
}