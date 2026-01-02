import { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,    
    create: () => true, 
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: 'number', type: 'number', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'text', required: true },
  ],
};
