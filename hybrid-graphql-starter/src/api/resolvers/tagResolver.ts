import {Tag} from '@sharedTypes/DBTypes';
import {
  fetchAllTags,
  fetchTagsByMediaId,
  postTag,
  deleteTag,
} from '../models/tagModel';

export default {
  MediaItem: {
    tags: async (parent: {media_id: string}) => {
      console.log(parent);
      return await fetchTagsByMediaId(Number(parent.media_id));
    },
  },
  Query: {
    tags: async () => {
      return await fetchAllTags();
    },
  },
  Mutation: {
    createTag: async (
      _parent: undefined,
      args: {input: Omit<Tag, 'tag_id'>},
    ) => {
      console.log(args);
      return await postTag(args.input);
    },
    deleteTag: async (_parent: undefined, args: {input: string}) => {
      console.log(args);
      return await deleteTag(Number(args.input));
    },
  },
};
