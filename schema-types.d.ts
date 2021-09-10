/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  namespace Schema {
    /**
     * Post
     */
    interface PostSchema extends Sanity.Document {
      _type: "post";

      /**
       * Title - `String`
       */
      title?: string;

      /**
       * Slug - `Slug`
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Author - `Reference`
       */
      author?: Sanity.Reference<AuthorSchema>;

      /**
       * Main image - `Image`
       */
      mainImage?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Categories - `Array`
       */
      categories?: Array<Sanity.KeyedReference<CategorySchema>>;

      /**
       * Published at - `Datetime`
       */
      publishedAt?: string;

      /**
       * Body - `RegistryReference`
       */
      body?: BlockContentSchema;
    }

    /**
     * Author
     */
    interface AuthorSchema extends Sanity.Document {
      _type: "author";

      /**
       * Name - `String`
       */
      name?: string;

      /**
       * Slug - `Slug`
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Image - `Image`
       */
      image?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Bio - `Array`
       */
      bio?: Array<Sanity.Keyed<Sanity.Block>>;
    }

    /**
     * Category
     */
    interface CategorySchema extends Sanity.Document {
      _type: "category";

      /**
       * Title - `String`
       */
      title?: string;

      /**
       * Description - `Text`
       */
      description?: string;
    }

    /**
     * Comment
     */
    interface CommentSchema extends Sanity.Document {
      _type: "comment";

      /**
       * Name - `String`
       */
      name?: string;

      /**
       * Approved - `Boolean`
Comments won't show on the site without approval
       */
      approved?: boolean;

      /**
       * Email - `String`
       */
      email?: string;

      /**
       * Comment - `Text`
       */
      comment?: string;

      /**
       * Post - `Reference`
       */
      post?: Sanity.Reference<PostSchema>;
    }

    /**
     * Title
     */
    interface TitleSchema extends Sanity.Document {
      _type: "title";

      /**
       * Name - `String`
       */
      name?: string;

      /**
       * Insignia (Medallion Name) - `String`
       */
      insignia?: string;

      /**
       * Slug - `Slug`
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Image - `Image`
       */
      image?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Description - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;
    }

    type BlockContentSchema = Array<
      | Sanity.Keyed<Sanity.Block>
      | Sanity.Keyed<{
          asset: Sanity.Asset;
          crop?: Sanity.ImageCrop;
          hotspot?: Sanity.ImageHotspot;
        }>
    >;

    type Document =
      | PostSchema
      | AuthorSchema
      | CategorySchema
      | CommentSchema
      | TitleSchema;
  }
}
