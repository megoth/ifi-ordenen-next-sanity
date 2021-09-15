/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  namespace Schema {
    /**
     * Post
     */
    interface Post extends Sanity.Document {
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
      author?: Sanity.Reference<Author>;

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
      categories?: Array<Sanity.KeyedReference<Category>>;

      /**
       * Published at - `Datetime`
       */
      publishedAt?: string;

      /**
       * Body - `RegistryReference`
       */
      body?: BlockContent;
    }

    /**
     * Author
     */
    interface Author extends Sanity.Document {
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
    interface Category extends Sanity.Document {
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
    interface Comment extends Sanity.Document {
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
      post?: Sanity.Reference<Post>;
    }

    /**
     * Tittel
     */
    interface Title extends Sanity.Document {
      _type: "title";

      /**
       * Navn - `String`
       */
      name?: string;

      /**
       * Medaljenavn - `String`
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
       * Bilde - `Image`
       */
      image?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Beskrivelse - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Rekkefølge - `Number`
       */
      order?: number;
    }

    /**
     * Forening/Organisasjon
     */
    interface Association extends Sanity.Document {
      _type: "association";

      /**
       * Navn - `String`
       */
      name?: string;

      /**
       * Forkortelse - `String`
       */
      short?: string;

      /**
       * Aktiv - `Boolean`
       */
      active?: boolean;

      /**
       * Slug - `Slug`
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Nettside - `Url`
       */
      url?: string;

      /**
       * Description - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Tidligere kjent som - `Reference`
       */
      previous?: Sanity.Reference<Association>;
    }

    /**
     * Person
     */
    interface Person extends Sanity.Document {
      _type: "person";

      /**
       * Navn - `String`
       */
      name?: string;

      /**
       * Slug (brukernavn) - `Slug`
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Main image - `Image`
       */
      mainImage?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Tildelinger - `Array`
       */
      titles?: Array<Sanity.Keyed<Award>>;

      /**
       * Foreninger/organisasjoner - `Array`
       */
      associations?: Array<Sanity.KeyedReference<Association>>;
    }

    type BlockContent = Array<
      | Sanity.Keyed<Sanity.Block>
      | Sanity.Keyed<{
          asset: Sanity.Asset;
          crop?: Sanity.ImageCrop;
          hotspot?: Sanity.ImageHotspot;
        }>
    >;

    type Award = {
      _type: "award";

      /**
       * Tittel - `Reference`
       */
      title?: Sanity.Reference<Title>;

      /**
       * År - `Date`
       */
      year?: string;

      /**
       * Rekkefølge (ift år) - `Number`
       */
      yearOrder?: number;

      /**
       * Fremhevet grunnlag - `Array`
       */
      reason?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Grunnlag (resten) - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;
    };

    type Document =
      | Post
      | Author
      | Category
      | Comment
      | Title
      | Association
      | Person;
  }
}
