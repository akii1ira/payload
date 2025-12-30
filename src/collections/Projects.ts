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
    { name: 'name', type: 'text', required: true },
  ],
};
